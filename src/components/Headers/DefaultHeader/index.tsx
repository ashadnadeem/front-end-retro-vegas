import { Person, ShoppingCart } from "@mui/icons-material";
import { Button as h1, IconButton } from "@mui/material";
import React, { FC } from "react";

import "./styles.css";

type Props = {
    inverted?: boolean;
}

const DefaultHeader: FC<Props> = ({inverted}) => {
    console.log(inverted);
    const onSellItemClick = () => {
        console.log("Sell item clicked");
    }
    return(
        <div className={inverted?"headerBgInvert":"headerBg"}>
            <label className={inverted?"logoInvert":"logo"}>Logo</label>
            <div className={inverted?"menuInvert":"menu"}>
                {/* Maerial UI text */}
                <h1 className={inverted?"textInvert":"text"} color="inherit" onClick={onSellItemClick}>About</h1>
                <h1 className={inverted?"textInvert":"text"} color="inherit">Collections</h1>
                <h1 className={inverted?"textInvert":"text"} color="inherit">Auctions</h1>
                <h1 className={inverted?"textInvert":"text"} color="inherit">Favourites</h1>
                <label className={inverted?"raised-button-invert":"raised-button"} onClick={onSellItemClick}>Sell Items</label>
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