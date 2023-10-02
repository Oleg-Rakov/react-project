import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // delay for test loading
    setTimeout(() => resolve(import('./MainPage')) ,1500);
}));