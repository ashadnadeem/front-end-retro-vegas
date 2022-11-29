import React, { FC} from "react"
import { useLocation} from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";
import FilterButton from "../../components/Buttons/FilterButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

type Props = {
    
};

const IndividualCollectionScreen: FC<Props> = ({}) => {
    const { state } = useLocation();
    //ApI call to get the products from the category id
    const item: Object = {
        "name": "Dagger",
        "image": "https://images.unsplash.com/photo-1588597574944-5e581eeef359?ixlib=rb-4.0.3&dl=igor-bispo-78MIXkDUs3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
    };
    const items: Object[] = [item, item, item, item, item, item];
    return (
        <>
            <div className="ind_collection_page_group">
                <div className="ind_colletion_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="ind_colletion_page_content">
                    <div className="ind_colletion_page_back_icon">
                        <BackButton />
                    </div>
                    <div className="ind_colletion_page_title_header">
                        <div className="ind_colletion_page_title_text_group">
                            <h1 className="ind_colletion_page_title">Collection</h1> 
                            <h1 className="ind_colletion_page_mini_title">{"-"}</h1>
                            <h1 className="ind_colletion_page_mini_title">{state.col_name}</h1>
                        </div>
                        <div className="ind_colletion_page_filter_button">
                            <FilterButton onPress={()=>{console.log("Filter button pressed")}}/>
                        </div>
                    </div>
                    <div className="ind_colletion_page_gallery">
                        {/* map for 6 items */}
                        {items.map((item, index) => {
                            return (
                                <ProductCard key={index} index={index} title={item['name']} image={item['image']}/>
                            );
                        })}
                    </div>
                    <br></br>
                    <RectangleArrowButton invert text="Load-More" onPress={function (): void {}}/>
                </div>
            </div>
        </>
    );
}

export default IndividualCollectionScreen;