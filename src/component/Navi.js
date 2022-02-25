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
      useEffect
    </Link>
    <Link
      to="/useeffect2"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useEffect2
    </Link>
    <Link
      to="/useeffect3"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useEffect3
    </Link>
    <Link
      to="/usetitle"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useTitle
    </Link>
    <Link
      to="/useclick"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useClick
    </Link>
    <Link
      to="/useconfirm"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useConfirm
    </Link>
    <Link
      to="/usepreventleave"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      usePreventLeave
    </Link>
    <Link
      to="/usebeforeleave"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useBeforeLeave
    </Link>
    <Link
      to="/usefadein"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useFadein
    </Link>
    <Link
      to="/usenetwork"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useNetwork
    </Link>
    <Link
      to="/usescroll"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useScroll
    </Link>
    <Link
      to="/usefullscreen"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useFullscreen
    </Link>
    <Link
      to="/usenotification"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useNotification
    </Link>
    <Link
      to="/useaxios"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      useAxios
    </Link>
  </nav>
);

export default Navigation;
