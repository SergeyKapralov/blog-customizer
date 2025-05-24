import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Select } from './ui/select';
import { Article } from './components/article/Article';
import { RadioGroup } from './ui/radio-group';
import { Separator } from './ui/separator';
import { renderPlan } from './renderPlan';
import formStyle from './components/article-params-form/ArticleParamsForm.module.scss';
import { Button } from './ui/button';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [draftArticleState, setDraftArticleState] =
		useState(defaultArticleState);
	const [articleState, setArticleState] = useState(defaultArticleState);
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen((prev) => !prev);
	console.log('articleState', articleState);

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
			<ArticleParamsForm isOpen={isOpen} onClick={toggleIsOpen}>
				{renderPlan.map((item) => {
					switch (item.type) {
						case 'select':
							return (
								<Select
									key={item.key}
									options={item.options}
									selected={draftArticleState[item.key]}
									onChange={(option) =>
										setDraftArticleState((prev) => ({
											...prev,
											[item.key]: option,
										}))
									}
									placeholder={item.placeholder}
									title={item.title}
								/>
							);
						case 'radio':
							return (
								<RadioGroup
									key={item.key}
									name={item.key}
									options={item.options}
									selected={draftArticleState[item.key]}
									onChange={(option) =>
										setDraftArticleState((prev) => ({
											...prev,
											[item.key]: option,
										}))
									}
									title={item.title}
								/>
							);
						case 'separator':
							return <Separator key={item.key} />;
						default:
							return null;
					}
				})}
				<div className={formStyle.bottomContainer}>
					<Button
						title='Сбросить'
						htmlType='reset'
						type='clear'
						onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
							evt.preventDefault();
							setArticleState(defaultArticleState);
							setDraftArticleState(defaultArticleState);
						}}
					/>
					<Button
						title='Применить'
						htmlType='submit'
						type='apply'
						onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
							evt.preventDefault();
							setArticleState(draftArticleState);
						}}
					/>
				</div>
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
