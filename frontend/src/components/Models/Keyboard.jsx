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
				y: -100,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(ref.current.position, {
				x: 0,
				y: -100,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(ref.current.position, {
				x: 0,
				y: -100,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(
				ref.current.scale,
				{
					x: 1,
					y: 1,
					z: 1,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<', // Starts at the same time as position
			)
			.to(
				ref.current.rotation,
				{
					x: 0,
					y: 0,
					z: 0,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<',
			)
			.to(ref.current.position, {
				x: 40,
				y: -50,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(
				ref.current.rotation,
				{
					x: 0,
					y: 4.9,
					z: 0,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<',
			)
			.to(
				ref.current.scale,
				{
					x: 1000,
					y: 1000,
					z: 1000,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<', // Starts at the same time as position
			)
	}, [])

	return (
		<group {...props} dispose={null}>
			{/* <OrbitControls /> */}
			<primitive
				ref={ref}
				object={scene}
				{...props}
				position={[0, -100, 0]}
				rotation={[0, 0, 0]}
				zoom={1}
				scale={100}
				dispose={null}
			/>
		</group>
	)
}
