import { ArrowForward } from "@mui/icons-material";
import React, { FC } from "react";

import "./styles.css";

type Props = {
    text: string;
    invert?: boolean;
    onPress(): void;
}

const RectangleArrowButton: FC<Props> = ({ text, invert, onPress }) => {
    return(
        <button className={invert?"rectangle_button_group_invert":"rectangle_button_group"} onClick={onPress}>
            <label className={invert?"rectangle_button_text_invert":"rectangle_button_text"}>{text}</label>
            <ArrowForward className="rectangle_button_icon" />
        </button>
    );
}

const RectangleButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="rectangle_button_group" onClick={onPress}>
            <label className="rectangle_button_text">{text}</label>
        </button>
    );
}
export {RectangleArrowButton, RectangleButton};