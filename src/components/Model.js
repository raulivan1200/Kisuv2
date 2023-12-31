"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { BallCollider, Physics, RigidBody ,InstancedRigidBodies} from "@react-three/rapier";
import * as THREE from "three";

THREE.ColorManagement.enabled = true;
const baubleMaterial = new THREE.MeshLambertMaterial({ color: "#FF7EA4", emissive: "#FF7EA4" });
const baubles = [...Array(20)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }));
const baubleGeometry = (nodes) => (
  <>
    <mesh scale={30} position={[0, 0, -1.8]} geometry={nodes.Curve003.geometry} material={baubleMaterial} />
    <mesh scale={30} position={[0, 0, -1.8]} geometry={nodes.Curve003_1.geometry} material={baubleMaterial} />
  </>
);
function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
  const { nodes } = useGLTF("/kisu-transformed.glb");
  const api = useRef(null);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(
        vec
          .copy(api.current.translation())
          .normalize()
          .multiply({ x: -30 * delta * scale, y: -50 * delta * scale, z: -30 * delta * scale }),
      );
    }
  });

  useEffect(() => {
    api.current = api.current ?? {};
  }, []);

  return (
    <instancedMesh>
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
      <BallCollider args={[scale]} />
      {baubleGeometry(nodes)}
    </RigidBody>
    </instancedMesh>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();

  useFrame(({ mouse, viewport }) => {
    vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2);
    ref.current?.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

export const Model = () => (
  <Canvas dpr={[.5,2]} frameloop="demand" style={{ height: "100vh", width: "100%", position: "absolute",zIndex:"99" }}  
   gl={{  stencil: false, depth: false, antialias: false }} 
  camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }} 
  onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
    <ambientLight intensity={1} />
    <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="blue"  shadow-mapSize={[100, 100]} />
    <directionalLight position={[0, 5, -4]} intensity={4} />
    <directionalLight position={[0, -15, -0]} intensity={4} color="green" />
    <Physics gravity={[0, 0, 0]}>
      <Pointer />
      <InstancedRigidBodies>
        {baubles.map((props, i) => (
          <Bauble key={i} {...props} />
        ))}
      </InstancedRigidBodies>
    </Physics>

  </Canvas>
);
