import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const CollectionScreen: FC = () => {
    const item: Object = {
        "name": "Dagger",
        "image": "https://images.unsplash.com/photo-1588597574944-5e581eeef359?ixlib=rb-4.0.3&dl=igor-bispo-78MIXkDUs3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
    };
    const items: Object[] = [item, item, item, item, item, item];
    return (
        <>
            <div className="page">
                <div className="header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="content">
                    <h1 className="title">Collections</h1>
                    <div className="gallery">
                        {/* map for 6 items */}
                        {items.map((item, index, key) => {
                            return (
                                <div className="item">
                                    <img className="item_image" src={item["image"]}/>
                                    <h1 className="item_title">{item["name"] + index}</h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CollectionScreen;