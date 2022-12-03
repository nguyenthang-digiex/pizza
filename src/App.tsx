import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./page/Home";
import Header from "./components/header";
import Middle from "./components/middle";
import Pizza from "./page/Pizza";
import Burger from "./page/Burger";
import Footer from "./components/footer";
import Salads from "./page/Salads";
import Tacos from "./page/Tacos";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/register";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Middle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth/login" index={true}  element={<Login/>}/>
                <Route path="/auth/register" index={true} element={<Register/>}/>
                <Route path="/pizza">
                    <Route index={true} element={<Pizza/>}/>
                </Route>
                <Route path="/burger">
                    <Route index={true} element={<Burger/>}/>
                </Route>
                <Route path="/salads">
                    <Route index={true} element={<Salads/>}/>
                </Route>
                <Route path="/tacos">
                    <Route index={true} element={<Tacos/>}/>
                </Route>
            </Routes>
            <Footer/>
            <ToastContainer autoClose={2000}/>
        </BrowserRouter>
    );
}

export default App;
