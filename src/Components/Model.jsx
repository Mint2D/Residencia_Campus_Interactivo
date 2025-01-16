import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Model({ path, size }) {
  
  const model = useGLTF(path);

  return (
    <>
      <primitive object={model.scene} scale={size ?? 1} />
    </>
  );
}
