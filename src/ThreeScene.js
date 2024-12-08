import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model() {
  const { scene } = useGLTF('avatar.glb');
  return <primitive object={scene} />;
}



function ThreeScene() {
  const [isInteracted, setIsInteracted] = useState(false);

  const handleTouched = () => {
    setIsInteracted(true);
  }

  function CameraController() {
    const { camera } = useThree();
    const ref = useRef(0);
  

  
    useFrame(() => {
      if (!isInteracted) {
        ref.current += 0.004; // Adjust the speed of rotation here
        camera.position.x = -1.1 + Math.sin(ref.current) * 2;
        // camera.position.z = Math.cos(ref.current) * 2;
        // camera.lookAt(0, 1.6, 0);
      }
    });
  
    return null;
    
    
  
  }
  return (
    <Canvas camera={{ position: [-1.1, 1.3, 2], fov: 15 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls target={[0, 1.6, 0]} onStart={handleTouched}/>
      <CameraController />
    </Canvas>
  );
}

export default ThreeScene;