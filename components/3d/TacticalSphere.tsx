import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleCloud = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = new Float32Array(2000 * 3);
  
  // Create random points on a sphere surface
  for (let i = 0; i < 2000; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360); 
    
    // Convert to cartesian, slightly randomized radius
    const r = 3 + Math.random() * 0.5;
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);
    
    sphere[i * 3] = x;
    sphere[i * 3 + 1] = y;
    sphere[i * 3 + 2] = z;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fbbf24"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const CoreSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Sphere args={[1.8, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial
        color="#1e293b"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
};

export const TacticalScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#fbbf24" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <CoreSphere />
      <ParticleCloud />
    </>
  );
};
