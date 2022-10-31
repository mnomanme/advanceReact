import React from 'react';
import { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 3000);
	});

	return (
		<>
			<h5>modal</h5>
			<div className="modal">
				<p>{modalContent}</p>
			</div>
		</>
	);
};

export default Modal;
