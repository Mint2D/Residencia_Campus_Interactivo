import { Center, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { ThreeMFLoader } from "three/examples/jsm/Addons.js";

export default function Model({ path, size, position, rotationY, rotationX}) {
  const model = useGLTF(path);
  return (
    <>
      <primitive
        object={model.scene}
        scale={size ?? 1}
        position={position}
        rotation-y={rotationY}
        rotation-x={rotationX}
      ></primitive>
    </>
  );
}
