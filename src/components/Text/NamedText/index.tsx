import React, { FC } from "react";


import "./styles.css";

type Props = {
    name: string;
    value: string;
}

const NamedText: FC<Props> = ({ name, value }) => {
    return(
        <div className="named_text_group">
            <label className="named_text_name">{name}:</label>
            <label className="named_text_value">{value}</label>
        </div>
    );
}

export default NamedText;