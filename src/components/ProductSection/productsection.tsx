import React, { FC, useState } from "react";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import { Product } from "../../models/product_model";
import FavButton from "../Buttons/FavouritButton";
import ProductCard from "../Cards/ProductCard";
import './styles.css';

type Props = {
    prod: Product;
};
const ProductSection: FC<Props> = ({ prod }) => {
    const [isFav, setIsFav] = useState(false);
    return (
        <>
            {/* <div className="page"> */}
            <div className="section_content">
                <div className="section_content2">
                    <text className="section_text"> Mark as Favourite </text> <span></span>
                    <FavButton isFav={isFav} onPress={() => { setIsFav(!isFav) }} />
                </div>
                <div>
                    <img className="section_image" src={prod.picture} />
                </div>
                <div className="section_text2">Seller: Ashad Nadeem</div>
            </div>
            {/* </div> */}
        </>
    );
}
export default ProductSection;