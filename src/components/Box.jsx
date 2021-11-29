import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 20;
      controls.maxDistance = 50;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Box = () => {
  return (
    <div id="canvas-container" class="box-container">
      <Canvas>  
        <ambientLight intensity={0.1} />
        <directionalLight color="royalblue" position={[0, 0, 5]} />
        <CameraController />
          <mesh>
            <cylinderGeometry args={[5, 5, 10, 64]} />
            <meshStandardMaterial />
          </mesh>
      </Canvas>
    </div>
  );
};

export default Box;
