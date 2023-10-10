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
		year: 'October 2022 - Present',
		title: 'Front-end Developer',
		duration: result('2022-10-01'),
		details:
			"Developing multi-page websites for a specific company product, implementing multilanguage functionality. Adding new features and fixing bugs on existing websites. Rewriting outdated code to meet new standards. Designing and implementing a component-based approach for creating the company's product websites.",
	},
	{
		year: 'August 2020 - Present',
		title: 'Part-time Web Developer ',
		duration: `Freelance ${result('2020-01-09')}`,
		details:
			'Completing tasks related to frontend development, WordPress integration, developing and adding new functionality, bug fixing for both existing and new clients orders.',
	},
	{
		year: 'January 2023 - February 2023',
		title: 'Part-time Front-end Developer at Foxtrot',
		duration: result('2023-01-01', '2023-03-01'),
		details:
			'Completing tasks related to developing new components and fixing bugs in existing ones.',
	},

	{
		year: 'April 2021 – October 2022',
		title: 'WordPress Developer at UFuture',
		duration: result('2021-04-01', '2022-11-01'),
		details:
			'Creating new designs and redesigning existing partner websites. Full integration of developed designs with WordPress and initial SEO setup. Providing support and adding new functionality to existing websites.',
	},
	{
		year: 'October 2020 – March 2021',
		title: 'Junior HTML coder at Seoprofy',
		duration: result('2020-10-01', '2021-04-01'),
		details:
			'Development of single-page websites with easy integration into WordPress.',
	},
	{
		year: 'June 2020',
		title: 'First Line of Code',
		duration: 'the beginning',
		details:
			'I wrote my first line of real code that started my journey into the digital world',
	},
]
