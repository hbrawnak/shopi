import React, {useCallback, useEffect} from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = useCallback(() => {
        return axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err)
        }).then((response) => {
            dispatch(setProducts(response.data))
        });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;