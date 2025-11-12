import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

const Home = () => {
    const {changeHero}=useContext(SWContext)
    const {heroId = defaultHero} = useParams();
    useEffect(() => {
        if(!(heroId in characters)){
            return;
        }
        changeHero(heroId);

    }, [heroId]);


    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;