import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="py-20">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our service area</h2>
        <p className="w-3/4 mx-auto py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed
          aspernatur iste sint incidunt asperiores nulla recusandae commodi
          voluptate? Dolore!
        </p>
      </div>
      <div className="grid gap-6 mx-auto justify-items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="btn btn-outline btn-error ">More Services</button>
      </div>
    </div>
  );
};

export default Services;
