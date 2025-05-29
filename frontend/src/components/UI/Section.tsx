import { Card } from 'antd'

type SectionProps = {
	align?: 'left' | 'right'
	backgroundColor?: string // Optional prop for background color
	children: React.ReactNode
}

export const Section = ({
	children,
	backgroundColor = 'transparent', // Default to transparent if no color is provided
	align = 'left',
}: SectionProps) => {
	const backgroundWithOpacity = `${backgroundColor}80` // '80' is ~50% opacity in hex

	const alignmentStyle =
		align === 'right'
			? { alignSelf: 'flex-end', maxWidth: '50%' }
			: { alignSelf: 'flex-start', maxWidth: '50%' }

	return (
		<section
			style={{
				height: '90vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '2.5rem',
				backgroundColor: backgroundWithOpacity,
			}}
		>
			<Card style={alignmentStyle}>{children}</Card>
		</section>
	)
}
