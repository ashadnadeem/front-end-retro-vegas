import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../api_calls/category";
import { addToCart } from "../../api_calls/customer";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import { Product } from "../../models/product_model";
import './styles.css';

type Props = {
    prod: Product;
};

const ProductDesc: FC<Props> = ({ prod }) => {
    const [addToCartButton, setAddToCartButton] = useState(false);
    const navigate = useNavigate();
    const addToCartHandler = async () => {
        // add product to cart
        console.log("Add to cart: " + prod._id);
        if (!addToCartButton) {
            // API CALL TO ADD TO CART
            const x = await addToCart(prod._id);
            if(x === 401){
                localStorage.clear();
                navigate('/login');
            } {
                setAddToCartButton(true);
                navigate("/cart");
            }
        }
    };
    const [category, setCategory] = useState({});
    const categoryFetch = async (id: String) => {
        const category: Object = await getCategory(id);
        setCategory(category);
    };
    useEffect(() => {
        // get category id from product
        const categoryID = prod.categoryID;
        // get category from category id through API call
        categoryFetch(categoryID);
    }, []);
    return (
        <>
            <div className="desc_page">
                <div className="desc_content">
                    <h1 className="desc_title"> {prod.name} </h1>
                    <div className="desc_description"> {prod.description}</div>
                    <div className="desc_collection">{`Collection: ${category["name"] ?? ""}`}</div>
                    <div className="desc_price"> $ {prod.price} </div>
                    <div className="desc_description2">Highest Bid: $ 9.99</div>
                    <div className="desc_button">
                        <WhiteRectangleArrowButton text={addToCartButton ? "Remove from Cart" : "Add to Cart"} onPress={addToCartHandler} ></WhiteRectangleArrowButton>
                    </div>
                    <div className="desc_button">
                        <RectangleArrowButton text="Bid on it" invert={false} onPress={() => { }} ></RectangleArrowButton>
                    </div>
                </div>
            </div>
        </>

    );
}
export default ProductDesc;