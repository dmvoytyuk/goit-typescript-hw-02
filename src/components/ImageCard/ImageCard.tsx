import styles from "./ImageCard.module.css";
import { Image } from "../../types/types.ts";

type Props = {
	image: Image;
	openModal: (imageId: string) => void;
};

const ImageCard = ({
	image: {
		id,
		alt_description,
		urls: { small },
	},
	openModal,
}: Props) => {
	return (
		<div>
			<img
				className={styles.imageCard}
				onClick={() => {
					openModal(id);
				}}
				src={small}
				alt={alt_description}
				width="350"
				height="250"
			/>
		</div>
	);
};

export default ImageCard;
