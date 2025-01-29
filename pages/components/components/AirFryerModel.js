import { useGLTF } from '@react-three/drei'

export default function AirFryerModel() {
  const { nodes, materials } = useGLTF('/models/airfryer.glb')
  
  return (
    <mesh
      geometry={nodes.airfryer.geometry}
      material={materials.metal}
      position={[0, -1, 0]}
      scale={[0.5, 0.5, 0.5]}
    >
      <meshStandardMaterial 
        color="#f8981d" 
        metalness={0.8} 
        roughness={0.3} 
      />
    </mesh>
  )
}
