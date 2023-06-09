import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-32 bg-black text-white text-base-content text-center lg:text-left">
      <div className="justify-items-center">
        <img src={logo} alt="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title opacity-100 text-white">Services</span>
        <Link to={""} className="link link-hover">
          Branding
        </Link>
        <Link to={""} className="link link-hover">
          Design
        </Link>
        <Link to={""} className="link link-hover">
          Marketing
        </Link>
        <Link to={""} className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title opacity-100 text-white">Company</span>
        <Link to={""} className="link link-hover">
          About us
        </Link>
        <Link to={""} className="link link-hover">
          Contact
        </Link>
        <Link to={""} className="link link-hover">
          Jobs
        </Link>
        <Link to={""} className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title opacity-100 text-white">Legal</span>
        <Link to={""} className="link link-hover">
          Terms of use
        </Link>
        <Link to={""} className="link link-hover">
          Privacy policy
        </Link>
        <Link to={""} className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
