import {
	OrbitControls,
	PerspectiveCamera,
	ScrollControls,
} from '@react-three/drei'

import { DebugCamera } from './DebugCamera'
import { Keyboard } from './Keyboard'

export const Experience = () => {
	return (
		<>
			<OrbitControls />
			<PerspectiveCamera makeDefault position={[0, 2, 5]} />
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 10, 5]} intensity={2} />
			<ScrollControls pages={3} damping={0.5}>
				{/* <Astronaut/> */}
				<Keyboard />
			</ScrollControls>
			<DebugCamera />
		</>
	)
}
