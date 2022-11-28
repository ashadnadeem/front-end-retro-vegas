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
        <button className={invert?"buttongroup_invert":"buttongroup"} onClick={onPress}>
            <label className={invert?"buttontext_invert":"button_text"}>{text}</label>
            <ArrowForward className="buttonicon" />
        </button>
    );
}

const RectangleButton: FC<Props> = ({ text, onPress }) => {
    return(
        <button className="buttongroup" onClick={onPress}>
            <label className="button_text">{text}</label>
        </button>
    );
}
export {RectangleArrowButton, RectangleButton};