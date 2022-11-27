import React, { FC } from "react";

import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const CollectionCard: FC<Props> = ({index, title, image }) => {
    return(
        <div className="item">
            <img className="item_image" src={image}/>
            <h1 className="item_title">{title +" "+ index}</h1>
        </div>
    );
}

export default CollectionCard;