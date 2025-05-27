import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useRef } from 'react';
import clsx from 'clsx';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Article } from './components/article/Article';
import { ArticleParamsPanel } from './components/areticle-params-panel/ArticleParamsPanel';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
import { useOutsideClickClose } from './ui/select/hooks/useOutsideClickClose';

const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	const [isOpen, setIsOpen] = useState(false);
	const sidebar = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef: sidebar,
		onChange: setIsOpen,
	});

	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				onClick={toggleIsOpen}
				sidebar={sidebar}>
				<ArticleParamsPanel
					articleState={articleState}
					onApply={(newState) => setArticleState(newState)}
					onReset={() => setArticleState(defaultArticleState)}
				/>
			</ArticleParamsForm>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
