import {
	fontColors,
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
} from './constants/articleProps';

export const renderPlan = [
	{
		type: 'select',
		key: 'fontFamilyOption',
		options: fontFamilyOptions,
		placeholder: 'Выберите шрифт',
		title: 'Шрифт',
	},
	{
		type: 'radio',
		key: 'fontSizeOption',
		options: fontSizeOptions,
		title: 'Размер шрифта',
	},
	{
		type: 'select',
		key: 'fontColor',
		options: fontColors,
		placeholder: 'Выберите цвет',
		title: 'Цвет шрифта',
	},
	{
		type: 'separator',
		key: 'separator',
	},
	{
		type: 'select',
		key: 'backgroundColor',
		options: backgroundColors,
		placeholder: 'Выберите цвет заднего фона',
		title: 'Цвет фона',
	},
	{
		type: 'select',
		key: 'contentWidth',
		options: contentWidthArr,
		placeholder: 'Выберите ширину контейнера',
		title: 'Ширина контента',
	},
] as const;
