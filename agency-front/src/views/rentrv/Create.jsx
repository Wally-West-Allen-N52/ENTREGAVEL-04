import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RentRVService from "../../services/RentRVService";

export default function Create() {
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditRentRV = (e) => {
        e.preventDefault();

        const rentrv = { category, model };

        if (id) {
            RentRVService.updateRentRV(id, rentrv)
                .then((Response) => {
                    navigate("/RentRV")
                })
        } else {
            RentRVService.createRentRV(rentrv)
                .then((Response) => {
                    navigate("/RentRV")
                })
        }
    }

    useEffect(() => {
        function getRentRVById() {
            if (id) {
                RentRVService.getRentRVById(id)
                    .then((response) => {
                        setCategory(response.data.category);
                        setModel(response.data.model);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getRentRVById()
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Edit" : "Create"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Category" className="form-label">Category</label>
                        <input type="text" id="Category" className="from-control" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Model" className="form-label">Model</label>
                        <input type="text" id="Model" className="from-control" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditRentRV(e)}>Send</button>

                    <Link to="/RentRV" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
                </fieldset>
            </form>
        </div>
    )
}