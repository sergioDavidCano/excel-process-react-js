import './routesApp.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

export const RoutesApp = () => {
    const [bg, setBg] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
    return (
        <div className={`container-router ${bg ? "heightBig" : "heightNoBig"}`}>
            <Routes>
                <Route
                    path='/:category/search/:keyword'
                    element={<h1>Hol1</h1>}
                />
                <Route
                    path='/:category/:id'
                    element={<h1>Hol1</h1>}
                />
                <Route
                    path='/:category'
                    element={<h1>Hol1</h1>}
                />
                <Route
                    path='/'
                    exact
                    element={<h1>Hol1</h1>}
                />
            </Routes>
        </div>
    );
}
