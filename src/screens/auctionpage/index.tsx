import React, { FC} from "react"
import { useNavigate } from "react-router-dom";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const AuctionScreen: FC = () => {
    const navigate = useNavigate();
    const navigateToMyBids = () => navigate('/mybids');
    const item: Object = {
        "name": "Dagger",
        "image": "https://images.unsplash.com/photo-1588597574944-5e581eeef359?ixlib=rb-4.0.3&dl=igor-bispo-78MIXkDUs3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
    };
    const items: Object[] = [item, item, item];
    return (
        <>
            <div className="auction_page_group">
                <div className="auction_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="auction_page_content">
                    <div className="auction_page_title_header">
                        <div></div>
                        <h1 className="auction_page_title">Auction</h1>
                        <RectangleArrowButton invert text="My Bids" onPress={navigateToMyBids}/>
                    </div>
                    <h1 className="auction_page_sub_title">Following Products are up on auction. Bid on your favourite products today to enhance your collection.</h1>
                    <div className="auction_page_gallery">
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

export default AuctionScreen;