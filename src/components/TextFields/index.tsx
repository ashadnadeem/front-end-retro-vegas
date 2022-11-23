import React, { FC } from "react";
import "./styles.css";

type Props = {
    title: string;
    text: string;
    setText: (text: any) => void;
    placeHolder: string;
}

const InputField: FC<Props> = ({ title, placeHolder, text, setText }) => {
    return (
        <div>
            <label className="title">{title}</label>
            <input
                className="input"
                placeholder={placeHolder}
                onChange={e => setText(e.target.value)}
            />
        </div>
    );
}

export default InputField;