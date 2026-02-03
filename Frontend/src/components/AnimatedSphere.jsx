import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AnimatedSphere = ({ color = "#818cf8", scale = 2.5, distort = 0.4, speed = 2 }) => {
    const mesh = useRef(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = t * 0.2;
            mesh.current.rotation.x = t * 0.1;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={scale} ref={mesh}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={distort}
                speed={speed}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};
