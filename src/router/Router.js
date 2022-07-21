import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/:pageNumber" element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokemon/:name" element={<DetailsPage />} />
                <Route path='*' element={<NotFoundPage/>} />               
            </Routes>
        </BrowserRouter>
    )
}