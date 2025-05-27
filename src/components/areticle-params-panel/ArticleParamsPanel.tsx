import { useState, useEffect } from 'react';
import { defaultArticleState } from '../../constants/articleProps';
import { renderPlan } from '../../renderPlan';
import { Select } from '../../ui/select';
import { RadioGroup } from '../../ui/radio-group';
import { Separator } from '../../ui/separator';
import { Button } from '../../ui/button';
import formStyle from '../article-params-form/ArticleParamsForm.module.scss';

type ArticleParamsPanelProps = {
	articleState: typeof defaultArticleState;
	onApply: (newState: typeof defaultArticleState) => void;
	onReset: () => void;
};
export const ArticleParamsPanel = ({
	articleState,
	onApply,
	onReset,
}: ArticleParamsPanelProps) => {
	const [draftArticleState, setDraftArticleState] = useState(articleState);

	useEffect(() => {
		setDraftArticleState(articleState);
	}, [articleState]);

	return (
		<>
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
					onClick={(evt) => {
						evt.preventDefault();
						onReset();
					}}
				/>
				<Button
					title='Применить'
					htmlType='submit'
					type='apply'
					onClick={(evt) => {
						evt.preventDefault();
						onApply(draftArticleState);
					}}
				/>
			</div>
		</>
	);
};
