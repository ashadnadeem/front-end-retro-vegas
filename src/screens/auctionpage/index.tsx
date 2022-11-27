import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import CollectionCard from "../../components/Cards/CollectionCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const AuctionScreen: FC = () => {
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
                    <div className="title_header">
                        <div></div>
                        <h1 className="title">Auction</h1>
                        <RectangleArrowButton invert text="My Bids" onPress={function (): void {}}/>
                    </div>
                    <h1 className="sub_title">Following Products are up on auction. Bid on your favourite products today to enhance your collection.</h1>
                    <div className="gallery">
                        {/* map for 6 items */}
                        {items.map((item, index, key) => {
                            return (
                                <CollectionCard index={index} title={item['name']} image={item['image']}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuctionScreen;