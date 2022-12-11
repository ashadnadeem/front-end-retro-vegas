import React, { FC } from "react"
import { useNavigate } from "react-router-dom";
import { autoComplete } from "../../api_calls/product";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const HomePageScreen: FC = () => {
    const [searchText, setSearchText] = React.useState("");
    const [auto_complete, setAutoComplete] = React.useState([]);
    const products = []
    const user = JSON.parse(localStorage.getItem('user') || '{"name": "Guest"}');
    const navigate = useNavigate();

    const navigateToCollection = () => {
        navigate('/collection');
    }
    const getFirstname = (name: string) => {
        return name.split(' ')[0];
    }

    const getHighlightedText = (text: String, highlight: String) => {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }


    const replaceThis = (suggestion: string) => {
        setSearchText(suggestion);
        return;
    }

    const textChangeHandler = async (text: string) => {
        const suggest = [];
        await autoComplete(text).then((res) => {
            res.suggestions.map((suggestion: String) => {
                suggest.push(suggestion);
            });
            res.products.map((product: string) => {
                products.push(product);
            });
        }).catch((err) => {
            console.log(err);
        });
        console.log(auto_complete);
        setSearchText(text);
        setAutoComplete(suggest);
    }

    return (
        <>
            <div className="home_page_group">
                <div className="home_page_imageoverlay"></div>
                <div className="home_page_header">
                    <DefaultHeader inverted={false} />
                </div>
                <div className="home_page_content">
                    <>
                        <div className="home_page_greet_group">
                            <h1 className="home_page_greet_text">Hello,</h1>
                            <h1 className="home_page_greet_text" style={{ 'paddingLeft': '100px' }}>{getFirstname(user.name)}!</h1>
                        </div>
                        <h1 className="home_page_title">Buy your favourite antique items.</h1>
                    </>
                    <div className="homepage_search_group">
                        <SearchBar placeHolder="Search" text={searchText} setText={textChangeHandler} />
                        {auto_complete.length > 0 && searchText.length > 0 ?
                            <div className="home_page_auto_box">
                                {auto_complete.map((suggestion: string) => {
                                    // return <h1 className="home_page_suggestion">{suggestion}</h1>
                                    return <h1 className="home_page_suggestion" onClick={() => replaceThis(suggestion)}>{getHighlightedText(suggestion, searchText)}</h1>
                                })}
                                <></>
                            </div>
                            : <div style={{ "height": "18%" }}></div>
                        }
                    </div>
                    <RectangleArrowButton text="Check Collection" onPress={navigateToCollection} />
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default HomePageScreen;