import axios from "axios";

const PLANTRIP_API_URL = "http://localhost:8080/planTrip";

class PlanTripService {
    getAllPlanTrip() {
        return axios.get(PLANTRIP_API_URL);
    }
    createPlanTrip(plan_trip) {
        return axios.post(PLANTRIP_API_URL, plan_trip);
    }
    getPlanTripById(plan_tripID) {
        return axios.get(PLANTRIP_API_URL + "/" + plan_tripID);
    }
    updatePlanTrip(plan_trip, plan_tripID) {
        return axios.put(PLANTRIP_API_URL + "/" + plan_trip, plan_tripID);
    }
    deletePlanTrip(plan_tripID) {
        return axios.delete(PLANTRIP_API_URL + "/" + plan_tripID)
    }
}
export default new PlanTripService();