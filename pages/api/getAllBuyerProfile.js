import { getAllBuyer } from "../../app/services/profileService";

export default async function handler(req, res) {

    const profileDetails = await getAllBuyer();
    if (profileDetails) {
        res.json(profileDetails)
    }

}