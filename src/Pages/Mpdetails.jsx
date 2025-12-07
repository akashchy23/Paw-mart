import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";


const Mpdetails = () => {
    const [services, setServices] = useState([]);

    const { id } = useParams();
    const { user } = use(AuthContext)

    useEffect(() => {
        fetch(`https://missionscic10-tau.vercel.app/services/${id}`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = parseInt(form.buyerEmail.value);
        const quantity = form.quantity.value;
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value
        const note = form.note.value;

        const formData = {
            productId: id,
            productName,
            buyerName,
            buyerEmail,
            quantity,
            price,
            address,
            phoneNumber,
            note,
            date: new Date()
        }
   
        axios.post("https://missionscic10-tau.vercel.app/orders", formData)
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
          console.log(formData)
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row gap-10">
                {/* Left — Image */}
                <div className="lg:w-1/2">
                    <img
                        src={services?.image}
                        alt={services?.serviceName}
                        className="w-full rounded-xl shadow-md"
                    />
                </div>

                {/* Right — Details + Form */}
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold mb-4">{services?.serviceName}</h1>

                    <p>
                        <span className="font-semibold">Category:</span>{" "}
                        {services?.category}
                    </p>
                    <p>
                        <span className="font-semibold">Provider:</span>{" "}
                        {services?.provider}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {services?.email}
                    </p>

                    <p className="flex items-center gap-2">
                        <span className="font-semibold">Rating:</span> ⭐{" "}
                        {services?.rating}
                    </p>

                    <p>
                        <span className="font-semibold">Slots Available:</span>{" "}
                        {services?.slots}
                    </p>

                    <p className="text-gray-700">{services?.description}</p>

                    <p className="text-lg font-bold">Price: ${services?.price}</p>

                    {/* Booking Form */}
                    <div className="mt-6 pt-6 border-t">
                        <h2 className="text-3xl font-bold text-center mb-5">
                            Book Session
                        </h2>
                        <button className="btn w-full py-3 font-semibold text-white bg-purple-600" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                    <legend className="fieldset-legend">Order details</legend>

                                    <label className="label">Product Name</label>
                                    <input name="productName" readOnly defaultValue={services?.name} type="text" className="input" placeholder="Product Name" />

                                    <label className="label">Buyer Name</label>
                                    <input name="buyerName" defaultValue={user?.displayName} type="text" className="input" placeholder="Buyer Name<" />

                                    <label className="label">Buyer Email</label>
                                    <input name="buyerEmail" readOnly defaultValue={user?.email} type="email" className="input" placeholder="Buyer email" />

                                    <label className="label">Quantity</label>
                                    <input required name="quantity" type="number" className="input" placeholder="Quantity" />

                                    <label className="label">Price</label>
                                    <input name="price" readOnly defaultValue={services?.price} type="number" className="input" placeholder="price" />

                                    <label className="label">Address</label>
                                    <input required name="address" type="text" className="input" placeholder="address" />

                                    <label className="label">Phone Number</label>
                                    <input required name="phoneNumber" type="text" className="input" placeholder="Phone Number" />

                                    <label className="label">Additional note</label>
                                    <textarea name="note" type="text" placeholder="Additional note" className="input" />

                                    <button className="btn btn-primary" type="submit">Order</button>
                                </form>

                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mpdetails;