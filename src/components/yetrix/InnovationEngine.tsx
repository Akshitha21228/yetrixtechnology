// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { useMemo, useRef, useState } from "react";
// import * as THREE from "three";

// const NODES = [
//   { label: "AI", desc: "Models, agents, intelligence", color: "#00E5FF" },
//   { label: "Software", desc: "Production-grade systems", color: "#6D5DFB" },
//   { label: "Cloud", desc: "Resilient global infrastructure", color: "#00FFB3" },
//   { label: "Automation", desc: "Process & workflow systems", color: "#00E5FF" },
//   { label: "Marketing", desc: "Growth & lead engines", color: "#6D5DFB" },
//   { label: "Data", desc: "Annotation, BI, analytics", color: "#00FFB3" },
// ];

// function Core() {
//   const ref = useRef<THREE.Mesh>(null);
//   useFrame((s) => {
//     if (!ref.current) return;
//     ref.current.rotation.y = s.clock.elapsedTime * 0.4;
//     ref.current.rotation.x = s.clock.elapsedTime * 0.2;
//   });
//   return (
//     <mesh ref={ref}>
//       <icosahedronGeometry args={[0.9, 1]} />
//       <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1.2} wireframe />
//     </mesh>
//   );
// }

// function Node({
//   position,
//   color,
//   label,
//   desc,
//   onHover,
// }: {
//   position: [number, number, number];
//   color: string;
//   label: string;
//   desc: string;
//   onHover: (info: { label: string; desc: string } | null) => void;
// }) {
//   const ref = useRef<THREE.Mesh>(null);
//   const [hover, setHover] = useState(false);
//   useFrame((s) => {
//     if (!ref.current) return;
//     const t = s.clock.elapsedTime;
//     ref.current.scale.setScalar(hover ? 1.4 : 1 + Math.sin(t * 2 + position[0]) * 0.05);
//   });
//   return (
//     <group position={position}>
//       <mesh
//         ref={ref}
//         onPointerOver={(e) => {
//           e.stopPropagation();
//           setHover(true);
//           onHover({ label, desc });
//           document.body.style.cursor = "pointer";
//         }}
//         onPointerOut={() => {
//           setHover(false);
//           onHover(null);
//           document.body.style.cursor = "";
//         }}
//       >
//         <sphereGeometry args={[0.28, 32, 32]} />
//         <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hover ? 2 : 1.1} />
//       </mesh>
//       <Html distanceFactor={8} center position={[0, 0.6, 0]}>
//         <div className="pointer-events-none select-none text-[11px] font-mono tracking-widest text-white/80">
//           {label.toUpperCase()}
//         </div>
//       </Html>
//     </group>
//   );
// }

// function Energy({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
//   const positions = useMemo(() => new Float32Array([...from, ...to]), [from, to]);
//   return (
//     <line>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
//       </bufferGeometry>
//       <lineBasicMaterial color="#6D5DFB" transparent opacity={0.5} />
//     </line>
//   );
// }

// function Scene({ onHover }: { onHover: (i: { label: string; desc: string } | null) => void }) {
//   const group = useRef<THREE.Group>(null);
//   useFrame((s, dt) => {
//     if (group.current) group.current.rotation.y += dt * 0.12;
//   });
//   const positions = useMemo<[number, number, number][]>(
//     () =>
//       NODES.map((_, i) => {
//         const angle = (i / NODES.length) * Math.PI * 2;
//         const r = 2.6;
//         return [Math.cos(angle) * r, Math.sin(angle * 1.2) * 0.6, Math.sin(angle) * r];
//       }),
//     [],
//   );
//   return (
//     <group ref={group}>
//       <Core />
//       {NODES.map((n, i) => (
//         <Node key={n.label} position={positions[i]} color={n.color} label={n.label} desc={n.desc} onHover={onHover} />
//       ))}
//       {positions.map((p, i) => (
//         <Energy key={i} from={[0, 0, 0]} to={p} />
//       ))}
//     </group>
//   );
// }

