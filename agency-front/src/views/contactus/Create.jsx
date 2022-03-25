import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactUsService from "../../services/ContactUsService";

export default function Create() {
    const [email, setEmail] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditContactus = (e) => {
        e.preventDefault();

        const contactus = { email, newMessage };

        if (id) {
            ContactUsService.updateContactUs(id, contactus)
                .then((Response) => {
                    navigate("/ContactUs")
                })
        } else {
            ContactUsService.createContactUs(contactus)
                .then((Response) => {
                    navigate("/ContactUs")
                })
        }
    }

    useEffect(() => {
        function getContactusById() {
            if (id) {
                ContactUsService.getContacUsById(id)
                    .then((response) => {
                        setEmail(response.data.email);
                        setNewMessage(response.data.newMessage);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getContactusById()
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Edit" : "Create"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="text" id="Email" className="from-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="newMessage" className="form-label">New Message</label>
                        <input type="text" id="newMessage" className="from-control" placeholder="New Message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditContactus(e)}>Send</button>

                    <Link to="/ContactUs" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
                </fieldset>
            </form>
        </div>
    )
}

