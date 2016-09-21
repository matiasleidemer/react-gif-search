import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
  if (!props.selectedGif) {
    return(<div></div>);
  }

  return(
    <Modal isOpen={ props.modalIsOpen }
           onRequestClose={ () => props.onRequestClose() } >
      <div className="gif-modal">
        <img src={ props.selectedGif.images.original.url } alt="gif" />
        <p><strong>Source:</strong><a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
        <p><strong>Rating:</strong>{ props.selectedGif.rating }</p>
      </div>
    </Modal>
  );
};

export default GifModal;
