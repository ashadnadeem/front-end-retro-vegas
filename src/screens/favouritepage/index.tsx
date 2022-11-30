import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const FavouriteScreen: FC = () => {
    const item: Object = {
        "name": "Dagger",
        "image": "https://images.unsplash.com/photo-1588597574944-5e581eeef359?ixlib=rb-4.0.3&dl=igor-bispo-78MIXkDUs3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
    };
    const items: Object[] = [item, item, item];
    return (
        <>
            <div className="favourite_page_group">
                <div className="favourite_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="favourite_page_content">
                    <h1 className="favourite_page_title">Favourite</h1>
                    <div className="favourite_page_gallery">
                        {/* map for 3 items */}
                        {/* {items.map((item, index) => {
                            return (
                                <ProductCard key={index} index={index} title={item['name']} image={item['image']}/>
                            );
                        })} */}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load More" onPress={function (): void {}}/>
                </div>
            </div>
        </>
    );
}

export default FavouriteScreen;