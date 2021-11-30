import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      camera.position.set( 0, 0, 40 );
      controls.update();
      controls.minDistance = 0;
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
        <ambientLight intensity={1} />
          <mesh>
            <cylinderGeometry args={[15, 15, 10, 64]} />
            <meshStandardMaterial color="lightpink" />
          </mesh>
          <CameraController />
      </Canvas>
    </div>
  );
};

export default Box;
