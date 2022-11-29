import React, { FC } from "react";

import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const CollectionCard: FC<Props> = ({index, title, image }) => {
    return(
        <div className="collection_card_group">
            <img className="collection_card_image" src={image}/>
            <h1 className="collection_card_text">{title +" "+ index}</h1>
        </div>
    );
}

export default CollectionCard;