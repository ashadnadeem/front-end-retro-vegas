import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../../api_calls/product";
import "./styles.css";

type Props = {
    text: string;
    setText: (text: string) => void;
    placeHolder: string;
}

const SearchBar: FC<Props> = ({ placeHolder, text, setText }) => {


    const navigate = useNavigate();

    const Navigate = async () => {
        const products = await searchProduct(text);
        navigate('/search',{state:{searchProduct:  products}});
    }
   
    return (
        <div className="searchbar_group">
            <input
                className="searchbar_input"
                placeholder={placeHolder}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            {/* search icon */}
            <button className="searchbar_icon_bg" onClick={Navigate}>
                <img className="searchbar_icon" src={require("../../assets/icons/search.png")} />
            </button>

        </div>
    );
}

export default SearchBar;