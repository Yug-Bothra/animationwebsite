import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../components/project/Model";

import Card from "../components/project/card";
import { products } from "../components/project/datacard";

function Project() {
  const modelRef = useRef();

  const handleDragEnd = () => {
    if (modelRef.current) {
      modelRef.current.triggerSpinBoost();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col">

      {/* 3D CAN SECTION */}
      <div className="h-[70vh] w-full">
        <Canvas camera={{ position: [0, -1.3, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 2]} intensity={2} />
          <directionalLight position={[-3, 2, -2]} intensity={1} />

          <Model ref={modelRef} />

          <Environment preset="sunset" />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={4}
            maxDistance={12}
            onEnd={handleDragEnd}
          />
        </Canvas>
      </div>

      {/* PAGE TEXT */}
      <div className="w-full text-white text-center pt-6 px-4">
        <h1 className="text-3xl font-bold">About the Coca-Cola Bottle</h1>
        <p className="mt-2 opacity-70">
          Scroll down to explore more brand details, story, design and history.
        </p>
      </div>

      {/* PRODUCT CARDS SECTION */}
      <div className="w-full flex flex-wrap justify-center gap-8 py-16">
        {products.map((item, index) => (
          <Card key={index} name={item.name} image={item.image} />
        ))}
      </div>

    </div>
  );
}

export default Project;
