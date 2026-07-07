// import { Canvas, useFrame } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import * as THREE from "three";

// function Nodes({ count = 80 }: { count?: number }) {
//   const points = useRef<THREE.Points>(null);
//   const lines = useRef<THREE.LineSegments>(null);

//   const { positions, linePositions } = useMemo(() => {
//     const pts: number[] = [];
//     const segs: number[] = [];
//     const arr: THREE.Vector3[] = [];
//     for (let i = 0; i < count; i++) {
//       const r = 3 + Math.random() * 2.5;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       const x = r * Math.sin(phi) * Math.cos(theta);
//       const y = r * Math.sin(phi) * Math.sin(theta);
//       const z = r * Math.cos(phi);
//       arr.push(new THREE.Vector3(x, y, z));
//       pts.push(x, y, z);
//     }
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i].distanceTo(arr[j]) < 1.6) {
//           segs.push(arr[i].x, arr[i].y, arr[i].z, arr[j].x, arr[j].y, arr[j].z);
//         }
//       }
//     }
//     return { positions: new Float32Array(pts), linePositions: new Float32Array(segs) };
//   }, [count]);

//   useFrame((state, delta) => {
//     if (points.current) points.current.rotation.y += delta * 0.08;
//     if (lines.current) lines.current.rotation.y += delta * 0.08;
//     if (points.current) points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
//     if (lines.current) lines.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
//   });

//   return (
//     <group>
//       <points ref={points}>
//         <bufferGeometry>
//           <bufferAttribute attach="attributes-position" args={[positions, 3]} />
//         </bufferGeometry>
//         <pointsMaterial size={0.08} color="#00E5FF" sizeAttenuation transparent opacity={0.95} />
//       </points>
//       <lineSegments ref={lines}>
//         <bufferGeometry>
//           <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
//         </bufferGeometry>
//         <lineBasicMaterial color="#6D5DFB" transparent opacity={0.35} />
//       </lineSegments>
//     </group>
//   );
// }

// function Core() {
//   const ref = useRef<THREE.Mesh>(null);
//   useFrame((s) => {
//     if (ref.current) {
//       ref.current.rotation.y = s.clock.elapsedTime * 0.3;
//       ref.current.rotation.x = s.clock.elapsedTime * 0.15;
//     }
//   });
//   return (
//     <mesh ref={ref}>
//       <icosahedronGeometry args={[1.2, 1]} />
//       <meshStandardMaterial
//         color="#00E5FF"
//         emissive="#00E5FF"
//         emissiveIntensity={0.6}
//         wireframe
//       />
//     </mesh>
//   );
// }

// export function NeuralScene() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 7], fov: 55 }}
//       dpr={[1, 2]}
//       gl={{ antialias: true, alpha: true }}
//     >
//       <ambientLight intensity={0.4} />
//       <pointLight position={[5, 5, 5]} intensity={1.2} color="#00E5FF" />
//       <pointLight position={[-5, -3, 4]} intensity={1} color="#6D5DFB" />
//       <Core />
//       <Nodes count={90} />
//     </Canvas>
//   );
// }
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Nodes({ count = 80 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const pts: number[] = [];
    const segs: number[] = [];
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr.push(new THREE.Vector3(x, y, z));
      pts.push(x, y, z);
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].distanceTo(arr[j]) < 1.6) {
          segs.push(arr[i].x, arr[i].y, arr[i].z, arr[j].x, arr[j].y, arr[j].z);
        }
      }
    }
    return { positions: new Float32Array(pts), linePositions: new Float32Array(segs) };
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.08;
    if (lines.current) lines.current.rotation.y += delta * 0.08;
    if (points.current) points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    if (lines.current) lines.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        {/* Slightly darker cyan for the points */}
        <pointsMaterial size={0.08} color="#0099CC" sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        {/* Darker purple for the lines */}
        <lineBasicMaterial color="#4A3D99" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

// ❌ The "Core" component (icosahedron/globe) has been removed entirely.

export function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lower ambient light for a darker feel */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#0099CC" />
      <pointLight position={[-5, -3, 4]} intensity={0.8} color="#4A3D99" />
      
      {/* ✅ The globe is removed – only the nodes and lines remain */}
      <Nodes count={90} />
    </Canvas>
  );
}