import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    // delay for test loading
    setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
