import { db } from "../../app/services/firebaseService";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default async function changeActive(req, res) {
    const { method, query } = req;

    try {
        if (method === 'POST') {
            const { username } = query;

            if (!username) {
                res.status(400).json({
                    error: 'Bad Request'
                });
                return;
            }

            const userRef = doc(db, "as_profile_col", username);
            let userDoc = await getDoc(userRef);


            if (userDoc.exists()) {
                const currentActive = userDoc.data().active;
                const updatedActive = !currentActive;
                console.log("Current Active", currentActive);
                console.log("Updated Active", updatedActive);

                await setDoc(userRef, { active: updatedActive }, { merge: true });
                res.status(200).json({
                    message: 'Field Updated Successfully',
                    username: username,
                    active: updatedActive
                });
            }
            else{
                res.status(404).json({
                    error: "User not found"
                })
            }

        } else {
            res.status(405).json({
                error: 'Method not allowed'
            });
        }
    } catch (error) {
        console.error('Error updating active field:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}
