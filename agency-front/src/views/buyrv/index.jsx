import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import BuyRVService from "../../services/BuyRVService";

export default function Index() {
    const [buyrv, setBuyrv] = useState([]);

    const getAllBuyRVs = () => {
      BuyRVService.getAllBuyRVs()
        .then((response) => {
            setBuyrv(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllBuyRVs();
    }, []);

    const deleteBuyRV = (buyID) => {
      BuyRVService.deleteBuyRV(buyID)
          .then((response) => {
            getAllBuyRVs();
          })
          .catch((error) => {
            console.log(error);
            const { data } = error.response;
            if (data.status === 500) {
              alert("Erro na API");
            }
          });
      };
    
      return (
        <>
          <header className="header">
            <h1 className="container">Register a category</h1>
          </header>
          <div className="container p-5">
            <Link to="/buyrv-create" className="btn btn-primary mb-2">
              Create Category
            </Link>
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
                  {buyrv.map((buyRV) => (
                    <tr key={buyRV.buyID}>
                      <td>{buyRV.buyID}</td>
                      <td>{buyRV.category}</td>
                      <td>{buyRV.model}</td>
                      <td className="d-flex">
                        <Link
                          to={`/buyrv-Update/${buyRV.buyID}`}
                          className="btn btn-info"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteBuyRV(buyRV.buyID)}
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
      );
}