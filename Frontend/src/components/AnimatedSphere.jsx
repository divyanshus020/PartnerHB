import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AnimatedSphere = () => {
    const mesh = useRef(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = t * 0.2;
            mesh.current.rotation.x = t * 0.1;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5} ref={mesh}>
            <MeshDistortMaterial
                color="#818cf8"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.4}
            />
        </Sphere>
    );
};
