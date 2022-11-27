import React, { FC } from "react";

import "./styles.css";

type Props = {
    text: string;
    image?: string;
    onPress(): void;
}

const WhiteRectangleArrowButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="buttongroup" onClick={onPress}>
            <label className="buttontext">{text}</label>
            <img className="buttonicon" src={require("../../../assets/icons/blackforwardarrow.png")} />
        </button>
    );
}

const WhiteRectangleButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="buttongroup" onClick={onPress}>
            <label className="buttontext">{text}</label>
        </button>
    );
}
export {WhiteRectangleArrowButton, WhiteRectangleButton};