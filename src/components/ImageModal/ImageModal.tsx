import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import { Image } from "../../types/types.ts";

const modalStyles = {
	overlay: {
		backgroundColor: "rgb(0 0 0 / 0.9)",
	},
	content: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "black",
		border: "none",
		borderRadius: "0px",
		padding: "0",
		width: "fit-content",
		height: "fit-content",
		maxHeight: "90%",
		margin: "auto auto",
	},
};

type Props = {
	isModalOpen: boolean;
	closeModal: () => void;
	image: Image;
};

const ImageModal = ({ isModalOpen, closeModal, image }: Props) => {
	return (
		<div>
			<ReactModal
				style={modalStyles}
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				preventScroll={true}
			>
				<img
					style={{
						objectFit: "scale-down",
						borderRadius: "5px",
					}}
					src={image.urls.regular}
					alt={image.alt_description}
				/>
			</ReactModal>
		</div>
	);
};

export default ImageModal;
