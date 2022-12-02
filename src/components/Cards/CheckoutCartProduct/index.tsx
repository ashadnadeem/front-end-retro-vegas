import React, { useEffect, useState } from "react";
import { FC } from "react";
import { getCategory } from "../../../api_calls/category";
import { Product } from "../../../models/product_model";
import './styles.css';


type Props = {
    product: Product;
};

const CheckoutCartProduct: FC<Props> = ({ product }) => {
    const [category, setCategory] = useState({});
    const categoryFetch = async (id: String) => {
        const category: Object = await getCategory(id);
        setCategory(category);
    };
    useEffect(() => {
        // get category id from product
        const categoryID = product.categoryID;
        // get category from category id through API call
        categoryFetch(categoryID);
    }, []);

    return (
        <>
            <div className="checkout_cart_product_content">
                <div>
                    <img className="checkout_cart_product_image" src={product.picture} />
                </div>

                <div>
                    <div className="checkout_cart_product_title">
                        {product.name}
                    </div>

                    <div className="checkout_cart_product_collection">
                        {`Collection: ${category["name"] ?? ""}`}
                    </div>

                    <div className="checkout_cart_product_seller">
                        {"Ashad Nadeem"}
                    </div>

                    <div className="checkout_cart_product_price">
                        {`$${product.price}`}
                    </div>
                </div>
            </div>
        </>
    )

}

export default CheckoutCartProduct;
