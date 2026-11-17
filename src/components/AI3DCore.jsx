import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useReducedMotion from "../hooks/useReducedMotion.js";

const GOLD = "#D4AF37";
const GOLD_BRIGHT = "#F5C542";
const SILVER = "#C0C0C0";
const WHITE = "#F5F5F5";

function Nodes({ count = 26, radius = 2.6, reduced }) {
  const groupRef = useRef();
  const positions = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pts.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      );
    }
    return pts;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (reduced || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 3 === 0 ? 0.055 : 0.035, 12, 12]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? GOLD_BRIGHT : SILVER}
            emissive={i % 4 === 0 ? GOLD : "#333333"}
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      ))}
      {positions.map((p, i) => {
        const next = positions[(i + 5) % positions.length];
        const points = [p, next];
        return <Line key={`l-${i}`} points={points} />;
      })}
    </group>
  );
}

function Line({ points }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={GOLD} transparent opacity={0.18} />
    </line>
  );
}

function Rings({ reduced }) {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((_, delta) => {
    if (reduced) return;
    if (ring1.current) ring1.current.rotation.z += delta * 0.08;
    if (ring2.current) ring2.current.rotation.x += delta * -0.06;
  });

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.9, 0.008, 8, 128]} />
        <meshBasicMaterial color={SILVER} transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[3.3, 0.006, 8, 128]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.28} />
      </mesh>
    </>
  );
}

function Core({ reduced }) {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    if (!reduced) meshRef.current.rotation.y += delta * 0.25;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = reduced ? 0 : Math.sin(t * 0.6) * 0.12;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.15, 1]} />
      <meshStandardMaterial
        color={"#111111"}
        emissive={GOLD}
        emissiveIntensity={0.18}
        metalness={0.9}
        roughness={0.15}
        wireframe
      />
    </mesh>
  );
}

function Particles({ reduced }) {
  const ref = useRef();
  const count = 140;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.6 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={WHITE} size={0.02} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene({ reduced, mouse }) {
  const groupRef = useRef();
  useFrame(() => {
    if (reduced || !groupRef.current) return;
    groupRef.current.rotation.y += (mouse.current.x * 0.25 - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x += (mouse.current.y * -0.15 - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.1} color={GOLD_BRIGHT} />
      <pointLight position={[-4, -3, -2]} intensity={0.5} color={SILVER} />
      <Core reduced={reduced} />
      <Nodes reduced={reduced} />
      <Rings reduced={reduced} />
      <Particles reduced={reduced} />
    </group>
  );
}

export default function AI3DCore() {
  const reduced = useReducedMotion();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.current.y = ((e.clientY - bounds.top) / bounds.height) * 2 - 1;
  };

  return (
    <div
      onMouseMove={handleMove}
      className="w-full h-[340px] md:h-[520px]"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
