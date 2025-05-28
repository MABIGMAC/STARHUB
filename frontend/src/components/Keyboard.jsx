/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGLTF } from '@react-three/drei'

import KeyboardGLB from '@/assets/models/keyboard.glb'

export const Keyboard = (props) => {
	const { scene } = useGLTF(KeyboardGLB)

	return (
		<group {...props} dispose={null}>
			<primitive
				object={scene}
				{...props}
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
				zoom={1}
				scale={5}
				dispose={null}
			/>
		</group>
	)
}
