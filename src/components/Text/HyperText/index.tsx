import React, { FC } from "react";


import "./styles.css";

type Props = {
    text: string;
    onClick: () => void;
}

const HyperText: FC<Props> = ({ text, onClick }) => {
    return(
        <div className="hyperText">
            <label onClick={onClick}>{text}</label>
        </div>
    );
}

export default HyperText;