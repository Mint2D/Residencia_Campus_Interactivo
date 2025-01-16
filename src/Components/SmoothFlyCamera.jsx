import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";

export default function SmoothFlyCamera() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    // Optional: Move the camera to a starting position
    camera.position.set(0, 5, 3);
    camera.rotation.set(0, 0, 0);
    controlsRef.current.update();
  }, [camera]);

  return (
    <MapControls
      ref={controlsRef}
      enableZoom={false}
      enableDamping
      enableRotate={false}
    />
  );
}