// export function InnovationEngine() {
//   const [info, setInfo] = useState<{ label: string; desc: string } | null>(null);
//   return (
//     <section id="engine" className="relative py-28 sm:py-36 overflow-hidden">
//       <div className="absolute inset-0 -z-10" style={{
//         background: "radial-gradient(ellipse 60% 60% at 50% 50%, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 70%)"
//       }} />
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="max-w-3xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ The Yetrix Innovation Engine ]</p>
//           <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//             Six disciplines.
//             <br />
//             <span className="text-gradient">One intelligent core.</span>
//           </h2>
//           <p className="mt-5 text-muted-foreground text-lg">
//             Rotate the engine. Each node is a practice powering modern enterprises — connected by a
//             unified delivery model.
//           </p>
//         </div>

//         <div className="mt-12 relative glass rounded-3xl overflow-hidden h-[520px] md:h-[620px]">
//           <Canvas camera={{ position: [0, 1.5, 7], fov: 55 }} dpr={[1, 2]}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[5, 5, 5]} intensity={1.4} color="#00E5FF" />
//             <pointLight position={[-5, -3, -2]} intensity={1.2} color="#6D5DFB" />
//             <Scene onHover={setInfo} />
//             <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
//           </Canvas>
//           <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-muted-foreground font-mono">
//             <span>DRAG TO ROTATE · HOVER NODES</span>
//             {info && (
//               <span className="glass-strong rounded-full px-3 py-1.5 text-foreground">
//                 <span className="text-[var(--cyan)] font-semibold">{info.label}</span>
//                 <span className="text-muted-foreground"> — {info.desc}</span>
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Database, Cloud, Megaphone, Workflow as WorkflowIcon } from "lucide-react";

const NODES = [
  { 
    label: "AI", 
    desc: "Models, agents, intelligence", 
    color: "#00E5FF",
    icon: Brain,
    details: "Custom assistants, automation, and decision systems tailored to your business."
  },
  { 
    label: "Software", 
    desc: "Production-grade systems", 
    color: "#6D5DFB",
    icon: Code2,
    details: "Web, mobile, and SaaS builds with clear architecture and delivery milestones."
  },
  { 
    label: "Cloud", 
    desc: "Resilient global infrastructure", 
    color: "#00FFB3",
    icon: Cloud,
    details: "Infrastructure, security, and support that keep the stack stable and observable."
  },
  { 
    label: "Automation", 
    desc: "Process & workflow systems", 
    color: "#00E5FF",
    icon: WorkflowIcon,
    details: "Process redesign, analytics, and workflow systems for teams that need to move faster."
  },
  { 
    label: "Marketing", 
    desc: "Growth & lead engines", 
    color: "#6D5DFB",
    icon: Megaphone,
    details: "Search, content, and automation systems that keep demand moving in the background."
  },
  { 
    label: "Data", 
    desc: "Annotation, BI, analytics", 
    color: "#00FFB3",
    icon: Database,
    details: "Clean, labeled, validated data that helps teams train better systems faster."
  },
];

export function InnovationEngine() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="engine" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
            [ The Yetrix Innovation Engine ]
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Six disciplines. <span className="text-blue-600">One intelligent core.</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg">
            Six integrated practices powering modern enterprises — connected by a unified delivery model.
          </p>
        </div>

        {/* Grid layout */}
        <div className="mt-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NODES.map((node, i) => {
              const Icon = node.icon;
              const isHovered = hoveredIndex === i;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer
                    ${isHovered ? 'scale-105 shadow-xl border-blue-400' : 'scale-100 shadow-sm border-gray-200'}
                    bg-white/80 backdrop-blur-sm border hover:border-blue-300`}
                  style={{
                    borderColor: isHovered ? node.color : undefined,
                    boxShadow: isHovered ? `0 0 30px ${node.color}33` : undefined,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${node.color}15, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered ? `${node.color}20` : '#f0f4ff',
                      }}
                    >
                      <Icon
                        className="w-7 h-7 transition-all duration-300"
                        style={{
                          color: isHovered ? node.color : '#0F4CFF',
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{node.label}</h3>
                    <p className="text-sm text-gray-500 mt-1">{node.desc}</p>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-gray-600 mt-3 pt-3 border-t border-gray-200">
                        {node.details}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs text-gray-400 font-mono tracking-wider">
            Hover each discipline to learn more
          </span>
        </div>
      </div>
    </section>
  );
}