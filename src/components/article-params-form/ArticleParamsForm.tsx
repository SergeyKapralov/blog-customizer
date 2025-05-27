import { ArrowButton } from 'src/ui/arrow-button';
import { ReactNode } from 'react';
import { Text } from 'src/ui/text';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	children?: ReactNode;
	isOpen: boolean;
	onClick: () => void;
	sidebar?: React.RefObject<HTMLDivElement>;
};

export const ArticleParamsForm = ({
	children,
	isOpen,
	onClick,
	sidebar,
}: ArticleParamsFormProps) => {
	console.log({ children });
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside
				ref={sidebar}
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<Text as='h1' size={31} weight={800} uppercase>
						ЗАДАЙТЕ ПАРАМЕТРЫ
					</Text>
					{children}
				</form>
			</aside>
		</>
	);
};
