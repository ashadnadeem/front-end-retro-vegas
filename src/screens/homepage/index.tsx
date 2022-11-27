import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const HomePageScreen: FC = () => {
    const [searchText, setSearchText] = React.useState("");
    return (
        <>
            <div className="page">
                <div className="header">
                    <DefaultHeader inverted={false}/>
                </div>
                <div className="content">
                    <div className="greet">
                        <h1 className="greet_text">Hello,</h1>
                        <h1 className="greet_text" style={{'paddingLeft':'100px'}}>Khaulah!</h1>
                    </div>
                    <h1 className="title">Buy your favourite antique items.</h1>
                    <SearchBar placeHolder="Search" text={searchText} setText={setSearchText} />
                    <RectangleArrowButton text="Check Collection" onPress={() => {}} />
                </div>
            </div>
        </>
    );
}

export default HomePageScreen;