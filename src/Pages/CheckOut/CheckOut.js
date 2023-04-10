import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || `unregistered`;
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      serviceName: title,
      name,
      email,
      phone,
      price,
      message,
    };
    if (phone.length <= 10) {
      //   console.log(phone.length);
      window.alert("Phone number must be 10 character or longer");
      return;
    }
    console.log(order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed success");
          form.reset();
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="my-16">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order {title}</h2>
        <h4 className="text-3xl">Price: ${price}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="lastName"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full"
            name="email"
          />
        </div>
        <textarea
          className="textarea textarea-bordered textarea-lg w-full h-40"
          placeholder="Additional Information"
          name="message"
        ></textarea>
        <input
          className="btn btn-outline btn-success"
          type="submit"
          value="place Your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
