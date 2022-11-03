import React, { FC } from "react";
import "./styles.css";

const Sidebar:FC = () => {
    return (
        <img className="sidebar" src={require('../../../assets/Sidebar.png')} />
    );
}

export default Sidebar;