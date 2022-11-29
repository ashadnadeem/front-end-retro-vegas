import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const CollectionCard: FC<Props> = ({index, title, image }) => {
    const navigate = useNavigate();
    const showCollectionInfo = () => {
        console.log("show collection info");
        navigate("/individualcollection", { state: {collection_id: index } });
    };
    return(
        <div className="collection_card_group" onClick={showCollectionInfo}>
            <img className="collection_card_image" src={image}/>
            <h1 className="collection_card_text">{title +" "+ index}</h1>
        </div>
    );
}

export default CollectionCard;