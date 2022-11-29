import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import CollectionCard from "../../components/Cards/CollectionCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import { Category } from "../../models/category_model";
import './styles.css';

const CollectionScreen: FC = () => {
    // get categeories from local storage
    const categories: Category[] = JSON.parse(localStorage.getItem('categories') || '[]');
    return (
        <>
            <div className="collection_page_group">
                <div className="collection_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="collection_page_content">
                    <h1 className="collection_page_title">Collections</h1>
                    <div className="collection_page_gallery">
                        {/* map for 6 items */}
                        {categories.map((item, index, key) => {
                            return (
                                <CollectionCard index={index} title={item.name} image={item.imageUrl}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CollectionScreen;