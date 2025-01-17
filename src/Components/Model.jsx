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
        child.receiveShadow = true;
        child.castShadow = true;
        // Apply the MeshToonMaterial
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#a8b8d8"), // default to a light skin tone (pinkish)
          // gradientMap: gradientTexture,
          // Flat shading to enhance the toon effect
        });
        if (
          child.name == "Edificio300" ||
          child.name == "LaboratorioIndustrial" ||
          child.name == "ComiteIndustrial" ||
          child.name == "Cafeteria" ||
          child.name == "Papeleria" ||
          child.name == "Edificio100" ||
          child.name == "Edificio200" ||
          child.name == "ComiteIndustrial" ||
          child.name == "pingpong" ||
          child.name == "ComiteIndustrial" ||
          child.name == "DireccionAdmon" ||
          child.name == "Edificio91L" ||
          child.name == "CoordinacionSistemas" ||
          child.name == "LabsisD" ||
          child.name == "Edificio500" ||
          child.name == "Audiovisual1" ||
          child.name == "Calafornix" ||
          child.name == "Biblioteca" ||
          child.name == "LaboratorioMecatronica" ||
          child.name == "LaboratorioManufactura" ||
          child.name == "Edificio400" ||
          child.name == "LaboratorioA" ||
          child.name == "LaboratorioQ1" ||
          child.name == "LaboratorioQ2" ||
          child.name == "Edificio600" ||
          child.name == "Helicoptero" 
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#4b6cb7")
          });
        }
        if ( child.name == "PERÍMETRO_curve_" 
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("black")
          });
        }
        if ( child.name == "Palmeras" 
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("green")
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
