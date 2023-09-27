import {Suspense} from "react";
import {Route, Routes, Link} from "react-router-dom";
import Counter from "./components/Counter";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            {/*<Counter/>*/}
        </div>
    );
};

export default App;