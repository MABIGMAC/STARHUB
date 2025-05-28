import { ScrollControls } from '@react-three/drei'

import { DebugCamera } from './DebugCamera'
import { Keyboard } from './Keyboard'
import { Overlay } from './Overlay'

export const Experience = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 10, 5]} intensity={2} />
			<ScrollControls pages={3} damping={0.5}>
				<Overlay />
				<Keyboard />
			</ScrollControls>
			<DebugCamera />
		</>
	)
}
