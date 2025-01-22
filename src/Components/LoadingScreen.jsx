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
        <primitive ref={modelRef} object={scene} scale={0.5} />
      </Center>
      <Html center>
        <div
          style={{
            fontSize: "128px",
            fontFamily: "JetBrains Mono",
            color: "Blue",
            position: "absolute",
            top: "40%",
          }}
        >
          Loading...
        </div>
      </Html>
    </>
  );
}
