import React, { FC, useState } from "react";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import FavButton from "../Buttons/FavouritButton";
import ProductCard from "../Cards/ProductCard";
import './styles.css';
// import productImage from "../assets/productImage";



const ProductSection: FC = () => {
    const [isFav, setIsFav] = useState(false);
    return (
        <>
            {/* <div className="page"> */}
            <div className="content">
                <div className="content2">
                    <text className="text"> Mark as Favourite </text> <span></span>
                    <FavButton isFav={isFav} onPress={() => { setIsFav(!isFav) }} />
                </div>
                <div>
                    <img className="image" src={require('../../assets/productImage.png')} />
                </div>
                <div className="text2">
                    Seller: Ashad Nadeem
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
export default ProductSection;