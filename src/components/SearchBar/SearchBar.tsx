import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

type Props = {
	searchImages: (query: string) => void;
};

const SearchBar = ({ searchImages }: Props) => {
	const onSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			query: { value: string };
		};
		const query = target.query.value;

		if (query.trim() === "") {
			toast("Search field cannot be empty", { icon: "❗️" });
		} else {
			searchImages(query);
		}
	};

	return (
		<header className={styles.header}>
			<form className={styles.headerForm} onSubmit={onSearch}>
				<input
					className={styles.headerInput}
					name="query"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
				<button className={styles.headerButton} type="submit">
					🔎
				</button>
			</form>
			<Toaster position="top-right" />
		</header>
	);
};

export default SearchBar;
