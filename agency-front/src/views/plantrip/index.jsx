import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlanTripService from "../../services/PlanTripService";

export default function Index() {
  const [plantrip, setPlanTrip] = useState([]);

  const getAllPlanTrip = () => {
    PlanTripService.getAllPlanTrip()
      .then((response) => {
        setPlanTrip(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPlanTrip();
  }, []);
  console.log(plantrip);
  

  const deletePlanTrip = (plantripID) => {
    PlanTripService.deletePlanTrip(plantripID)
      .then((response) => {
        getAllPlanTrip();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Get a best trip</h1>
      </header>

      <div className="container p5">
        <Link to="/plantrip-create" className="btn btn-primary mb-2">Find the best trips</Link>

        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>plan_tripID</th>
                <th>beginning_from</th>
                <th>arriving_at</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {plantrip.map((planTrip) => (
                <tr key={planTrip.plan_tripID}>
                  <td>{planTrip.plan_tripID}</td>
                  <td>{planTrip.beginning_from}</td>
                  <td>{planTrip.arriving_at}</td>

                  {/*  */}
                  <td>{planTrip.rentRV.category} {planTrip.rentRV.model}</td>
                  <td>{planTrip.buyRV.category} {planTrip.buyRV.model}</td>
                  <td>{planTrip.contactUs.email} {planTrip.contactUs.newMessage}</td>

                  <td className="d-flex">
                    <Link
                      to={`/plantrip-update/${planTrip.plan_tripID}`}
                      className="btn btn-info">Edit</Link>
                    <button
                      className="btn-btn-danger"
                      onClick={() => deletePlanTrip(planTrip.plan_tripID)}
                      style={{ marginLeft: "10px" }}>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}