
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";
// import { TextureLoader } from "three";

// function Earth() {
//   const ref = useRef<THREE.Mesh>(null);

//   // Load Earth texture from a reliable CDN
//   const texture = useLoader(TextureLoader, "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

//   useFrame((state, delta) => {
//     if (ref.current) {
//       // Rotate continuously
//       ref.current.rotation.y += delta * 0.1;

//       // Subtle mouse interaction
//       const mx = (state.pointer.x || 0) * 0.2;
//       const my = (state.pointer.y || 0) * 0.1;
//       ref.current.rotation.x += (my - ref.current.rotation.x) * 0.02;
//       ref.current.rotation.z += (mx * 0.1 - ref.current.rotation.z) * 0.02;
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <sphereGeometry args={[2, 64, 64]} />
//       <meshStandardMaterial
//         map={texture}
//         roughness={0.4}
//         metalness={0.1}
//         emissive={new THREE.Color(0x112244)}
//         emissiveIntensity={0.1}
//       />
//       {/* Glow / atmosphere layer */}
//       <mesh scale={1.02}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshBasicMaterial
//           color="#4a8aff"
//           transparent
//           opacity={0.08}
//           side={THREE.BackSide}
//         />
//       </mesh>
//     </mesh>
//   );
// }

// export function GlobeSection() {
//   return (
//     <section className="relative py-28 sm:py-36 overflow-hidden">
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--violet) 18%, transparent), transparent 70%)",
//         }}
//       />
//       <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">
//             [ Global Impact ]
//           </p>
//           <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//             Intelligence,
//             <br />
//             <span className="text-gradient">distributed worldwide.</span>
//           </h2>
//           <p className="mt-5 text-muted-foreground text-lg max-w-lg">
//             Yetrix orchestrates teams, infrastructure, and AI capability across continents — delivering
//             outcomes wherever your business operates.
//           </p>
//           <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
//             {[
//               { v: "18+", l: "Markets" },
//               { v: "6", l: "Time Zones" },
//               { v: "∞", l: "Throughput" },
//             ].map((s) => (
//               <div key={s.l} className="glass rounded-xl p-4 text-center">
//                 <div className="text-2xl font-display font-semibold text-gradient">{s.v}</div>
//                 <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative h-[460px] md:h-[560px] glass rounded-3xl overflow-hidden">
//           <Canvas
//             camera={{ position: [0, 0, 6], fov: 50 }}
//             dpr={[1, 2]}
//             style={{ background: "transparent" }}
//           >
//             <ambientLight intensity={0.6} />
//             <pointLight position={[5, 5, 5]} color="#00E5FF" intensity={1.4} />
//             <pointLight position={[-5, -3, -2]} color="#6D5DFB" intensity={1.2} />
//             <Earth />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";
// import { TextureLoader } from "three";

// function Earth() {
//   const earthRef = useRef<THREE.Mesh>(null);
//   const ring1Ref = useRef<THREE.Mesh>(null);
//   const ring2Ref = useRef<THREE.Mesh>(null);

//   const texture = useLoader(TextureLoader, "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

//   useFrame((state, delta) => {
//     // Rotate Earth
//     if (earthRef.current) {
//       earthRef.current.rotation.y += delta * 0.1;
//       // Mouse interaction
//       const mx = (state.pointer.x || 0) * 0.2;
//       const my = (state.pointer.y || 0) * 0.1;
//       earthRef.current.rotation.x += (my - earthRef.current.rotation.x) * 0.02;
//       earthRef.current.rotation.z += (mx * 0.1 - earthRef.current.rotation.z) * 0.02;
//     }

//     // Rotate rings
//     if (ring1Ref.current) {
//       ring1Ref.current.rotation.x += delta * 0.05;
//       ring1Ref.current.rotation.z += delta * 0.03;
//     }
//     if (ring2Ref.current) {
//       ring2Ref.current.rotation.y += delta * 0.04;
//       ring2Ref.current.rotation.x += delta * 0.02;
//     }
//   });

//   return (
//     <group>
//       {/* Earth sphere */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshStandardMaterial
//           map={texture}
//           roughness={0.4}
//           metalness={0.1}
//           emissive={new THREE.Color(0x112244)}
//           emissiveIntensity={0.1}
//         />
//       </mesh>

