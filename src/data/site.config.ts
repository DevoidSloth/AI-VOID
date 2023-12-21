interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'JasonP', // Site author
	title: 'AIVoid', // Site title.
	description: 'A blog to talk about everything AI!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Check this out: ', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
