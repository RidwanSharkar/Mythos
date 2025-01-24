import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PlasmaEffectProps {
  position: { x: number; y: number } | null;
}

export default function PlasmaEffect({ position }: PlasmaEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current || !position) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200); // Increased from 140
    
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 2000; // Increased from 1000
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 0.8; // Increased from 0.5
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = 0;

      // Brighter gold color
      colors[i * 3] = 1;     // R
      colors[i * 3 + 1] = 0.84;  // G (increased for more gold tint)
      colors[i * 3 + 2] = 0;  // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05, // Increased from 0.03
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 1;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const angle = Math.atan2(positions[idx + 1], positions[idx]);
        const newAngle = angle + 0.01; // Slower rotation
        const radius = 0.8 + Math.sin(Date.now() * 0.002 + i * 0.1) * 0.15; // Increased wave effect
        
        positions[idx] = Math.cos(newAngle) * radius;
        positions[idx + 1] = Math.sin(newAngle) * radius;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Store refs
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [position]);

  if (!position) return null;

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: '200px',
        height: '200px',
        zIndex: 1000,
      }}
    />
  );
} 