import { Card } from 'antd'

type SectionProps = {
	backgroundColor?: string // Optional prop for background color
	children: React.ReactNode
}

export const Section = ({
	children,
	backgroundColor = '#ffffff',
}: SectionProps) => {
	const backgroundWithOpacity = `${backgroundColor}80` // '80' is ~50% opacity in hex

	return (
		<section
			style={{
				height: '90vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '2.5rem',
				backgroundColor: backgroundWithOpacity,
				maxWidth: '50%',
			}}
		>
			<Card>{children}</Card>
		</section>
	)
}
