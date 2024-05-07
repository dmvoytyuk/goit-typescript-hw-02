import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { Image } from "../../types/types";

type Props = {
	images: Image[];
	openModal: (imageId: string) => void;
};
const ImageGallery = ({ images, openModal }: Props) => {
	return (
		<ul className={styles.imageGallery}>
			{images.map((image) => {
				return (
					<li className={styles.imageGalleryItem} key={image.id}>
						<ImageCard image={image} openModal={openModal} />
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
