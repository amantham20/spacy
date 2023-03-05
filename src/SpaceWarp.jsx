import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const SpaceWarp = () => {
  const canvasRef = useRef();
  const [speed, setSpeed] = useState(0.5);

  useEffect(() => {
    // create scene
    const scene = new THREE.Scene();

    // create camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    // create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // create mesh
    let starGeo = new THREE.BufferGeometry();
    const points = [];
    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.accleleration = 0.02;
      points.push(star.x, star.y, star.z);
    }

    let sprite = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });
    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    let stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // animate scene
    const animate = () => {
      starGeo.attributes.position.needsUpdate = true;
      starGeo.attributes.position.array.forEach((pos, index) => {
        if (index % 3 === 1) {
          // y-coordinate
          starGeo.attributes.position.array[index] -= speed;

          if (pos < -200) {
            starGeo.attributes.position.array[index] = 200;
          }
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // make the div full screen
  return (
        <div ref={canvasRef} className="bg-black h-screen flex flex-col items-center justify-center absolute z-0"> <h1>Hey there</h1></div>
    );
        
};

export default SpaceWarp;
