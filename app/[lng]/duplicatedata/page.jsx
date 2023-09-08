"use client";

import { useEffect } from "react";
import { db } from "../../services/firebaseService";
import { collection, getDocs } from "firebase/firestore";

const page = () => {

    const duplicateDoc = async () => {
        try {
            // Replace 'your_collection_name' with your Firestore collection name.
            const querySnapshot = await getDocs(collection(db, "as_product_col"));
            
            querySnapshot.forEach((doc) => {
                if(doc.id == 'product_00121'){
                    const copiedData = doc.data();
                    const newAlgaeData = doc(collection(db, "product_00122"));
                    // setDoc(newAlgaeData, copiedData);
                    console.log(copiedData)
                }
            })
         
        } catch (error) {
            console.error('Error duplicating document: ', error);
        }
    }

    useEffect(() => {
        duplicateDoc();
    }, [])

    return(
        <div>
            <h1>Check Console</h1>
        </div>
    )
}

export default page;