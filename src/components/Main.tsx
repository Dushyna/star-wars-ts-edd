import Home from "./Home.tsx";
import StarWars from "./StarWars.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {Routes, Route} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {
    return (
        <Routes>
            {['/', `${navItems[0]}`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[`${navItems[1]}`,`${navItems[1]}/:heroId`].map(path=> <Route key={path} path={path} element={<AboutMe/>}/>)}
            <Route path={`${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`${navItems[3]}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>

        </Routes>
    )
    // const {page} = useContext(SWContext);
    //
    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>;
    //     case navItems[2]:
    //         return <StarWars/>;
    //     case navItems[3]:
    //         return <Contact/>;
    //     default:
    //         return <Home/>;
    // }
};

export default Main;