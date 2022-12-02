import React, { FC } from "react";
import "./styles.css";

type Props = {
    title: string;
    text: string;
    setText: (text: any) => void;
    type?: string;
    placeHolder: string;
    editable?: boolean;
}

const InputField: FC<Props> = ({ title, placeHolder, type, text, editable, setText }) => {
    return (
        <div>
            <label className="textfield_title">{title}</label>
            <input
                className="textfield_input"
                placeholder={placeHolder}
                value={text}
                type={type || 'text'}
                disabled={editable === false}
                onChange={e => setText(e.target.value)}
            />
        </div>
    );
}

export default InputField;