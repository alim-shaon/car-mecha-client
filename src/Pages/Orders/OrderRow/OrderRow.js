import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    serviceName,
    email,
    name,
    phone,
    price,
    message,
    service,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});
  //   console.log(order);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-24 h-24">
              <img
                src={orderService?.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-error badge-sm">
          ${price ? price : orderService.price}
        </span>
      </td>
      <td className="w-full">{email}</td>
      <td className="">{message}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className={
            status ? "btn btn-success btn-xs" : "btn btn-warning btn-xs"
          }
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
