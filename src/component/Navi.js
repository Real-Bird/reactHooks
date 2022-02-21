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
    <Link
      to="/useeffect"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useeffect
    </Link>
    <Link
      to="/useeffect2"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useeffect2
    </Link>
    <Link
      to="/useeffect3"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useeffect3
    </Link>
    <Link
      to="/usetitle"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      usetitle
    </Link>
  </nav>
);

export default Navigation;
