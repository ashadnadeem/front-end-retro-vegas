import React, { FC } from "react";


import "./styles.css";

type Props = {
    name: string;
    value: string;
}

const NamedText: FC<Props> = ({ name, value }) => {
    return(
        <div className="named-text">
            <label className="name">{name}:</label>
            <label className="value">{value}</label>
        </div>
    );
}

export default NamedText;