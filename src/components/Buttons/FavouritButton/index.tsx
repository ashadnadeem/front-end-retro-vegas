import { Favorite } from "@mui/icons-material";
import React, { FC } from "react";
import "./syles.css";

type Props = {
    isFav: boolean;
    onPress(): void;
}

const FavButton: FC<Props> = ({ isFav, onPress }) => (
    <div>
        <Favorite fontSize="large" className={isFav ? "fav": "unfav"} onClick={onPress}/>
    </div>
)

export default FavButton;