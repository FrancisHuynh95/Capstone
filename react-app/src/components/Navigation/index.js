import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { clearAllProductsThunk } from '../../store/product';
import { useTheme } from './darkMode';
import { getCartThunk } from '../../store/cart';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import SocialsModal from '../socialsModal';
import Search from './search';
import './Navigation.css';

function Navigation({ isLoaded }) {

	const dispatch = useDispatch()
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
	const cart = useSelector(state => state.cart.cart)
	const cartArray = Object.values(cart)
	let amount = 0;
	cartArray.map(product => amount += product.quantity)
	const { theme } = useTheme()
	useEffect(() => {
		dispatch(getCartThunk())
	}, [dispatch])

	async function click() {
		if (history.location.pathname !== "/") {
			await dispatch(clearAllProductsThunk())
		}
		history.push('/')
	}


	// Styling for dark/light mode
	const darkModeStyle = {
		color: "white"
	}
	const lightModeStyle = {
		color: "black"
	}

	return (
		<div className='navBar'>
			<div className='HomeButton'>
				<div onClick={() => click()}>
					<img className='logo' src='/logo.png' alt='Logo'></img>
				</div>
			</div>
			<div className='searchBarContainer'>
				<Search />
			</div>
			<div className='newProduct'>
				{sessionUser && <NavLink style={theme === "dark" ? darkModeStyle : lightModeStyle} className="NewProductListing" exact to="/product/new">New Product Listing</NavLink>}
			</div>
			<div className='socialsAndProfile'>
				{sessionUser && <div className='cartIcon'>
					<p className="cartAmount">{`${amount}`}</p>
					<NavLink className="cart_button" exact to={`/user/${sessionUser?.id}/cart`}><i class="fas fa-shopping-cart fa-lg"></i></NavLink>
				</div>}
				<div className='socials'>
					<OpenModalButton
						className="socialsButton"
						buttonText="Contact Me"
						blackButton={theme === 'dark' ? true : false}
						modalComponent={<SocialsModal />}
					/>
				</div>
				{isLoaded && (
					<div className='profileButtonContainer'>
						<ProfileButton user={sessionUser} />
					</div>
				)}
			</div>
		</div>
	);
}

export default Navigation;
