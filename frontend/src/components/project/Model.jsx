import React, { useRef, useState, useImperativeHandle, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import colaModel from "../../assets/models/source/coco-cola.glb";

const Model = forwardRef((props, forwardedRef) => {
  const ref = useRef();
  const { scene } = useGLTF(colaModel);

  const [boostUntil, setBoostUntil] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Expose spin boost trigger to parent (optional)
  useImperativeHandle(forwardedRef, () => ({
    triggerSpinBoost: () => {
      setBoostUntil(performance.now() + 5000);
    }
  }));

  // AUTO + BOOST SPIN
  useFrame((state) => {
    const now = performance.now();
    const t = state.clock.getElapsedTime();

    if (boostUntil > now) {
      ref.current.rotation.y += 0.15; // very fast spin for 5 seconds
    } else {
      ref.current.rotation.y += 0.006; // normal slow spin
    }

    // floating animation
    ref.current.position.y = Math.sin(t * 1.2) * 0.08;
  });

  // APPLY MATERIALS
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.9;
      child.material.roughness = 0.1;
      child.material.clearcoat = 1;
      child.material.clearcoatRoughness = 0;
      child.material.envMapIntensity = 2;
    }
  });

  // 🎯 DRAG LOGIC ON MODEL ONLY
  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    if (isDragging) {
      setBoostUntil(performance.now() + 5000); // spin boost 5 sec
    }
    setIsDragging(false);
  };

  // 🎯 CLICK TO SPIN
  const handleClick = () => {
    setBoostUntil(performance.now() + 5000); // fast spin for 5 seconds on click
  };

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.22}              // optimized scale for full visibility
      position={[0, 0, 0]}     // perfectly centered
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleClick}    // click anywhere on model to spin fast
    />
  );
});

Model.displayName = "Model";
export default Model;