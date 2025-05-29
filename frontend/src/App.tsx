import { Canvas } from '@react-three/fiber'

import { Experience } from './components/Experience'

function App() {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas
				camera={{ position: [0, 2.5, 5], fov: 50 }}
				style={{ background: '#000' }}
			>
				<Experience />
			</Canvas>
		</div>
	)
}
export default App
