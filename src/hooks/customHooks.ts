import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

export const useValidHero = () => {
    const {changeHero, changeIsError, isError} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            changeIsError(true);
            return;
        } else {
            changeIsError(false);
        }
        changeHero(heroId);
        if (isError) {
            console.log(`Is Error ${isError}`);
        }

    }, [heroId, isError]);

    return {
        heroId,
        isValid: heroId in characters,
        isError

    }
}