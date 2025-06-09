/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import KeyboardGLB from '@/assets/models/starboy.glb'

export const Starboy = (props) => {
	const { scene } = useGLTF(KeyboardGLB)

	const scroll = useScroll()

	const ref = useRef()
	const starboyref = useRef()
	const tl = useRef()

	useFrame(() => {
		tl.current.progress(scroll.offset)
	})

	useLayoutEffect(() => {
		tl.current = gsap.timeline()

		tl.current
			.to(starboyref.current.position, {
				x: -10,
				y: -38,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(
				starboyref.current.scale,
				{
					x: 10,
					y: 10,
					z: 10,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<', // Starts at the same time as position
			)
			.to(
				starboyref.current.rotation,
				{
					x: 0.2, // example rotation
					y: -0.8,
					z: 0.09,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<',
			)
			.to(starboyref.current.rotation, {
				x: 0, // example rotation
				y: 2.3,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(
				starboyref.current.position,
				{
					x: 20,
					y: -50,
					z: 0,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<',
			)
			.to(
				starboyref.current.scale,
				{
					x: 45,
					y: 45,
					z: 45,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<', // Starts at the same time as position
			)
			.to(starboyref.current.position, {
				x: 0,
				y: 10,
				z: 0,
				duration: 1,
				ease: 'power2.inOut',
			})
			.to(
				starboyref.current.scale,
				{
					x: 1,
					y: 1,
					z: 1,
					duration: 1,
					ease: 'power2.inOut',
				},
				'<', // Starts at the same time as position
			)
	}, [])

	console.log('ref.current.rotation', ref.current?.rotation)

	return (
		<group {...props} dispose={null} ref={ref}>
			<primitive
				ref={starboyref}
				object={scene}
				{...props}
				position={[10, -7, -45]}
				rotation={[0, 0, 0]}
				zoom={1}
				scale={2.8}
				dispose={null}
			/>
		</group>
	)
}
