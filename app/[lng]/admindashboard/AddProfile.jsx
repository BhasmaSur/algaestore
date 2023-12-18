import React, { useEffect, useRef, useState } from 'react';
import { USER_EXCEL_FIELDS } from '../../constants/uploadData';
import { signUpValidations } from '../../utils/loginUtils';
import httpService from '../../services/httpService';
import * as XLSX from 'xlsx';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';

const AddProfile = () => {
  const fileInput = useRef();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null)
  const selectFile = () => {
    fileInput.current.click();
  };
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData = XLSX.utils.sheet_to_json(sheet);
      setData(parseData);
    };
  };

  useEffect(() => {
    if (data) {
      let userDetailsList = [];
      data.map((row) => {
        let userDetail = {};
        Object.keys(USER_EXCEL_FIELDS).map((key) => {
          let fieldValue = row[key];
          userDetail[USER_EXCEL_FIELDS[key]] =
            typeof fieldValue === 'string' || fieldValue instanceof String
              ? fieldValue.trim()
              : fieldValue;
        });
        userDetailsList.push(userDetail);
      });
      let signUpBatch = [];
      let userDetailsBatch = [];
      userDetailsList.forEach((user) => {
        const { username, password, type } = user;
        if (username && password && type) {
          const { valid, message } = signUpValidations(
            username,
            password,
            password
          );
          if (valid) {
            signUpBatch.push({
              username,
              password,
              type,
            });
            delete user.password;
            userDetailsBatch.push(user);
          }
        }
      });
      if (signUpBatch.length > 0) {
        httpService(
          CONTROLLERS.batchSignUp,
          METHODS.post,
          { signUpBatch },
          API
        ).then((res) => {
          if (res.data.batchAddStatus) {
            httpService(
              CONTROLLERS.batchProfilesAdd,
              METHODS.post,
              { userDetailsBatch },
              API
            ).then((src) => {
              if (src) {
                if (src.data.batchAddStatus) {
                  setMessage('Users created successfully');
                } else {
                    setMessage('Users added successfully but profile addition failed.')
                //   alert(
                //     'Users added successfully but profile addition failed.'
                //   );
                }
              }
            });
          } else {
            setMessage(res.data.message)
            // alert(res.data.message);
          }
        });
      }
    }
  }, [data]);
  return (
    <div className='sm:text-[32px] text-[20px]'  style={{ color: 'white', textAlign: 'center'}}>
      <div>Select Excel File To Upload</div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10" onClick={selectFile}>Upload</button>
        <input
          onChange={handleFileUpload}
          type="file"
          style={{ display: 'none' }}
          ref={fileInput}
        />
      </div>
      {message && <div className='mt-20' style={{color: 'red'}}>
        {message}
      </div>}
    </div>
  );
};

export default AddProfile;
