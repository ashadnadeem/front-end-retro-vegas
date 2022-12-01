import { Favorite } from "@mui/icons-material";
import React, { FC, useEffect, useState } from "react";
import { addToFav, removeFromFav } from "../../../api_calls/customer";
import { Product } from "../../../models/product_model";
import { Customer } from "../../../models/user_model";
import "./syles.css";

type Props = {
    productID: string;
}

const FavButton: FC<Props> = ({ productID }) => {
    const [isFav, setIsFav] = useState(false);
    const onPress = async () => {
        if (isFav == false) {
            // add to fav
            await addToFav(productID);
        } else {
            // remove from fav
            await removeFromFav(productID);
        }
        setIsFav(!isFav);
    };
    useEffect(() => {
        console.log("FavButton rendered");
        // fetch customers from local storage and get wishlist
        const customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
        const favs: String[] = customer.favs;
        // check if product is in wishlist
        if (favs.includes(productID)) {
            setIsFav(true);
        } else
            setIsFav(false);
    }, [productID]);
    return (
        <div>
            <Favorite fontSize="large" className={isFav ? "fav_button_icon" : "unfav_button_icon"} onClick={onPress} />
        </div>
    );
}

export default FavButton;