import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      camera.position.set( 0, 0, 20 );
      controls.update();
      controls.minDistance = 20;
      controls.maxDistance = 100;
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
          <mesh>
            <cylinderGeometry args={[5, 5, 10, 64]} />
            <meshStandardMaterial />
          </mesh>
          <CameraController />
      </Canvas>
    </div>
  );
};

export default Box;
