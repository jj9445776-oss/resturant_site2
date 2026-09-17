import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  onInteract?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0907, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.2, 5.5);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire interactive platter
    const platterGroup = new THREE.Group();
    scene.add(platterGroup);

    // 1. Royal Brass/Copper Handi & Platter Base
    const platterGeo = new THREE.CylinderGeometry(2.1, 1.7, 0.25, 48);
    const platterMat = new THREE.MeshStandardMaterial({
      color: 0xc88e36, // Warm antique Mughal brass/gold
      metalness: 0.85,
      roughness: 0.28,
    });
    const platterMesh = new THREE.Mesh(platterGeo, platterMat);
    platterMesh.position.y = -0.1;
    platterGroup.add(platterMesh);

    // Rim ring for royal embossed look
    const rimGeo = new THREE.TorusGeometry(2.1, 0.08, 16, 48);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xdfa64f,
      metalness: 0.9,
      roughness: 0.2,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 0.02;
    platterGroup.add(rimMesh);

    // Inner Charcoal Bed
    const bedGeo = new THREE.CylinderGeometry(1.9, 1.85, 0.1, 32);
    const bedMat = new THREE.MeshStandardMaterial({
      color: 0x181411,
      roughness: 0.95,
      metalness: 0.1,
    });
    const bedMesh = new THREE.Mesh(bedGeo, bedMat);
    bedMesh.position.y = 0.05;
    platterGroup.add(bedMesh);

    // 2. Glowing Coals / Charcoal Embers (Points)
    const emberCount = 55;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);

    for (let i = 0; i < emberCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.5;
      emberPositions[i * 3] = Math.cos(angle) * radius;
      emberPositions[i * 3 + 1] = 0.12 + Math.random() * 0.08;
      emberPositions[i * 3 + 2] = Math.sin(angle) * radius;

      // Glow orange to warm gold
      emberColors[i * 3] = 1.0; // R
      emberColors[i * 3 + 1] = 0.4 + Math.random() * 0.35; // G
      emberColors[i * 3 + 2] = 0.05; // B
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));

    const emberMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    platterGroup.add(embers);

    // 3. Central Royal Karahi / Sigri Skewers
    const centerBowlGeo = new THREE.CylinderGeometry(1.2, 0.8, 0.4, 32, 1, true);
    const centerBowlMat = new THREE.MeshStandardMaterial({
      color: 0x241d18, // Cast iron karahi
      metalness: 0.6,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
    const centerBowl = new THREE.Mesh(centerBowlGeo, centerBowlMat);
    centerBowl.position.y = 0.25;
    platterGroup.add(centerBowl);

    // Karahi Brass Handles
    const handleGeo = new THREE.TorusGeometry(0.22, 0.04, 12, 24);
    const handleLeft = new THREE.Mesh(handleGeo, rimMat);
    handleLeft.position.set(-1.25, 0.35, 0);
    handleLeft.rotation.y = Math.PI / 2;
    platterGroup.add(handleLeft);

    const handleRight = new THREE.Mesh(handleGeo, rimMat);
    handleRight.position.set(1.25, 0.35, 0);
    handleRight.rotation.y = Math.PI / 2;
    platterGroup.add(handleRight);

    // 4. Skewered Charcoal Kebabs / Grilled cuts
    const skewerGroup = new THREE.Group();
    for (let i = -1; i <= 1; i++) {
      // Skewer needle
      const needleGeo = new THREE.CylinderGeometry(0.015, 0.015, 2.6, 8);
      const needleMat = new THREE.MeshStandardMaterial({ color: 0xd0d0d0, metalness: 0.9, roughness: 0.2 });
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.rotation.z = Math.PI / 2;
      needle.position.set(0, 0.45, i * 0.45);
      skewerGroup.add(needle);

      // Kebab pieces
      for (let k = -3; k <= 3; k++) {
        if (k === 0 && i === 0) continue;
        const kebabGeo = new THREE.DodecahedronGeometry(0.12, 1);
        const kebabMat = new THREE.MeshStandardMaterial({
          color: 0x8a401c, // Roasted spiced meat
          roughness: 0.7,
          metalness: 0.1,
        });
        const kebabPiece = new THREE.Mesh(kebabGeo, kebabMat);
        kebabPiece.scale.set(1.4, 0.9, 0.9);
        kebabPiece.position.set(k * 0.28, 0.45, i * 0.45);
        kebabPiece.rotation.x = Math.random() * Math.PI;
        kebabPiece.rotation.y = Math.random() * Math.PI;
        skewerGroup.add(kebabPiece);
      }
    }
    platterGroup.add(skewerGroup);

    // 5. Floating Whole Fragrant Spices (Star Anise, Cloves, Cardamom)
    const spicesGroup = new THREE.Group();
    const spiceItems: THREE.Mesh[] = [];

    // Star anise / cardamom floating items
    for (let i = 0; i < 9; i++) {
      const isCardamom = i % 2 === 0;
      const geo = isCardamom
        ? new THREE.SphereGeometry(0.08, 8, 8)
        : new THREE.OctahedronGeometry(0.09, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: isCardamom ? 0x4a7c3b : 0xa55125, // Green cardamom / star anise brown
        roughness: 0.6,
        metalness: 0.15,
      });
      const spice = new THREE.Mesh(geo, mat);
      if (isCardamom) spice.scale.set(0.7, 1.3, 0.7);

      const angle = (i / 9) * Math.PI * 2;
      const dist = 2.4 + Math.random() * 0.5;
      spice.position.set(
        Math.cos(angle) * dist,
        0.5 + Math.sin(i) * 0.6,
        Math.sin(angle) * dist
      );
      spicesGroup.add(spice);
      spiceItems.push(spice);
    }
    scene.add(spicesGroup);

    // 6. Ambient Spark / Aroma Particles rising
    const sparkCount = 35;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkSpeeds: number[] = [];

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 2;
      sparkPositions[i * 3 + 1] = 0.2 + Math.random() * 2.2;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      sparkSpeeds.push(0.008 + Math.random() * 0.015);
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xffb74d,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.8);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xffd59e, 2.5);
    warmKeyLight.position.set(3, 4, 3);
    scene.add(warmKeyLight);

    const rimLight = new THREE.PointLight(0xff9900, 3, 8);
    rimLight.position.set(-2, 1.5, -1);
    scene.add(rimLight);

    const emberLight = new THREE.PointLight(0xff5500, 2, 4);
    emberLight.position.set(0, 0.4, 0);
    scene.add(emberLight);

    // Mouse Interaction / Gyro Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.25;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = mouseX * 0.6;
      targetRotationX = 0.25 - mouseY * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    setIsLoaded(true);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Soft constant rotation
        platterGroup.rotation.y += 0.005;
        spicesGroup.rotation.y -= 0.003;

        // Interactive tilt interpolation
        platterGroup.rotation.y += (targetRotationY - platterGroup.rotation.y) * 0.04;
        platterGroup.rotation.x += (targetRotationX - platterGroup.rotation.x) * 0.04;

        // Ember pulsation
        emberLight.intensity = 1.8 + Math.sin(elapsedTime * 4) * 0.6;

        // Floating spices bobbing
        spiceItems.forEach((spice, idx) => {
          spice.position.y += Math.sin(elapsedTime * 2 + idx) * 0.002;
          spice.rotation.x += 0.01;
          spice.rotation.z += 0.015;
        });

        // Sparks rising
        const positions = sparkGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < sparkCount; i++) {
          positions[i * 3 + 1] += sparkSpeeds[i];
          if (positions[i * 3 + 1] > 2.5) {
            positions[i * 3 + 1] = 0.2;
            positions[i * 3] = (Math.random() - 0.5) * 1.8;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
          }
        }
        sparkGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // WebGL Fallback
  if (!hasWebGL) {
    return (
      <div 
        id="hero-3d-fallback"
        className="relative w-full h-full flex items-center justify-center p-6"
      >
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-950/40 max-w-md w-full">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
            alt="Royal Charcoal Grills at Dastaan"
            className="w-full h-80 object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Sigri Charcoal Heritage
              </span>
              <h4 className="text-xl font-serif text-white font-bold mt-1">
                Royal Mutton Seekh & Handi
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="hero-3d-container"
      ref={containerRef} 
      onClick={onInteract}
      className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing flex items-center justify-center"
      aria-label="Interactive 3D Royal Karahi and Charcoal Platter"
    >
      {/* 3D Interactivity Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Interactive 3D Platter • Move cursor to inspect</span>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0907]/60">
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
};
