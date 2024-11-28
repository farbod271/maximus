import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Scene = () => {
  const lightRef = useRef();
  const { scene } = useGLTF('untitled2.glb');
  // const scene = useThree((state) => state.scene);

  const camera = useThree((state) => state.camera);

  useEffect(() => {
    // Add CameraHelper
    const cameraHelper = new THREE.CameraHelper(camera);
    scene.add(cameraHelper);

    // Add PointLightHelper
    const pointLightHelper = new THREE.PointLightHelper(lightRef.current, 5);
    scene.add(pointLightHelper);

    return () => {
      scene.remove(cameraHelper);
      scene.remove(pointLightHelper);
    };
  }, [camera, scene]);

  useFrame(({ mouse, camera }) => {
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    lightRef.current.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight ref={lightRef} intensity={1} distance={150} position={[1, 20, 30]} />
      <primitive object={scene} scale={[10, 10, 10]} />
      <OrbitControls minDistance={2} maxDistance={10} target={[0, 0, -0.2]} />
    </>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [2 , 0, 40], fov: 75 }}>
      <ambientLight intensity={10} /> 
      <Scene />
    </Canvas>
  );
};

export default ThreeScene;