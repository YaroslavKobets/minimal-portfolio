const HeaderButton = props => {
	let classes = `bg-violet-300 dark:bg-orange-300 text-white dark:text-stone-900 py-1 px-3 rounded-md flex items-center justify-center font-bold text-2xl ${props.className}`
	return (
		<a {...props} className={classes}>
			{props.children}
		</a>
	)
}

export default HeaderButton