//       {/* Atmosphere glow */}
//       <mesh scale={1.02}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshBasicMaterial
//           color="#4a8aff"
//           transparent
//           opacity={0.08}
//           side={THREE.BackSide}
//         />
//       </mesh>

//       {/* Ring 1 – cyan, equatorial */}
//       <mesh ref={ring1Ref}>
//         <torusGeometry args={[2.6, 0.03, 32, 64]} />
//         <meshStandardMaterial
//           color="#00E5FF"
//           emissive="#00E5FF"
//           emissiveIntensity={0.8}
//           transparent
//           opacity={0.7}
//           roughness={0.1}
//           metalness={0.2}
//         />
//       </mesh>

//       {/* Ring 2 – purple, tilted */}
//       <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0.3, 0]}>
//         <torusGeometry args={[2.8, 0.02, 32, 64]} />
//         <meshStandardMaterial
//           color="#6D5DFB"
//           emissive="#6D5DFB"
//           emissiveIntensity={0.5}
//           transparent
//           opacity={0.4}
//           roughness={0.1}
//           metalness={0.2}
//         />
//       </mesh>
//     </group>
//   );
// }

// export function GlobeSection() {
//   return (
//     <section className="relative py-28 sm:py-36 overflow-hidden">
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--violet) 18%, transparent), transparent 70%)",
//         }}
//       />
//       <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">
//             [ Global Impact ]
//           </p>
//           <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//             Intelligence,
//             <br />
//             <span className="text-gradient">distributed worldwide.</span>
//           </h2>
//           <p className="mt-5 text-muted-foreground text-lg max-w-lg">
//             Yetrix orchestrates teams, infrastructure, and AI capability across continents — delivering
//             outcomes wherever your business operates.
//           </p>
//           <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
//             {[
//               { v: "18+", l: "Markets" },
//               { v: "6", l: "Time Zones" },
//               { v: "∞", l: "Throughput" },
//             ].map((s) => (
//               <div key={s.l} className="glass rounded-xl p-4 text-center">
//                 <div className="text-2xl font-display font-semibold text-gradient">{s.v}</div>
//                 <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative h-[460px] md:h-[560px] glass rounded-3xl overflow-hidden">
//           <Canvas
//             camera={{ position: [0, 0, 6], fov: 50 }}
//             dpr={[1, 2]}
//             style={{ background: "transparent" }}
//           >
//             <ambientLight intensity={0.6} />
//             <pointLight position={[5, 5, 5]} color="#00E5FF" intensity={1.4} />
//             <pointLight position={[-5, -3, -2]} color="#6D5DFB" intensity={1.2} />
//             <Earth />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";
// import { TextureLoader } from "three";

// function EarthWithArcs() {
//   const earthRef = useRef<THREE.Mesh>(null);
//   const texture = useLoader(TextureLoader, "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

//   const arcs = useMemo(() => {
//     const list: THREE.Vector3[][] = [];
//     for (let i = 0; i < 20; i++) {
//       const a = new THREE.Vector3().setFromSphericalCoords(
//         2.4,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI * 2
//       );
//       const b = new THREE.Vector3().setFromSphericalCoords(
//         2.4,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI * 2
//       );
//       const mid = a.clone().add(b).multiplyScalar(0.5).setLength(3.6);
//       const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
//       list.push(curve.getPoints(50));
//     }
//     return list;
//   }, []);

//   useFrame((state, delta) => {
//     if (earthRef.current) {
//       earthRef.current.rotation.y += delta * 0.08;
//       const mx = (state.pointer.x || 0) * 0.2;
//       const my = (state.pointer.y || 0) * 0.1;
//       earthRef.current.rotation.x += (my - earthRef.current.rotation.x) * 0.02;
//       earthRef.current.rotation.z += (mx * 0.1 - earthRef.current.rotation.z) * 0.02;
//     }
//   });

