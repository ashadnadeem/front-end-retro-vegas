import React, { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { searchProduct } from "../../api_calls/product";
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

const SearchScreen: FC<Props> = ({ }) => {
    const { state } = useLocation();
    const [offset, setOffset] = useState(0);
    const [noMore, setNoMore] = useState(false);
    const [searchText, setSearchText] = React.useState("");
    const [products, setProducts] = useState<Product[]>([]);

    const prods = state.searchProduct;
    console.log(prods);

    const loadMoreHandler = async () => {
        console.log("Load More");
        const prods = await searchProduct(searchText, offset + 3);
        if (prods.length === 0) {
            setNoMore(true);
        }
        setProducts([...products, ...prods]);
        setOffset(offset + 3);
    };
    useEffect(() => {
        setProducts(prods);
        setSearchText(state.query);
        console.log(`successfully fetched products: ${prods.length}`);
    }, [prods]);


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
                            <h1 className="search_page_mini_title">{prods.name}</h1>
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
                    {noMore ? <></> : <RectangleArrowButton invert text="Load More" onPress={loadMoreHandler} />}
                    <br /> <br />
                </div>
            </div>
        </>
    );
}

export default SearchScreen;