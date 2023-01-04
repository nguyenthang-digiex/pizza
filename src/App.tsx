import React, {useEffect, useState} from 'react';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
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
import Chat from "./components/Chat";
import Wraps from "./page/Wraps";
import Fries from "./page/Fries";
import Logo from "../src/asses/LogoPizza.png"

const AuthLayout = () => {

    return (
        <div
            className="flex justify-center items-center">
            <div className="d-flex flex-center p-10">
                <a href="#" className="mb-12">
                    <img alt="Logo" src={Logo} className="h-45px"/>
                </a>
                <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Middle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" index={true} element={<Login/>}/>
                    <Route path="/auth/register" index={true} element={<Register/>}/>
                </Route>
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
                <Route path="/wraps">
                    <Route index={true} element={<Wraps/>}/>
                </Route>
                <Route path="/fries">
                    <Route index={true} element={<Fries/>}/>
                </Route>
            </Routes>
            <Footer/>
            <Chat/>
            <ToastContainer autoClose={2000}/>
        </BrowserRouter>
    );
}

export default App;
