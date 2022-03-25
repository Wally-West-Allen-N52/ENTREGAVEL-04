import axios from "axios";

const CONTACTUS_API_URL = "http://localhost:8080/contactUs";

class ContactUsService {
    getAllContactUs() {
        return axios.get(CONTACTUS_API_URL);
    }

    createContactUs(contactus) {
        return axios.post(CONTACTUS_API_URL, contactus);
    }

    getContacUsById(contactID) {
        return axios.get(CONTACTUS_API_URL + "/" + contactID);
    }

    updateContactUs(contactID, contactus) {
        return axios.put(CONTACTUS_API_URL + "/" + contactID, contactus);
    }

    deleteContactUs(contactID) {
        return axios.delete(CONTACTUS_API_URL + "/" + contactID);
    }
}
export default new ContactUsService();