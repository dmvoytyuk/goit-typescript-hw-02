import styles from "./LoadMoreBtn.module.css";
import { forwardRef } from "react";

type Props = {
	loadMore: () => void;
};

type Ref = HTMLButtonElement;

const LoadMoreBtn = forwardRef<Ref, Props>(({ loadMore }, ref) => {
	return (
		<button
			ref={ref}
			className={styles.loadMoreButton}
			type="button"
			onClick={() => loadMore()}
		>
			Load more
		</button>
	);
});

export default LoadMoreBtn;
