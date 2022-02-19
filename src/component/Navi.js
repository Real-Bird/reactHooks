import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav style={{ marginBottom: 20 }}>
    <Link
      to="/"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      Basic
    </Link>
    <Link
      to="/useinput"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useInput
    </Link>

    <Link
      to="/usetaps"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useTaps
    </Link>
  </nav>
);

export default Navigation;
