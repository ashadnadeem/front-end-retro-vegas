import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getProductOfCategory } from "../../../api_calls/product";
import { Category } from "../../../models/category_model";
import "./styles.css";


const CollectionCard: FC<Category> = (cat) => {
    const navigate = useNavigate();
    const showCollectionInfo = async () =>  {
        await getProductOfCategory(cat._id);
        console.log("products fetched :)");
        navigate('/individualcollection', {state: {col_id: cat._id, col_name: cat.name}});
     };
    return(
        <div className="collection_card_group" onClick={showCollectionInfo}>
            <img className="collection_card_image" src={cat.imageUrl}/>
            <h1 className="collection_card_text">{cat.name}</h1>
        </div>
    );
}

export default CollectionCard;