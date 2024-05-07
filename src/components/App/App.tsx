import { useEffect, useRef, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../utils/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../../types/types.ts";

function App() {
	const [images, setImages] = useState<Image[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState<Image | undefined>(undefined);
	const [query, setQuery] = useState<string | null>(null);
	const loadMoreBtnRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (query) {
			const fetchImages = async () => {
				try {
					setIsLoading(true);
					const fetchedImages = await getImages(page, query);
					setImages((currImages) => {
						return [...currImages, ...fetchedImages.results];
					});
					setTotalPages(fetchedImages.total_pages);
				} catch (error) {
					setIsError(true);
				} finally {
					setIsLoading(false);
				}
			};
			fetchImages();
		}
	}, [page, query]);

	const searchImages = (newQuery: string) => {
		if (query !== newQuery) {
			setQuery(newQuery);
			setPage(1);
			setImages([]);
		}
	};

	const loadMore = () => {
		setPage((currPage) => currPage + 1);
	};

	const openModal = (imageId: string) => {
		setIsModalOpen(true);
		const imageToShow = images.find((image) => imageId === image.id);
		setModalImage(imageToShow);
	};

	const closeModal = () => {
		document.body.classList.remove("ReactModal__Body--open");
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (loadMoreBtnRef.current !== null) {
			loadMoreBtnRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "start",
			});
		}
	}, [isLoading]);

	return (
		<>
			<SearchBar searchImages={searchImages} />
			{images.length > 0 && (
				<ImageGallery images={images} openModal={openModal} />
			)}
			{page < totalPages && !isLoading && (
				<LoadMoreBtn ref={loadMoreBtnRef} loadMore={loadMore} />
			)}
			{isLoading && <Loader />}
			{isError && <ErrorMessage />}
			{isModalOpen && modalImage && (
				<ImageModal
					isModalOpen={isModalOpen}
					closeModal={closeModal}
					image={modalImage}
				/>
			)}
		</>
	);
}

export default App;
