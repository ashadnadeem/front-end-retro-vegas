import React, { FC } from "react";

import "./styles.css";

type Props = {
}

const AdminHeader: FC<Props> = ({}) => {
    return(
        <div className="headerBg">
            <label className="text">Admin Portal</label>
            <div className="menu">
                <label className="text" onClick={() => {console.log('customer')}}>Customers</label>
                <label className="text">Sellers</label>
                <label className="text">Admins</label>
                <label className="logout">Logout</label>
            </div>
        </div>
    );
}

export {AdminHeader};