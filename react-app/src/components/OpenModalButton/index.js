import React from 'react';
import { useModal } from '../../context/Modal';
import { darkModeStyle, lightModeStyle } from '../Navigation/darkMode';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  blackButton
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  let activeColor = blackButton === true ? darkModeStyle : lightModeStyle
  if(blackButton) activeColor = darkModeStyle
  return (
    <button style={activeColor} className='buttonName' onClick={onClick}>{buttonText}</button>
  );
}

export default OpenModalButton;
