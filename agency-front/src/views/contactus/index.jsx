import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactUsService from "../../services/ContactUsService";

export default function Index() {
  const [contactus, setContactus] = useState([])

  const getAllContactUs = () => {
    ContactUsService.getAllContactUs()
      .then((Response) => {
        setContactus(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllContactUs();
  }, []);

  const deleteContactUs = (contactID) => {
    ContactUsService.deleteContactUs(contactID)
      .then((Response) => {
        getAllContactUs();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API")
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Contact us anytime</h1>
      </header>

      <div className="container p5">
        <Link to="/contactus-create" className="btn btn-primary mb-2">Create somethong</Link>

        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>New Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contactus.map((contactUs) => (
                <tr key={contactUs.contactID}>
                  <td>{contactUs.contactID}</td>
                  <td>{contactUs.email}</td>
                  <td>{contactUs.newMessage}</td>
                  <td className="d-flex">
                    <Link to={`/contactus-Update/${contactUs.contactID}`} className="btn btn-info">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContactUs(contactUs.contactID)}
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