import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ position, color, speed, distort }) => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = Math.cos(t / 4) / 2;
            mesh.current.rotation.y = Math.sin(t / 4) / 2;
            mesh.current.rotation.z = Math.sin(t / 4) / 2;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2} position={position}>
            <Sphere ref={mesh} args={[0.4, 64, 64]}>
                <MeshDistortMaterial
                    color={color}
                    speed={speed}
                    distort={distort}
                    radius={0.4}
                />
            </Sphere>
        </Float>
    );
};

export const ThreeDBackground = () => {
    const shapes = useMemo(() => [
        { position: [-4, 2, -2], color: "#818cf8", speed: 2, distort: 0.3 },
        { position: [4, -2, -3], color: "#c084fc", speed: 1.5, distort: 0.5 },
        { position: [-3, -3, -1], color: "#fb7185", speed: 2.5, distort: 0.2 },
        { position: [3, 3, -2], color: "#2dd4bf", speed: 1.8, distort: 0.4 },
        { position: [0, 0, -5], color: "#6366f1", speed: 1.2, distort: 0.6 },
    ], []);

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
            {shapes.map((props, i) => (
                <Shape key={i} {...props} />
            ))}
        </>
    );
};
