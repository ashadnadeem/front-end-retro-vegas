import React, { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { getProductOfCategory } from "../../api_calls/product";
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

const IndividualCollectionScreen: FC<Props> = ({ }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [offset, setOffset] = useState(0);
    const [noMore, setNoMore] = useState(false);
    const { state } = useLocation();
    const cat = state.category;
    const prods = state.products;

    const loadMoreHandler = async () => {
        console.log("Load more");
        const prods = await getProductOfCategory(cat._id, offset + 3);
        if (prods.length === 0) {
            setNoMore(true);
        }
        setProducts([...products, ...prods]);
        setOffset(offset + 3);
    };

    useEffect(() => {
        setProducts(prods);
        console.log(`successfully fetched products: ${prods.length}`);
    }, [prods]);

    return (
        <>
            <div className="ind_collection_page_group">
                <div className="ind_colletion_page_header">
                    <DefaultHeader inverted={true} />
                </div>
                <div className="ind_colletion_page_content">
                    <div className="ind_colletion_page_back_icon">
                        <BackButton />
                    </div>
                    <div className="ind_colletion_page_title_header">
                        <div className="ind_colletion_page_title_text_group">
                            <h1 className="ind_colletion_page_title">Collection</h1>
                            <h1 className="ind_colletion_page_mini_title">{"-"}</h1>
                            <h1 className="ind_colletion_page_mini_title">{cat.name}</h1>
                        </div>
                        <div className="ind_colletion_page_filter_button">
                            <FilterButton onPress={() => { console.log("Filter button pressed") }} />
                        </div>
                    </div>
                    <div className="ind_colletion_page_gallery">
                        {products.map((item, index) => {
                            return (
                                <ProductCard key={index} product={item} />
                            );
                        })}
                    </div>
                    <br></br>
                    {noMore ? <></> : <RectangleArrowButton invert text="Load More" onPress={loadMoreHandler} />}
                </div>
            </div>
        </>
    );
}

export default IndividualCollectionScreen;