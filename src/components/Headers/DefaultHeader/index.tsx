import { Person, ShoppingCart } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { FC } from "react";

import "./styles.css";

type Props = {
}

const DefaultHeader: FC<Props> = ({}) => {
    const onSellItemClick = () => {
        console.log("Sell item clicked");
    }
    return(
        <div className="headerBg">
            <label className="text">Logo</label>
            <div className="menu">
                <label className="text">About</label>
                <label className="text">Colections</label>
                <label className="text">Auctions</label>
                <label className="text">Favourites</label>
                <label className="raised-button" onClick={onSellItemClick}>Sell Items</label>
                <IconButton aria-label="account">
                    <Person />
                </IconButton>
                <IconButton aria-label="cart" color='inherit'>
                    <ShoppingCart />
                </IconButton>
                
            </div>
        </div>
    );
}

export {DefaultHeader};