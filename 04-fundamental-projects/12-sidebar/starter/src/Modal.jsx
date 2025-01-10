import React from 'react'
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
		const { isModalOpened, closeModal } = useGlobalContext();

	return (
		<div className={isModalOpened ? 'show-modal modal-overlay' : 'modal-overlay'}>
			<div className="modal-container">
			<h3>modal content</h3>
			<button className="close-modal-btn" onClick={closeModal}>
				<FaTimes />
			</button>
			</div>
		</div>
	)
}

export default Modal;