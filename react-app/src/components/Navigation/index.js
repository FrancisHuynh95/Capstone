import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import SocialsModal from '../socialsModal';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='navBar'>
			<div className='HomeButton'>
				<NavLink exact to="/">
					<img className='logo' src='./logo.png'></img>
				</NavLink>
			</div>
			<div className='newProduct'>
				{sessionUser && <NavLink className="NewProductListing" exact to="/products/new">New Product Listing</NavLink>}
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
