// import React from "react";

// const Embed = () => {
// 	return (
// 		<div>
// 			<div class="sketchfab-embed-wrapper">
// 				<iframe
// 					title="Rocket"
// 					frameborder="0"
// 					allowfullscreen
// 					mozallowfullscreen="true"
// 					webkitallowfullscreen="true"
// 					allow="autoplay; fullscreen; xr-spatial-tracking"
// 					xr-spatial-tracking
// 					execution-while-out-of-viewport
// 					execution-while-not-rendered
// 					web-share
// 					width="2000"
// 					height="1000"
// 					src="https://sketchfab.com/models/b17a0f9f805c4fa7b978829006bbb57f/embed?autostart=1"></iframe>
// 			</div>
// 		</div>
// 	);
// };

// export default Embed;

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Embed = () => {
	const modelRef = useRef();

	const loadModel = () => {
		const loader = new GLTFLoader();

		try {
			loader.load("/home/skandan/Downloads/rocket/scene.gltf", (gltf) => {
				modelRef.current.add(gltf.scene);
			});
		} catch (error) {
			console.error("Error loading glTF model:", error);
		}
	};

	useEffect(() => {
		loadModel();
	}, []);

	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<group ref={modelRef} />
		</Canvas>
	);
};

export default Embed;
