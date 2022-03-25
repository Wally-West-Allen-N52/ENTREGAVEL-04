import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RentRVService from "../../services/RentRVService";

export default function Index() {
  const [rentrv, setRentrv] = useState([]);

  const getAllRentRVs = () => {
    RentRVService.getAllRentRVs()
      .then((response) => {
        setRentrv(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllRentRVs();
  }, []);

  const deleteRentRV = (rentID) => {
    RentRVService.deleteRentRV(rentID)
      .then((response) => {
        getAllRentRVs();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Error in API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Register a category</h1>
      </header>

      <div className="container p5">
        <Link to="/rentrv-create" className="btn btn-primary mb-2">Create Category</Link>

        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Model</th>
                <th>Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {rentrv.map((rentRV) => (
                <tr key={rentRV.rentID}>
                  <td>{rentRV.rentID}</td>
                  <td>{rentRV.category}</td>
                  <td>{rentRV.model}</td>
                  <td className="d-flex">
                    <Link
                      to={`/rentrv-Update/${rentRV.rentID}`}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRentRV(rentRV.rentID)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
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