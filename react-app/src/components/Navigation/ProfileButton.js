import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()
  const {closeModal} = useModal()


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(logout());
    closeModal()
    closeMenu()
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button id="userButtonProfileThing" onClick={openMenu}>
      <i class="fas fa-user-circle fa-lg"></i>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
          <div className="usernameAndEmail">
            <p>Hello {user.username}</p>
            <div>
            <NavLink onClick={() => closeMenu()} className="your_profile_button" exact to="/user"><i class="fas fa-user-circle fa"></i> Your Profile</NavLink>
            </div>
            <p>{user.email}</p>
          </div>

              <button  className="userButtonProfileThingButton" onClick={handleLogout}><i class="fas fa-sign-out-alt fa"></i> Log Out</button>

          </>
        ) : (
          <>
          <div className="loginButtonModal">
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
              />
              </div>
              <div className="signupButtonModal">
              <OpenModalButton
                buttonText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
                />
                </div>

          </>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
