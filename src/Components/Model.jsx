import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
let pathPreload = "";

export default function Model({ path, size, position, rotationY, rotationX }) {
  const { scene } = useGLTF(path);
  const textureloader = new THREE.TextureLoader();
  const gradientTexture = textureloader.load("./assests/3.jpg");
  gradientTexture.minFilter = THREE.NearestFilter;
  gradientTexture.magFilter = THREE.NearestFilter;

  pathPreload = path;

  useEffect(() => {
    // Traverse through all meshes in the model and apply the toon shader
    scene.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true
        child.castShadow = true
        // Apply the MeshToonMaterial
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("blue"), // default to a light skin tone (pinkish)
          // gradientMap: gradientTexture,
          // Flat shading to enhance the toon effect
        });
        if(child.name == "Edificio300"){
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("grey"), // default to a light skin tone (pinkish)
            // gradientMap: gradientTexture,
            // Flat shading to enhance the toon effect
          });
        }
      }
    });
  }, [scene]);

  return (
    <>
      <primitive
        object={scene}
        scale={size ?? 1}
        position={position}
        rotation-y={rotationY}
        rotation-x={rotationX}
      ></primitive>
    </>
  );
}
useGLTF.preload(pathPreload);
