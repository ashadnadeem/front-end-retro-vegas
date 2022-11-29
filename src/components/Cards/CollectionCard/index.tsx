import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../../models/category_model";
import "./styles.css";


const CollectionCard: FC<Category> = (cat) => {
    const navigate = useNavigate();
    const showCollectionInfo = () => {
        navigate("/individualcollection", { state: {col_id: cat._id, col_name:cat.name } });
    };
    return(
        <div className="collection_card_group" onClick={showCollectionInfo}>
            <img className="collection_card_image" src={cat.imageUrl}/>
            <h1 className="collection_card_text">{cat.name}</h1>
        </div>
    );
}

export default CollectionCard;