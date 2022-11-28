import React, { FC, useState } from "react";
import FavButton from "../../Buttons/FavouritButton";
import { RectangleButton } from "../../Buttons/RectangleButton";

import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const ProductCard: FC<Props> = ({index, title, image }) => {
    const [isFav, setIsFav] = useState(false);
    return(
        <div className="group">
            <div className="card">
                <img className="image" src={image}/>
                <div className="body">
                    <div className="top_body">
                        <div className="body_text">
                            <h1 className="produc_title">{title}</h1>
                            <h1 className="product_owner">{"by " + "Ashad Nadeem"}</h1>
                        </div>
                        <FavButton isFav={isFav} onPress={()=>{setIsFav(!isFav)}}/>
                    </div>
                    <h1 className="product_price">{"$ " + "9.99"}</h1>
                </div>
            </div>
            <div className="button">
                <RectangleButton text={"View"} onPress={function (): void {}}/>
            </div>
        </div>
    );
}

export default ProductCard;