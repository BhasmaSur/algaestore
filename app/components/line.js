import React from 'react'

const Line = (props) => {
  return (
    <>
      <div className="line-line"></div>
      <style jsx>
        {`
          .line-line {
            width: 32px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  )
}

export default Line
