import React, { FC} from "react"
import BackButton from "../../components/Buttons/BackButton";
import FilterButton from "../../components/Buttons/FilterButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const IndividualCollectionScreen: FC = () => {
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
                    <div className="back_icon">
                        <BackButton onPress={()=>{console.log("Back button pressed")}}/>
                    </div>
                    <div className="title_header">
                        <div className="title_text_group">
                            <h1 className="title">Collection</h1> 
                            <h1 className="mini_title">{"-"}</h1>
                            <h1 className="mini_title">{"watches"}</h1>
                        </div>
                        <div className="filter_button">
                            <FilterButton onPress={()=>{console.log("Filter button pressed")}}/>
                        </div>
                    </div>
                    <div className="gallery">
                        {/* map for 6 items */}
                        {items.map((item, index, key) => {
                            return (
                                <ProductCard index={index} title={item['name']} image={item['image']}/>
                            );
                        })}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load More" onPress={function (): void {}}/>
                </div>
            </div>
        </>
    );
}

export default IndividualCollectionScreen;