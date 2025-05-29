import { Canvas } from '@react-three/fiber'

import { Experience } from './components/Experience'

function App() {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas
				camera={{
					position: [-61.05578777649214, -18.33198705303058, 43.07185286645316],
					rotation: [
						-0.7080325501207816, -1.312212740713866, -0.6913750098598248,
					],
					fov: 50,
				}}
				style={{ background: '#000' }}
			>
				<Experience />
			</Canvas>
		</div>
	)
}
export default App
