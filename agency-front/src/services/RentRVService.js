import axios from "axios";

const RENTRV_API_ULR = "http://localhost:8080/rentRV";

class RentRVService {
    getAllRentRVs() {
        return axios.get(RENTRV_API_ULR);
    }

    createRentRV(rentrv) {
        return axios.post(RENTRV_API_ULR, rentrv);
    }
    
    getRentRVById(rentRVId) {
        return axios.get(RENTRV_API_ULR + "/" + rentRVId);
    }
    
    updateRentRV(rentRVId, rentrv) {
        return axios.put(RENTRV_API_ULR + "/" + rentRVId, rentrv);
    }

    deleteRentRV(rentRVId) {
        return axios.delete(RENTRV_API_ULR + "/" + rentRVId);
    }
}
export default new RentRVService();