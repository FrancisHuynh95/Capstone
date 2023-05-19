import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='navBar'>
			<div className='HomeButton'>
				<NavLink exact to="/">Home</NavLink>
			</div>
			<div className='newProduct'>
				<NavLink exact to="/products/new">New Product Listing</NavLink>
			</div>
			<div className='socials'>
				<a>Socials</a>
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
