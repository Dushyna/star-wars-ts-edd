import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {Navigate} from "react-router";
import {Outlet} from "react-router";
import {useValidHero} from "../hooks/customHooks.ts";


const Home = () => {
    const {isValid} = useValidHero();


    if (!(isValid)) {
        return (<Navigate to='<ErrorPage/>'/>);
    }

    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
            <Outlet/>
        </main>
    );
};

export default Home;