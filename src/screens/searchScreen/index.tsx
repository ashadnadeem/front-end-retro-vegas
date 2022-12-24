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
import { autoComplete } from "../../api_calls/product";
import './styles.css';

type Props = {

};

const SearchScreen: FC<Props> = ({ }) => {
    const { state } = useLocation();
    const [offset, setOffset] = useState(0);
    const [noMore, setNoMore] = useState(false);
    const [searchText, setSearchText] = React.useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [auto_complete, setAutoComplete] = React.useState([]);
    const search_products = []

    const prods = state.searchProduct;

    const loadMoreHandler = async () => {
        console.log("Load More");
        await autoComplete(searchText, offset + 3, false).then((res) => {
            res.products.map((product: Product) => {
                search_products.push(product);
            });
        }).catch((err) => {
            console.log(err);
        });
        
        if (search_products.length === 0) {
            setNoMore(true);
        }
        setProducts([...products, ...search_products]);
        setOffset(offset + 3);
    };
    
    useEffect(() => {
        setProducts(prods);
        setSearchText(state.query);
        console.log(`successfully fetched products: ${prods.length}`);
    }, [prods]);

    const getHighlightedText = (text: String, highlight: String) => {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }


    const replaceThis = async (suggestion: string) => {
        setSearchText(suggestion);
        const prod = await searchProduct(suggestion, 0);
        setProducts(prod)
        setAutoComplete([]);
        return;
    }

    const textChangeHandler = async (text: string) => {
        setProducts([]);
        setOffset(0);
        const suggest = [];
        await autoComplete(text, offset, false).then((res) => {
            res.suggestions.map((suggestion: String) => {
                suggest.push(suggestion);
            });
            res.products.map((product: Product) => {
                search_products.push(product);
            });
        }).catch((err) => {
            console.log(err);
        });
        setSearchText(text);
        setAutoComplete(suggest);
        setProducts(search_products);
        setNoMore(false);
    }



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
                        <div className="search_page_search">
                            <SearchBar placeHolder="Search" text={searchText} setText={textChangeHandler} />
                        </div>
                        {auto_complete.length > 0 && searchText.length > 0 ?
                            <div className="search_page_auto_box">
                                {auto_complete.map((suggestion: string) => {
                                    // return <h1 className="home_page_suggestion">{suggestion}</h1>
                                    return <h1 className="search_page_suggestion" onClick={() => replaceThis(suggestion)}>{getHighlightedText(suggestion, searchText)}</h1>
                                })}
                                <></>
                            </div>
                            : <div style={{ "height": "18%" }}></div>
                        }
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