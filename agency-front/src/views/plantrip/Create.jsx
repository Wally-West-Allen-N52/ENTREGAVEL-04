import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RentRVService from "../../services/RentRVService";
import BuyRVService from "../../services/BuyRVService";
import ContactUsService from "../../services/ContactUsService";
import PlanTripService from "../../services/PlanTripService";

export default function Create() {
    const [beginning_from, setBeginning_from] = useState("");
    const [arriving_at, setArriving_at] = useState("");

    const [rentRV, setRentrv] = useState({ rentID: "", category: "", model: "" });
    const [buyRV, setBuyrv] = useState({ buyID: "", category: "", model: "" });
    const [contactUs, setContactus] = useState({ contactID: "", email: "", newMessage: "" });
    
    const [rentRVS, setRentRVS] = useState([]);
    const [buyRVS, setBuyRVS] = useState([]);
    const [contactUSS, setContactUSS] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const getAllRentRVs = () => {
        RentRVService.getAllRentRVs()
            .then((response) => {
                setRentRVS(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllRentRVs();
    }, []);

    const getAllBuyRVs = () => {
        BuyRVService.getAllBuyRVs()
            .then((response) => {
                setBuyRVS(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllBuyRVs();
    }, []);

    const getAllContactUs = () => {
        ContactUsService.getAllContactUs()
            .then((response) => {
                setContactUSS(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllContactUs();
    }, []);

    const createOrEditPlantrip = (e) => {
        e.preventDefault();
        const plantrip = { beginning_from, arriving_at, rentRV, buyRV, contactUs };

        console.log(plantrip)

        if (id) {
            PlanTripService.updatePlanTrip(id, plantrip)
                .then((response) => {
                    navigate("/PlanTrip");
                });
        } else {
            PlanTripService.createPlanTrip(plantrip)
                .then((response) => {
                    navigate("/PlanTrip");
                });
        }
    };

    useEffect(() => {
        function getPlanTripById() {
            if (id) {
                PlanTripService.getPlanTripById(id).then((response) => {
                    setBeginning_from(response.data.beginning_from);
                    setArriving_at(response.data.arriving_at);

                    setRentrv({
                        rentID: response.data.rentRV.rentID,
                        category: response.data.rentRV.category,
                        model: response.data.rentRV.model,
                    });
                    setBuyrv({
                        buyID: response.data.buyRV.buyID,
                        category: response.data.buyRV.category,
                        model: response.data.buyRV.model,
                    });
                    setContactus({
                        contactID: response.data.contactUs.contactID,
                        email: response.data.contactUs.email,
                        newMessage: response.data.contactUs.newMessage,
                    });
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
        getPlanTripById();
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="tex-center">{id ? "Edit" : "Create"}</h2>
                    </legend>

                    <div className="form-group mb-3">
                        <label htmlFor="beginning_from" className="form-label">
                            Beginning from
                        </label>
                        <input
                            type="text"
                            id="beginning_from"
                            className="form-control"
                            placeholder="beginning"
                            value={beginning_from}
                            onChange={(e) => setBeginning_from(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="arriving_at" className="form-label">
                            Arriving at
                        </label>
                        <input
                            type="text"
                            id="arriving_at"
                            className="form-control"
                            placeholder="arriving"
                            value={arriving_at}
                            onChange={(e) => setArriving_at(e.target.value)}
                        />
                    </div>

          {/* ==================================  RENT RV  ==================================== */}
                    <div className="form-group mb-3">
                        <label htmlFor="rentID" className="form-label">
                            Rent a RV
                        </label>
                        <select
                            id="rentID"
                            name="rentID"
                            className="form-select"
                            onChange={(e) =>
                                setRentrv({ rentID: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT">{id ? rentRV.category : 'Choose a category'}</option>
                            {rentRVS.map((rentRV) => (
                                <option key={rentRV.rentID} value={rentRV.rentID}>
                                    {rentRV.category} - {rentRV.model}
                                </option>
                            ))}
                        </select>
                    </div>

          {/* ==================================  BUY RV  ==================================== */}
                    <div className="form-group mb-3">
                        <label htmlFor="buyID" className="form-label">
                            Buy a RV
                        </label>
                        <select
                            id="buyID"
                            name="buyID"
                            className="form-select"
                            onChange={(e) =>
                                setBuyrv({ buyID: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT">{id ? buyRV.category : 'Choose a category'}</option>
                            {buyRVS.map((buyrv) => (
                                <option key={buyrv.buyID} value={buyrv.buyID}>
                                    {buyrv.category} - {buyrv.model}
                                </option>
                            ))}
                        </select>
                    </div>

         {/* ==================================  CONTACT US  ==================================== */}
                    <div className="form-group mb-3">
                        <label htmlFor="buyID" className="form-label">
                            Contact us
                        </label>
                        <select
                            id="contactus"
                            name="contactusID"
                            className="form-select"
                            onChange={(e) =>
                                setContactus({ contactID: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT">{id ? contactUs.email : 'Send us a e-mail'}</option>
                            {contactUSS.map((contactus) => (
                                <option key={contactus.contactID} value={contactus.contactID}>
                                    {contactus.email} - {contactus.newMessage}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => createOrEditPlantrip(e)}
                    >
                        Send
                    </button>
                    <Link
                        to="/PlanTrip"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancel
                    </Link>
                </fieldset>
            </form>
        </div>
    )
}