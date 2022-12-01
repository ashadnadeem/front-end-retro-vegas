import React, { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { getProduct } from "../../api_calls/product";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import { Product } from "../../models/product_model";
import { Customer } from "../../models/user_model";
import './styles.css';

const FavouriteScreen: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        // get favs from local storage
        const customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
        const prod_IDs = customer.favs;
        // API CALL TO GET PRODUCTS
        prod_IDs.forEach(async (id: string) => {
            // API CALL TO GET PRODUCT
            const product = await getProduct(id);
            setProducts((products) => [...products, product]);
        });
    }, []);
    return (
        <>
            <div className="favourite_page_group">
                <div className="favourite_page_header">
                    <DefaultHeader inverted={true} />
                </div>
                <div className="favourite_page_content">
                    <h1 className="favourite_page_title">Favourites</h1>
                    <div className="favourite_page_gallery">
                        {products.map((item, index) => {
                            return (
                                <ProductCard key={index} product={item} />
                            );
                        })}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load More" onPress={function (): void { }} />
                </div>
            </div>
        </>
    );
}

export default FavouriteScreen;