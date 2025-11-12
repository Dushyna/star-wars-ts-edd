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
            {[`${navItems[1]}`,`${navItems[1]}/:heroId`].map(path=> <Route key={path} path={path} element={<AboutMe/>}/>)}
            {['/',`${navItems[0]}`,`${navItems[0]}/:heroId`].map(path=> <Route key={path} path={path} element={<Home/>}/>)}
            {[`${navItems[2]}`,`${navItems[2]}/:heroId`].map(path=> <Route key={path} path={path} element={<StarWars/>}/>)}
            {[`${navItems[3]}`,`${navItems[3]}/:heroId`].map(path=> <Route key={path} path={path} element={<Contact/>}/>)}
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