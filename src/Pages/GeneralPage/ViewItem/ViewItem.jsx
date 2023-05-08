import React, { useState } from 'react';

const PopupModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPopupModal = () => {
    setIsModalOpen(true);
    window.open('', 'Popup', 'width=500,height=500');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openPopupModal}>Open Popup Modal</button>

      {isModalOpen && (
        <div className={classes.modal-overlay}>
          <div className={classes.modal}>
            <h2>Popup Modal Content</h2>
            <p>This is the content of the popup modal.</p>
            <button onClick={closeModal}>Close Popup Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModalComponent;