import React, { FC } from "react"
import { useNavigate } from "react-router-dom";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const HomePageScreen: FC = () => {
    const [searchText, setSearchText] = React.useState("");
    const user = JSON.parse(localStorage.getItem('user') || '{"name": "Guest"}');
    const navigate = useNavigate();

    const navigateToCollection = () => {
        navigate('/collection');
    }
    const getFirstname = (name: string) => {
        return name.split(' ')[0];
    }

    return (
        <>
            <div className="home_page_group">
                <div className="home_page_imageoverlay"></div>
                <div className="home_page_header">
                    <DefaultHeader inverted={false} />
                </div>
                <div className="home_page_content">
                    <div className="home_page_greet_group">
                        <h1 className="home_page_greet_text">Hello,</h1>
                        <h1 className="home_page_greet_text" style={{ 'paddingLeft': '100px' }}>{getFirstname(user.name)}!</h1>
                    </div>
                    <h1 className="home_page_title">Buy your favourite antique items.</h1>
                    <SearchBar placeHolder="Search" text={searchText} setText={setSearchText} />
                    <RectangleArrowButton text="Check Collection" onPress={navigateToCollection} />
                </div>
            </div>
        </>
    );
}

export default HomePageScreen;