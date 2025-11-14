import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import {useValidHero} from "./hooks/customHooks.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [isError, setIsError] = useState(false);
        const {heroId,isValid} = useValidHero();
console.log(`APP ${heroId} is hero ${isValid}`);
    return (
        <div className={'mx-2'}>
            <SWContext value={{hero, changeHero: setHero,isError,changeIsError:setIsError}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
