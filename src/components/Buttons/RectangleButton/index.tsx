import React, { FC } from "react";

import "./styles.css";

type Props = {
    text: string;
    image?: string;
    onPress(): void;
}

const RectangleArrowButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="buttongroup" onClick={onPress}>
            <label className="buttontext">{text}</label>
            <img className="buttonicon" src={require("../../../assets/icons/forward_arrow.png")} />
        </button>
    );
}

const RectangleButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="buttongroup" onClick={onPress}>
            <label className="buttontext">{text}</label>
        </button>
    );
}
export {RectangleArrowButton, RectangleButton};