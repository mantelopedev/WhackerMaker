import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PreviewCanvas: React.FC<{ modelUrl: string | null }> = ({ modelUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current || !modelUrl) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const light = new THREE.AmbientLight(0xffffff); // Soft white light
        scene.add(light);

        const loader = new THREE.ObjectLoader();
        loader.load(modelUrl, (object) => {
            scene.add(object);
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
        };
    }, [modelUrl]);

    return <canvas ref={canvasRef} />;
};

export default PreviewCanvas;