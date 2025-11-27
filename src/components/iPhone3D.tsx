import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

function IPhoneModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      if (hovered) {
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      } else {
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <RoundedBox
        args={[1.4, 3, 0.15]}
        radius={0.15}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </RoundedBox>

      <RoundedBox
        args={[1.3, 2.8, 0.01]}
        radius={0.05}
        smoothness={4}
        position={[0, 0, 0.08]}
      >
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.2}
          emissive="#0071E3"
          emissiveIntensity={0.1}
        />
      </RoundedBox>

      <mesh position={[-0.3, 1.2, 0.08]}>
        <boxGeometry args={[0.3, 0.05, 0.03]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[-0.5, 0.8, 0.08]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
      </mesh>

      <group position={[-0.4, -0.5, -0.09]}>
        <RoundedBox args={[0.5, 0.5, 0.03]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <mesh position={[-0.15, 0.15, 0.02]}>
          <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[0.15, 0.15, 0.02]}>
          <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[-0.15, -0.15, 0.02]}>
          <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      <mesh position={[0.72, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0.72, -0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.15, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0.72, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.15, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[-0.72, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function iPhone3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0071E3" />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        <IPhoneModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
