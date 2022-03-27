import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductListing/>} />
                    <Route path="/product/:productId" element={<ProductDetail/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
