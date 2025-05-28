import { Canvas } from '@react-three/fiber'

import { Experience } from './components/Experience'

function App() {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas>
				<Experience />
			</Canvas>
		</div>
	)
}
export default App
