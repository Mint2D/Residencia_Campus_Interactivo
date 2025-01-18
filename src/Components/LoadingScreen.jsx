import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html, Center } from "@react-three/drei";
export default function LoadingScreen() {
  const modelRef = useRef();
  const { scene } = useGLTF("/ITT2.glb"); // Path to your model

  // Rotate and float the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotation
      modelRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.5; // Floating effect
    }
  });

  return (
    <>
      <Center>
        <primitive ref={modelRef} object={scene} scale={3} />
      </Center>
      <Html center>
        <div
          style={{
            fontSize: "24px",
            color: "white",
            position: "absolute",
            top: "100px",
          }}
        >
          Loading...
        </div>
      </Html>
    </>
  );
}
