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

    const [searchText, setSearchText] = React.useState("");

    const products = state.searchProduct;
    console.log(products);
    return (
        <>
            <div className="sarch_page_group">
                <div className="search_page_header">
                    <DefaultHeader inverted={true} />
                </div>
                <div className="search_page_content">
                    <div className="search_page_back_icon">
                        <BackButton />
                    </div>
                    <div className="search_page_searchbar">
                        <SearchBar placeHolder="Search" text={searchText} setText={setSearchText} />
                    </div>
                    <div className="search_page_title_header">
                        <div className="search_page_title_text_group">
                            <h1 className="search_page_title">All Products</h1>
                            <h1 className="search_page_mini_title">{"-"}</h1>
                            <h1 className="search_page_mini_title">{products.name}</h1>
                        </div>
                        <div className="search_page_filter_button">
                            <FilterButton onPress={() => { console.log("Filter button pressed") }} />
                        </div>
                    </div>
                    <div className="search_page_gallery">
                        {/* map for 6 items */}
                        {products.map((item, index) => {
                            return (
                                <ProductCard key={index} product={item} />
                            );
                        })}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load-More" onPress={function (): void { }} />
                </div>
            </div>
        </>
    );
}

export default SearchScreen;