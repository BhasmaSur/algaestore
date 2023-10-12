import { getAllSeller } from "../../app/services/profileService";

export default async function handler(req, res) {

    const profileDetails = await getAllSeller();
    if (profileDetails) {
        res.json(profileDetails)
    }

}