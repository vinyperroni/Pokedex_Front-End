import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokemon/:name" element={<DetailsPage />} />
                <Route path='*' element={<NotFoundPage/>} />               
            </Routes>
        </BrowserRouter>
    )
}