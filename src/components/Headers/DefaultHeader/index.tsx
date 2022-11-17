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
            <label className="logo">Logo</label>
            <div className="menu">
                {/* Maerial UI text */}
                <Button className="text" variant="text" color="inherit">About</Button>
                <Button className="text" variant="text" color="inherit">Collections</Button>
                <Button className="text" variant="text" color="inherit">Acuctions</Button>
                <Button className="text" variant="text" color="inherit">Favourites</Button>
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