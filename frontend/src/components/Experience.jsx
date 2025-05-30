import { ScrollControls, Stars } from '@react-three/drei'

// import { DebugCamera } from './DebugCamera'
import { Keyboard } from './Models/Keyboard'
import { Starboy } from './Models/Starboy'
import { Overlay } from './Overlay'

export const Experience = () => {
	return (
		<>
			{/* <OrbitControls /> */}
			<ambientLight intensity={0.5} />
			<Stars />
			<directionalLight position={[5, 10, 5]} intensity={2} />
			<ScrollControls pages={4} damping={0.5}>
				<Overlay />
				<Keyboard />
				<Starboy />
			</ScrollControls>
			{/* <DebugCamera /> */}
		</>
	)
}
