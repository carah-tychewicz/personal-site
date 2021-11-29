import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
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
    <div id="canvas-container">
      <Canvas>  
        <CameraController />
        <ambientLight intensity={0.1} />
        <directionalLight color="royalblue" position={[0, 0, 5]} />
          <mesh>
            <cylinderGeometry />
            <meshStandardMaterial />
          </mesh>
      </Canvas>
    </div>
  );
};

export default Box;
