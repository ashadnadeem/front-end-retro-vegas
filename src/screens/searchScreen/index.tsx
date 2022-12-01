import React, { FC } from "react"
import { useLocation } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";
import FilterButton from "../../components/Buttons/FilterButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import { Product } from "../../models/product_model";
import './styles.css';

type Props = {

};

const SearchScreen: FC = () => {
    const { state } = useLocation();
    //  const cat = state.category;
    // const prods = state.products;
    
    console.log(state.query);
    //ApI call to get the products from the category id
    // const product: Product[] = prods;
    // const product = [];
return(
    <>
    <div className="sarch_page_group">
                <div className="search_page_header">
                    <DefaultHeader inverted={true} />
                </div>
                {/* <div className="ind_colletion_page_content">
                    <div className="ind_colletion_page_back_icon">
                        <BackButton />
                    </div>
                    <div className="ind_colletion_page_title_header">
                        <div className="ind_colletion_page_title_text_group">
                            <h1 className="ind_colletion_page_title">All Products</h1>
                            <h1 className="ind_colletion_page_mini_title">{"-"}</h1>
                           <h1 className="ind_colletion_page_mini_title">{cat.name}</h1>
                        </div>
                        <div className="ind_colletion_page_filter_button">
                            <FilterButton onPress={() => { console.log("Filter button pressed") }} />
                        </div>
                     </div>
                   <div className="ind_colletion_page_gallery">
                        map for 6 items
                        {product.map((item, index) => {
                            return (
                                <ProductCard key={index} _id={item["_id"]} name={item.name} price={item.price} picture={item.picture} storeID={item.storeID}
                                    categoryID={item.categoryID} description={item.description} bids={item.bids} status={item.status} />
                            );
                        })}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load-More" onPress={function (): void { }} />
                </div> */}
            </div>
            </>
);
}

export default SearchScreen;