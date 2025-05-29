/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import KeyboardGLB from '@/assets/models/keyboard.glb'

export const Keyboard = (props) => {
	const { scene } = useGLTF(KeyboardGLB)

	const scroll = useScroll()

	const ref = useRef()
	const tl = useRef()

	useFrame(() => {
		tl.current.progress(scroll.offset)
	})

	useLayoutEffect(() => {
		tl.current = gsap.timeline()

		tl.current
			.to(ref.current.position, {
				x: 0,
				y: 2,
				z: 4.3,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(ref.current.position, {
				x: 2,
				y: 0,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
	}, [])

	return (
		<group {...props} dispose={null} ref={ref}>
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
