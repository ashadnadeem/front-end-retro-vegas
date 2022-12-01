import { Logout, Person, ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import { Button as h1, IconButton } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../api_calls/category";
import { getCustomer } from "../../../api_calls/customer";
import { getProduct } from "../../../api_calls/product";
import { Product } from "../../../models/product_model";
import { Customer } from "../../../models/user_model";

import "./styles.css";

type Props = {
    inverted?: boolean;
}

const DefaultHeader: FC<Props> = ({ inverted }) => {
    const navigate = useNavigate();
    const navigateToHomePage = () => navigate('/home');
    const navigateToAboutPage = () => navigate('/about');
    const navigateToCollectionPage = async () => {
        // API CALL TO GET COLLECTIONS
        const len = await getCategories();
        console.log(`categories fetched:  ${len}`);
        navigate('/collection');
    };
    const navigateToAuctionPage = () => navigate('/auction');
    const navigateToFavouritePage = async () => {
        navigate('/favourite');
    };
    const onSellItemClick = () => {
        console.log("Sell item clicked");
    }
    const logoutHandler = () => {
        console.log("Logout clicked");
        // clear local storage
        localStorage.clear();
        // navigate to login page
        navigate('/login');
    };
    const navigateToCart = async () => {
        const x = await getCustomer();
        if (x === 401) {
            localStorage.clear();
            navigate('/login');
        } else {
            console.log("Cart clicked");
            navigate('/cart');
        }
    };
    const navigateToProfile = () => {
        console.log("Profile clicked");
        navigate('/profile');
    };
    const getNumberOfItemsInCart = () => {
        const customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
        return customer.cart.length;
    }
    // get access token from local storage
    const accessToken = localStorage.getItem('accessToken') || 'guest';
    const guest: boolean = accessToken === 'guest';
    return (
        <div className={inverted ? "default_header_bg_invert" : "default_header_bg"}>
            <label className={inverted ? "default_header_logo_invert" : "default_header_logo"} onClick={navigateToHomePage}>RetroV</label>
            <div className={inverted ? "default_header_menu_invert" : "default_header_menu"}>
                {/* Maerial UI default_header_text */}
                <h1 className={inverted ? "default_header_text_invert" : "default_header_text"} color="inherit" onClick={navigateToAboutPage}>About</h1>
                <h1 className={inverted ? "default_header_text_invert" : "default_header_text"} color="inherit" onClick={navigateToCollectionPage} >Collections</h1>
                <h1 className={inverted ? "default_header_text_invert" : "default_header_text"} color="inherit" onClick={navigateToAuctionPage}>Auctions</h1>
                <h1 className={inverted ? "default_header_text_invert" : "default_header_text"} color="inherit" onClick={navigateToFavouritePage}>Favourites</h1>
                <label className={inverted ? "default_header_raised_button_invert" : "default_header_raised_button"} onClick={onSellItemClick}>Sell Items</label>
                <>
                    {guest ? <></>
                        : <>
                            <IconButton className='default_header_icon' aria-label="account" color='inherit' size="large" onClick={navigateToProfile}>
                                <Person />
                            </IconButton>
                            <div className="default_header_cart_bucket">
                                <IconButton className='default_header_icon' aria-label="cart" color='inherit' size="large" onClick={navigateToCart}>
                                    <ShoppingCart />
                                </IconButton>
                                <p className="default_header_cart_bucket_text">{getNumberOfItemsInCart()}</p>
                            </div>
                            <IconButton className='default_header_icon' aria-label="logout" color='inherit' size="large" onClick={logoutHandler}>
                                <Logout />
                            </IconButton>
                        </>
                    }
                </>
            </div>
        </div>
    );
}

export { DefaultHeader };