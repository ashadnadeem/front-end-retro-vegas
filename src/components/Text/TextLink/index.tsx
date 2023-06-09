import React, { FC } from "react";
import HyperText from "../HyperText";


import "./styles.css";

type Props = {
    text: string;
    hyperText: string;
    onClick: () => void;
}

const TextLink: FC<Props> = ({ text, hyperText, onClick }) => {
    return(
        <div className="textlink_group">
            <label className="textlink_text">{text}</label>
            <HyperText text={hyperText} onClick={onClick}/>
        </div>
    );
}

export default TextLink;