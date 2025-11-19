'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Building({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[2, 4, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.3}
        roughness={0.4}
        emissive="#60a5fa"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#1e293b" />
    </mesh>
  )
}

export default function ThreeScene() {
  const buildings = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: [
          (i % 3 - 1) * 4,
          0,
          Math.floor(i / 3) * 4 - 2,
        ] as [number, number, number],
      })),
    []
  )

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, 5, -10]} intensity={1.5} color="#60a5fa" />
        <pointLight position={[10, 5, 10]} intensity={1} color="#60a5fa" />
        {buildings.map((building, i) => (
          <Building key={i} position={building.position} />
        ))}
        <Ground />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

