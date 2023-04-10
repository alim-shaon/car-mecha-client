import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow/OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  //   console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = window.confirm(`Do you want to cancle this order `);
    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = orders.filter((odr) => odr._id !== _id);
            setOrders(remaining);
            // alert("delete successfully");
          }
        });
    }
  };

  const handleStatusUpdate = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== _id);
          const approving = orders.find((odr) => odr._id === _id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="my-8">
      <h2 className="text-5xl text-center">You Have: {orders.length} Orders</h2>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order._id}
                  handleDelete={handleDelete}
                  handleStatusUpdate={handleStatusUpdate}
                  order={order}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
