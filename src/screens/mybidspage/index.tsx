import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const MyBidsScreen: FC = () => {
   
//    const items: Object[] = [item, item, item];
    return (
        <>
            <div className="mybid_page_group">
                <div className="mybid_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="mybid_page_content">
                    <h1 className="mybid_page_title">My Bids</h1>
                    <div className="mybid_page_gallery">
                        {/* map for 3 items */}
                        {/* {items.map((item, index) => {
                            return (
                                <ProductCard key={index} _id={item["_id"]} name={item.name} price={item.price} picture={item.picture} storeID={item.storeID} 
                                categoryID={item.categoryID} description={item.description} />                            );
                        })} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyBidsScreen;