import { Favorite } from "@mui/icons-material";
import React, { FC } from "react";
import "./syles.css";

type Props = {
    isFav: boolean;
    onPress(): void;
}

const FavButton: FC<Props> = ({ isFav, onPress }) => (
    <div>
        <Favorite fontSize="large" className={isFav ? "fav_button_icon": "unfav_button_icon"} onClick={onPress}/>
    </div>
)

export default FavButton;