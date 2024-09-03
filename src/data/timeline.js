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
		year: '12/2023 - Current',
		title: 'Middle Front-end Developer (React / TS) at InsulaLabs',
		duration: `${result('2023-12-01')}`,
		details:
			"Stack: TS, React, Next.js, Tailwind CSS, Storybook, CMS Strapi. \n Team: 3 FE, 1 BE, 2 QA, 2 Designer, 1PM, 1 Supervisor. \n Tasks: \n •  Created adaptable templates for web applications, aligning with clients' business needs and initiated a modular template architecture, leading to a 45% reduction in development time. \n •  Worked closely with designers to craft interactive and responsive user interfaces using React, Next.js, and Tailwind CSS, ensuring a seamless and engaging user experience. \n •  Championed the integration of Storybook into the development workflow, designing UI components for enhanced reusability and consistency, resulting in a 60% improvement in interface consistency across projects. \n •  Seamlessly integrated Strapi CMS into projects, facilitating straightforward content management and empowering clients with efficient, user-friendly editing capabilities.",
	},
	{
		year: '10/2022 - 11/2023',
		title: 'Middle Front-end Developer (React / JS) at EverestMedia',
		duration: result('2022-10-01', '2023-11-01'),
		details:
			'Stack: JS, React, Axios, React Hook Forms, i18next, Framer Motion. \n Team: 5 FE, 2 BE, 2 Designer, 4 QA, 1PM. \n Tasks: \n • Development of unique SPA applications, including complex registration and navigation forms, taking into account different localizations. \n •  Integration with APIs using Axios for efficient data exchange between the frontend and backend. \n •  Create and manage forms with React Hook Forms for easy data entry and validation. \n •  Reviewing code from other developers to maintain high code quality and compliance with standards.',
	},
	{
		year: '07/2022 - 10/2022',
		title: 'Part-time Front-end Developer at Foxtrot',
		duration: result('2022-07-01', '2022-10-01'),
		details:
			'Completing tasks related to developing new components and fixing bugs in existing ones.',
	},
	{
		year: '03/2021 - 07/2022',
		title: 'Middle WordPress developer at UFUTURE',
		duration: result('2021-03-01', '2022-07-01'),
		details:
			'Developed complex corporate and e-commerce sites with seamless WordPress integration and custom admin panels.',
	},

	{
		year: '06/2020 - 03/2021',
		title: 'Part-time Front-end Developer (Freelance)',
		duration: result('2020-06-01', '2021-03-01'),
		details:
			"Implemented clients' website concepts in a short time frame and provided technical support after project completion.",
	},
	{
		year: '10/2019 - 06/2020',
		title: 'Junior WordPress developer at Seoprofy',
		duration: result('2019-10-01', '2020-06-01'),
		details: 'Created landing pages with integration into WordPress.',
	},
]
