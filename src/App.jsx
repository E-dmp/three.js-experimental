import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  </div>
  )
}

const Box = (props) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [sizeX, setSizeX] = useState()
  const [sizeY, setSizeY] = useState()
  const [sizeZ, setSizeZ] = useState()
  const [rotate, setRotate] = useState()

  const RandomSize = () => {
    let sizeX = Math.random()*2;
    let sizeY = Math.random()*2.1;
    let sizeZ = Math.random()*3.3;
    setSizeX(sizeX)
    setSizeY(sizeY)
    setSizeZ(sizeZ)
  }
 
setInterval(RandomSize, 6000);


  useFrame(() => (mesh.current.rotation.x += 1));
  useFrame(() => (mesh.current.rotation.y -= 2));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[sizeX, sizeY, sizeZ]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  );
};



export default App
