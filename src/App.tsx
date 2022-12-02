import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./page/Home";
import Header from "./components/header";
import Middle from "./components/middle";
import Pizza from "./page/Pizza";
import Burger from "./page/Burger";
import Footer from "./components/footer";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Middle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pizza">
                    <Route index={true} element={<Pizza/>}/>
                </Route>
                <Route path="/burger">
                    <Route index={true} element={<Burger/>} />
                </Route>
            </Routes>
            <Footer/>
            <ToastContainer autoClose={2000}/>
        </BrowserRouter>
    );
}

export default App;
