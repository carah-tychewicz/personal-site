import React from 'react';
import { Canvas } from '@react-three/fiber';

const Box = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="royalblue" position={[0, 0, 5]} />
        <mesh>
          <octahedronGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Box;
