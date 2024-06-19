function dateDifference(previousDate, currentDate) {
	const monthDifference =
		currentDate.getMonth() -
		previousDate.getMonth() +
		12 * (currentDate.getFullYear() - previousDate.getFullYear())
	const yearDifference = Math.floor(monthDifference / 12)
	const monthDifferenceRemainder = monthDifference % 12

	return `${yearDifference ? `${yearDifference} year` : ''}  ${
		monthDifferenceRemainder ? `${monthDifferenceRemainder} month` : ''
	}`
}

const result = (date1, date2) => {
	return dateDifference(new Date(date1), date2 ? new Date(date2) : new Date())
}

export default [
	{
		year: 'January 2024 - Present',
		title: 'Middle Front-end Developer (React) / Senior Markup Developer ',
		duration: `NDA ${result('2024-01-01')}`,
		details:
			'Development and maintenance of small to medium SPAs using React. Developing and implementing new functionality. Refactoring using TypeScript. Improving site performance by optimizing JS and SCSS code.',
	},
	{
		year: 'March 2023 - December 2023',
		title: 'Middle Front-end Developer (JS) at EverestMedia',
		duration: result('2023-03-01', '2023-12-01'),
		details:
			"Developing multi-page websites for a specific company product, implementing multi language functionality, adding new features, and fixing bugs on existing websites. Rewriting outdated code to meet new standards. Designing and implementing a component-based approach for creating the company's product websites.",
	},
	{
		year: 'December 2022 - March 2023',
		title: 'Part-time Front-end Developer at Foxtrot',
		duration: result('2022-12-01', '2023-04-01'),
		details:
			'Completing tasks related to developing new components and fixing bugs in existing ones.',
	},
	{
		year: 'January 2022 - October 2022',
		title: 'Middle WordPress developer at UFUTURE',
		duration: result('2022-01-01', '2022-11-01'),
		details:
			'Creating new designs and redesigning existing partner websites, fully integrating the developed designs with WordPress, and performing initial SEO setup. Providing support and adding new functionality to existing websites.',
	},

	{
		year: 'July 2020 - December 2021',
		title: 'Part-time Web Developer (Freelance)',
		duration: result('2021-07-01', '2023-01-01'),
		details:
			'Completing tasks related to frontend development, WordPress integration, developing and adding new functionality, bug fixing for both existing and new client orders.',
	},
	{
		year: 'October 2019 - June 2020',
		title: 'Junior HTML coder / Junior WordPress developer at Seoprofy.ua',
		duration: result('2019-10-01', '2020-07-01'),
		details:
			'Development of single-page websites with easy integration into WordPress.',
	},
	{
		year: 'June 2019',
		title: 'First Line of Code',
		duration: 'the beginning',
		details:
			'I wrote my first line of real code that started my journey into the digital world',
	},
]
