import { Person, ShoppingCart } from "@mui/icons-material";
import { Button as h1, IconButton } from "@mui/material";
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
            <label className="logo">Logo</label>
            <div className="menu">
                {/* Maerial UI text */}
                <h1 className="text" color="inherit" onClick={onSellItemClick}>About</h1>
                <h1 className="text" color="inherit">Collections</h1>
                <h1 className="text" color="inherit">Acuctions</h1>
                <h1 className="text" color="inherit">Favourites</h1>
                <label className="raised-button" onClick={onSellItemClick}>Sell Items</label>
                <IconButton className='icon' aria-label="account" color='inherit' size="medium">
                    <Person />
                </IconButton>
                <IconButton className='icon' aria-label="cart" color='inherit' size="medium">
                    <ShoppingCart />
                </IconButton>
                
            </div>
        </div>
    );
}

export {DefaultHeader};