//   return (
//     <group>
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshStandardMaterial
//           map={texture}
//           roughness={0.4}
//           metalness={0.1}
//           emissive={new THREE.Color(0x113355)}
//           emissiveIntensity={0.05}
//         />
//       </mesh>
//       <mesh scale={1.01}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshBasicMaterial color="#4a8aff" transparent opacity={0.06} side={THREE.BackSide} />
//       </mesh>
//       {arcs.map((pts, i) => {
//         const geom = new THREE.BufferGeometry().setFromPoints(pts);
//         return (
//           <line key={i}>
//             <primitive object={geom} attach="geometry" />
//             <lineBasicMaterial
//               color={i % 2 === 0 ? "#0F4CFF" : "#00E5FF"}
//               transparent
//               opacity={0.35}
//               linewidth={1}
//             />
//           </line>
//         );
//       })}
//     </group>
//   );
// }

// export function GlobeSection() {
//   return (
//     <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left column – content (white background) */}
//         <div>
//           <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//             [ Global Impact ]
//           </p>
//           <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
//             Intelligence,
//             <br />
//             <span className="text-blue-600">distributed worldwide.</span>
//           </h2>
//           <p className="mt-5 text-gray-600 text-lg max-w-lg">
//             Yetrix orchestrates teams, infrastructure, and AI capability across continents — delivering
//             outcomes wherever your business operates.
//           </p>
//           <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
//             {[
//               { v: "18+", l: "Markets" },
//               { v: "6", l: "Time Zones" },
//               { v: "∞", l: "Throughput" },
//             ].map((s) => (
//               <div
//                 key={s.l}
//                 className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl p-4 text-center shadow-sm"
//               >
//                 <div className="text-2xl font-display font-semibold text-blue-600">{s.v}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right column – globe container with dark background */}
//         <div className="relative h-[460px] md:h-[560px] bg-[#0a0e1a] rounded-3xl overflow-hidden shadow-xl border border-white/10">
//           <Canvas
//             camera={{ position: [0, 0, 6], fov: 50 }}
//             dpr={[1, 2]}
//             style={{ background: "transparent" }}
//           >
//             <ambientLight intensity={0.8} />
//             <pointLight position={[5, 5, 5]} color="#0F4CFF" intensity={1.2} />
//             <pointLight position={[-5, -3, -2]} color="#00E5FF" intensity={0.8} />
//             <EarthWithArcs />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

function EarthScene() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const texture = useLoader(TextureLoader, "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotate the whole group (Earth + rings together)
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      const mx = (state.pointer.x || 0) * 0.2;
      const my = (state.pointer.y || 0) * 0.1;
      groupRef.current.rotation.x += (my - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z += (mx * 0.1 - groupRef.current.rotation.z) * 0.02;
    }

    // Independent ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.02;
      // Pulsing glow for ring 1
      ring1Ref.current.material.emissiveIntensity = 0.6 + Math.sin(time * 1.2) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.03;
      ring2Ref.current.material.emissiveIntensity = 0.5 + Math.sin(time * 1.5 + 1.0) * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.04;
      ring3Ref.current.material.emissiveIntensity = 0.4 + Math.sin(time * 1.8 + 2.0) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Earth sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.4}
          metalness={0.1}
          emissive={new THREE.Color(0x113355)}
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={1.01}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#4a8aff" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      {/* Ring 1 – Cyan, equatorial, close to surface */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.15, 0.008, 16, 100]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Ring 2 – Purple, tilted 60° */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshStandardMaterial
          color="#6D5DFB"
          emissive="#6D5DFB"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Ring 3 – Blue, tilted -45° */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0.5, 0.3]}>
        <torusGeometry args={[2.25, 0.008, 16, 100]} />
        <meshStandardMaterial
          color="#0F4CFF"
          emissive="#0F4CFF"
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

export function GlobeSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column – content */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
            [ Global Impact ]
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Intelligence,
            <br />
            <span className="text-blue-600">distributed worldwide.</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg max-w-lg">
            Yetrix orchestrates teams, infrastructure, and AI capability across continents — delivering
            outcomes wherever your business operates.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
            {[
              { v: "18+", l: "Markets" },
              { v: "6", l: "Time Zones" },
              { v: "∞", l: "Throughput" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-display font-semibold text-blue-600">{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column – dark globe container with 3 rings */}
        <div className="relative h-[460px] md:h-[560px] bg-[#0a0e1a] rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} color="#0F4CFF" intensity={1.2} />
            <pointLight position={[-5, -3, -2]} color="#00E5FF" intensity={0.8} />
            <EarthScene />
          </Canvas>
        </div>
      </div>
    </section>
  );
}