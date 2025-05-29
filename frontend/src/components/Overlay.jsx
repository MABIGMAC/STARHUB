/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Scroll } from '@react-three/drei'
import { Card } from 'antd'

import { Section } from './UI/Section'

import starlablogo from '@/assets/starlablogo.svg'

export const Overlay = () => {
	return (
		<Scroll html>
			<section
				style={{
					height: '90vh',
					display: 'flex', // enable horizontal layout
					flexDirection: 'row', // align items left to right
					alignItems: 'center', // vertically center content
					justifyContent: 'space-between', // space out left and right sides
					padding: '5vh 1vw',
				}}
			>
				<img
					src={starlablogo}
					alt="Starlab Logo"
					style={{ alignSelf: 'start' }}
				/>

				<Card
					variant="borderless"
					style={{ backgroundColor: 'transparent', color: 'white' }}
				>
					<h1>Hello world!</h1>
					Welcome to STARLAB, where we show you just how far we can go together
				</Card>
			</section>
			<Section align="right">
				<h1>Hello world!</h1>
				<p>
					Phasellus euismod, urna eu tincidunt consectetur, nisi nisl aliquam
					nunc, eget aliquam massa nisl quis neque. Sed vitae sapien nec sapien
					cursus dictum. Mauris euismod, sapien eu commodo cursus, nisi nisl
					aliquam nunc, eget aliquam massa nisl quis neque. Sed vitae sapien nec
					sapien cursus dictum.
				</p>
			</Section>
			<Section>
				<h1>And if you think you can do better</h1>
				<p>You can kiss my ass</p>
			</Section>
			<Section>
				<h1>Hello world!</h1>
				<p>
					Quisque velit nisi, pretium ut lacinia in, elementum id enim.
					Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor
					eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada.
				</p>
			</Section>
			<Section>
				<h1>Hello world!</h1>
				<p>
					Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
					Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
					quis lorem ut libero malesuada feugiat.
				</p>
			</Section>
		</Scroll>
	)
}
