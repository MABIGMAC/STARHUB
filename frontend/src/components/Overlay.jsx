/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Scroll } from '@react-three/drei'

import { Section } from './UI/Section'

export const Overlay = () => {
	return (
		<Scroll html>
			<Section backgroundColor="#f0f0f0">
				<h1>Hello world!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget
					aliquam massa nisl quis neque. Sed vitae sapien nec sapien cursus
					dictum. Mauris euismod, sapien eu commodo cursus, nisi nisl aliquam
					nunc, eget aliquam massa nisl quis neque. Sed vitae sapien nec sapien
					cursus dictum.
				</p>
			</Section>
			<Section backgroundColor="#762B6E">
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
				<h1>Hello world!</h1>
				<p>
					Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
					Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
					Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
				</p>
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
