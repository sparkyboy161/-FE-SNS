import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import './styles/Navbar.scss'

export default function Navbar() {
  return (
    <Layout className="navbar__container">
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </Layout>
  );
}
