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
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";



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
          <Route path="/user">
            <UserProfile />
          </Route>
          <Route path="/products/new">
            <CreateProductListing />
          </Route>
          <Route path="/products/:productId/update">
            <UpdateProduct />
          </Route>
          <Route path="/products/:productId">
            <ProductById />
          </Route>
          <Route path="/">
            <BackgroundColor />
            {/* <Footer/> */}
          </Route>
        </Switch>
        </>
      )}
    </>
  );
}

export default App;
