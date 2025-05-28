/* eslint */
import { useFrame, useThree } from '@react-three/fiber'

export const DebugCamera = () => {
	const { camera } = useThree()

	useFrame(() => {
		console.log('Camera position:', camera.position)
		console.log('Camera rotation:', camera.rotation)
		console.log('Camera zoom:', camera.position.z)
		console.log('Camera scale:', camera.type)
	})

	return null
}
