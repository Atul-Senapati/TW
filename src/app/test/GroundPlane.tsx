// ThreeGround.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, Plane } from "@react-three/drei";

function TexturedPlane({ src }) {
  const texture = useTexture(src);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
  <planeGeometry args={[20, 20]} />
  <meshStandardMaterial map={texture} />
</mesh>

  );
}

export default function ThreeGround({ src, cameraPosition = [0, 6, 8] }) {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden grayscale-75">
      <Canvas shadows camera={{ position: cameraPosition, fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          intensity={0.8}
          position={[5, 10, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <TexturedPlane src={src} />
        </Suspense>
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}
