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
        <div className={inverted?"default_header_bg_invert":"default_header_bg"}>
            <label className={inverted?"default_header_logo_invert":"default_header_logo"}>Logo</label>
            <div className={inverted?"default_header_menu_invert":"default_header_menu"}>
                {/* Maerial UI default_header_text */}
                <h1 className={inverted?"default_header_text_invert":"default_header_text"} color="inherit" onClick={onSellItemClick}>About</h1>
                <h1 className={inverted?"default_header_text_invert":"default_header_text"} color="inherit">Collections</h1>
                <h1 className={inverted?"default_header_text_invert":"default_header_text"} color="inherit">Auctions</h1>
                <h1 className={inverted?"default_header_text_invert":"default_header_text"} color="inherit">Favourites</h1>
                <label className={inverted?"default_header_raised_button_invert":"default_header_raised_button"} onClick={onSellItemClick}>Sell Items</label>
                <IconButton className='default_header_icon' aria-label="account" color='inherit' size="medium">
                    <Person />
                </IconButton>
                <IconButton className='default_header_icon' aria-label="cart" color='inherit' size="medium">
                    <ShoppingCart />
                </IconButton>
                
            </div>
        </div>
    );
}

export {DefaultHeader};