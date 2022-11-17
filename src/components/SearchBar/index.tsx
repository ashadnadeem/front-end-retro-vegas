import React, { FC } from "react";
import "./styles.css";

type Props = {
    text: string;
    setText: (text: string) => void;
    placeHolder: string;
}

const SearchBar: FC<Props> = ({ placeHolder, text, setText }) => {
    return (
        <div className="searchbar">
            <input
                className="input"
                placeholder={placeHolder}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            {/* search icon */}
            <img className="searchicon" src={require("../../assets/icons/search.png")} />
        </div>
    );
}

export default SearchBar;