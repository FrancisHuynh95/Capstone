import React from 'react';
import { useModal } from '../../context/Modal';
import { useTheme } from '../Navigation/darkMode';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();
  const {theme} = useTheme()

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  const lightMode = {
    color: "black"
  }

  const darkMode = {
    color: "white"
  }

  return (
    <button style={theme === 'dark' ? darkMode : lightMode} className='buttonName' onClick={onClick}>{buttonText}</button>
  );
}

export default OpenModalButton;
