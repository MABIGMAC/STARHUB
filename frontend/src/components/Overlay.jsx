/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Scroll } from '@react-three/drei'

const Section = (props) => {
	return (
		<section
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '2.5rem',
			}}
		>
			<div
				style={{
					width: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						maxWidth: '24rem',
						width: '100%',
					}}
				>
					<div
						style={{
							backgroundColor: 'white',
							borderRadius: '0.5rem',
							paddingLeft: '2rem',
							paddingRight: '2rem',
							paddingTop: '3rem',
							paddingBottom: '3rem',
						}}
					>
						{props.children}
					</div>
				</div>
			</div>
		</section>
	)
}

export const Overlay = () => {
	return (
		<Scroll html>
			<Section>
				<h1>Hello world!</h1>
			</Section>
			<Section>
				<h1>Hello world!</h1>
			</Section>
			<Section>
				<h1>Hello world!</h1>
			</Section>
			<Section>
				<h1>Hello world!</h1>
			</Section>
			<Section>
				<h1>Hello world!</h1>
			</Section>
		</Scroll>
	)
}
