import React, { FC } from "react";

import "./styles.css";

type Props = {
    text: string;
    image?: string;
    onPress(): void;
}

const WhiteRectangleArrowButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="whitebuttongroup" onClick={onPress}>
            <label className="whitebuttontext">{text}</label>
            <img className="whitebuttonicon" src={require("../../../assets/icons/blackforwardarrow.png")} />
        </button>
    );
}

const WhiteRectangleButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="whitebuttongroup" onClick={onPress}>
            <label className="whitebuttontext">{text}</label>
        </button>
    );
}
export {WhiteRectangleArrowButton, WhiteRectangleButton};