import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-full md:w-3/4 lg:w-1/2 mb-16 md:mb-36 lg:mb-44">
            <img
              src={person}
              alt="person"
              className=" w-4/5 h-full rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              alt="parts"
              className=" absolute right-5 top-1/2 border-8 w-3/5 h-full  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 px-3 lg:px-12">
            <p className="text-2xl my-4 font-bold text-orange-500">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of expreience <br /> in this field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. <br /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam, voluptas sit? Voluptas molestiae libero
              quaerat ut accusamus. Odit, tenetur repellendus.
            </p>
            <button className="btn border-red-600 bg-red-600">
              Get more Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
