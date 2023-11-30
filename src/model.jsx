import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Model = () => {
	const modelRef = useRef();

	const loader = new GLTFLoader();
	loader.load("/home/skandan/Downloads/rocket/scene.gltf", (gltf) => {
		modelRef.current.add(gltf.scene);
	});

	return <group ref={modelRef} />;
};
