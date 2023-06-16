import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import SocialsModal from '../socialsModal';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../store/cart';
import Search from './search';

function Navigation({ isLoaded }){
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
	const cart = useSelector(state => state.cart.cart)
	const cartArray = Object.values(cart)
	let amount = 0;
	cartArray.map(product => amount += product.quantity)

	useEffect(() => {
		dispatch(getCartThunk())
	},[dispatch])

	return (
		<div className='navBar'>
			<div className='HomeButton'>
				<NavLink exact to="/">
					<img className='logo' src='/logo.png'></img>
				</NavLink>
			</div>
			<div className='searchBarContainer'>
				<Search />
			</div>
			<div className='newProduct'>
				{sessionUser && <NavLink className="NewProductListing" exact to="/product/new">New Product Listing</NavLink>}
			</div>
			<div className='cartIcon'>
				<p className="cartAmount">{`${amount}`}</p>
            <NavLink className="cart_button" exact to={`/user/${sessionUser?.id}/cart`}><i class="fas fa-shopping-cart fa-lg"></i></NavLink>
            </div>
			<div className='socials'>
				<OpenModalButton
				className="socialsButton"
				buttonText="Contact Me"
				modalComponent={<SocialsModal />}
				/>
			</div>
			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
