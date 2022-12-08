import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float, Text, Text3D } from '@react-three/drei';
function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>

      <div className='textBox'>
        <Canvas>

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
}

const Box = (props) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x += 0.02));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[4, 0.11, 3]} />
      <meshStandardMaterial color={hovered ? 'orange' : 'orange'} />
      <Text
        position={[0, 0, 0]}
        font="../src/font/nn.ttf"
        fontSize={1}
        color={'#FFF'}
      >
        ここ最近試験的に何個かアプリを作って分かったのはTypeScriptの理解度が低すぎる😂

      </Text>
      <Text
        position={[0, -1, 0]}
        font="../src/font/nn.ttf"
        fontSize={1}
        color={'#FFF'}
      >
        ノリで行けるでしょ！と思ってた自分が恥ずかしい..
      </Text>
    </mesh>
  );
};





export default App
