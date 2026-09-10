"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid, ContactShadows } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function Module({ position, size, color, emissive }: { position: [number, number, number]; size: [number, number, number]; color: string; emissive: string }) {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.12} metalness={0.15} roughness={0.55} transparent opacity={0.98} />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...size)]} />
        <lineBasicMaterial color="#0C6FBD" transparent opacity={0.35} />
      </lineSegments>
    </mesh>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();
  useFrame(({ mouse, clock }) => {
    if (!g.current) return;
    if (reduce) return;
    const t = clock.getElapsedTime();
    g.current.rotation.y = t * 0.12 + mouse.x * 0.35;
    g.current.rotation.x = 0.12 + mouse.y * -0.15;
    g.current.position.y = Math.sin(t * 0.8) * 0.06;
  });
  return <group ref={g}>{children}</group>;
}

export default function HeroScene() {
  const reduce = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [4.4, 2.6, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden
    >
      <ambientLight intensity={1.15} />
      <hemisphereLight args={["#ffffff", "#dfe8f2", 0.7]} />
      <directionalLight position={[5, 6, 4]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-4, 3, -2]} intensity={0.45} color="#bcd9f5" />
      <pointLight position={[0, -2, 3]} intensity={4} color="#0C6FBD" />
      <Float speed={reduce ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.5}>
        <Rig>
          {/* Central hub */}
          <Module position={[0, 0.35, 0]} size={[2.2, 1.5, 1.4]} color="#F2F4F7" emissive="#DCE9F5" />
          {/* Storage zone */}
          <Module position={[-0.35, -0.85, 0.1]} size={[1.5, 0.8, 1.1]} color="#E9EDF2" emissive="#D8E6F3" />
          {/* Extension zone */}
          <Module position={[1.85, 0.3, 0]} size={[1.1, 1.4, 1.2]} color="#FFFFFF" emissive="#DCE9F5" />
          {/* Sensor strip accent */}
          <mesh position={[0, 0.95, 0.72]}>
            <boxGeometry args={[1.9, 0.06, 0.02]} />
            <meshBasicMaterial color="#0C6FBD" />
          </mesh>
          {/* Magnetic nodes */}
          {[[-1.15, 0.35, 0], [1.1, 0.35, 0]].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#E8A33D" />
            </mesh>
          ))}
          {/* Microscope column hint */}
          <mesh position={[1.85, 1.25, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.7, 16]} />
            <meshStandardMaterial color="#3D4248" metalness={0.35} roughness={0.45} />
          </mesh>
        </Rig>
      </Float>
      <Grid position={[0, -1.5, 0]} args={[14, 14]} cellColor="#C9D6E4" sectionColor="#A9C2DA" fadeDistance={16} infiniteGrid />
      <ContactShadows position={[0, -1.48, 0]} opacity={0.35} scale={10} blur={2.8} far={4} color="#5a6b7d" />
    </Canvas>
  );
}
