import Navigation from "./Navigation.tsx";

import {characters, navItems} from "../utils/constants.ts";
import {useLocation} from "react-router";

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathHeroAll = `/${navItems[1].toLowerCase().replace(' ', `%20`)}/`;
    const pathHero = currentPath.slice(pathHeroAll.length);
    if (currentPath.startsWith(pathHeroAll) && (pathHero in characters)) {
        return (
            <header className="rounded-t-3xl bg-grey">
                <Navigation/>
                <h1 className="text-center py-6 text-4xl">{characters[pathHero].name}</h1>
            </header>
        );
    } else {
        return (

            <header className="rounded-t-3xl bg-grey">
                <Navigation/>
                <h1 className="text-center py-6 text-4xl">Luke Skywalker</h1>
            </header>
        );
    }
};

export default Header;