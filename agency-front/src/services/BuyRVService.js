import axios from "axios";

const BUYRV_API_ULR = "http://localhost:8080/buyRV";

class BuyRVService {
    getAllBuyRVs() {
        return axios.get(BUYRV_API_ULR);
    }

    createBuyRV(buyrv) {
        return axios.post(BUYRV_API_ULR, buyrv);
    }
    
    getBuyRVById(buyRVId) {
        return axios.get(BUYRV_API_ULR + "/" + buyRVId);
    }
    
    updateBuyRV(buyRVId, buyrv) {
        return axios.put(BUYRV_API_ULR + "/" + buyRVId, buyrv);
    }

    deleteBuyRV(buyRVId) {
        return axios.delete(BUYRV_API_ULR + "/" + buyRVId);
    }
}
export default new BuyRVService();