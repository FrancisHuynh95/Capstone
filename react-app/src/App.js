import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ProductById from "./components/productById";
import CreateProductListing from "./components/CreateProductListing";
import UpdateProduct from "./components/updateProduct";
import BackgroundColor from "./components/home/background-color";
import UserProfile from "./components/UserProfile";
import UserCart from "./components/userCart";
import Uhoh from "./components/uhoh";
import FilteredProduct from "./components/FilteredProductPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/user/:userId/cart">
            <UserCart />
          </Route>
          <Route path="/user">
            <UserProfile />
          </Route>
          <Route path="/product/new">
            <CreateProductListing />
          </Route>
          <Route path="/product/:productId/update">
            <UpdateProduct />
          </Route>
          <Route path="/product/:productId">
            <ProductById />
          </Route>
          <Route path="/search">
            <FilteredProduct />
          </Route>
          <Route exact path="/">
            <BackgroundColor />
          </Route>
          < Uhoh />
        </Switch>
        </>
      )}
    </>
  );
}

export default App;
