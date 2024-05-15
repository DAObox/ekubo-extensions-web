"use client";

import { Lines } from "./Lines";
import { useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { Text } from "../Text";
import { Button } from "@/app/components/Button";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Pixelation } from "@react-three/postprocessing";
import {
  Html,
  Cylinder,
  Stars,
  useDepthBuffer,
  Text3D,
  Clouds,
  Cloud,
} from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import * as THREE from "three";

export default function Hero() {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });
  const { decreasedPadding } = useMenuStore();

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest >= 1 && !decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: true });
    }

    if (latest < 1 && decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: false });
    }
  });

  return (
    <>
      {/* <div
        className="relative flex h-[50vh] items-start justify-center px-8 sm:h-[130vh] sm:px-0"
        ref={wrapper}
      >
        <div className=" sticky top-48 flex h-screen w-full max-w-[1400px] flex-col items-center justify-between gap-20 sm:top-0 sm:flex-row">
          <div className="flex flex-col items-start gap-10">
            <Text textStyle="headline1" className="text-text-white">
              Let&#8217;s build <br /> provable worlds.
            </Text>
            <p>Build worlds and games.</p>
            <Button>Ohayo</Button>
          </div>

          <Lines scrollProgress={scrollYProgress} />
        </div>
      </div> */}
      <div className="z-1   flex  h-[100vh] w-screen justify-end sm:right-0 sm:top-0 sm:h-[130vh]">
        <div className="w-full ">
          <Canvas className="">
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <SpinningMesh />
          </Canvas>
        </div>
      </div>
    </>
  );
}

extend({ EffectComposer, Bloom });
const gradientShader = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    void main() {
      vec3 lightPurple = vec3(0.135, 0.18, 0.89); // RGB for light purple
      vec3 softPink = vec3(0.5, 0.10, 0.16); // RGB for soft pink
      gl_FragColor = vec4(mix(lightPurple, softPink, vUv.y), 1.0);
    }
  `,
  uniforms: {},
};
function SpinningMesh() {
  const ref = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const targetScale = useRef(1.0); // Target scale
  const currentScale = useRef(1.0); // Current scale

  const depthBuffer = useDepthBuffer({ frames: 2 });
  useFrame(() => {
    if (ref.current) {
      // Gradually adjust currentScale towards targetScale
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.1;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.scale.set(
        currentScale.current,
        currentScale.current,
        currentScale.current,
      );
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x += 0.001;
      wireframeRef.current.rotation.y += 0.0045;
      wireframeRef.current.scale.set(
        currentScale.current,
        currentScale.current,
        currentScale.current,
      );
    }
  });
  const onHover = (event: any, hovered: any) => {
    targetScale.current = hovered ? 1.05 : 1.0; // Set target scale
  };

  const cloud = useMemo(() => {
    return (
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          segments={15}
          bounds={[10, 2, 2]}
          volume={2}
          color="orange"
          opacity={0.4}
          concentrate="inside"
          fade={100}
          scale={1}
          speed={0.1}
          position={[0, 1, 0]}
        />
        <Cloud
          seed={1}
          scale={1}
          volume={5}
          color="hotpink"
          concentrate="inside"
          fade={50}
          speed={1}
          opacity={0.5}
          position={[0, 1, 0]}
        />
        <Cloud
          seed={1}
          scale={1}
          volume={3}
          concentrate="inside"
          color="yellowgreen"
          fade={100}
          speed={0.5}
          opacity={0.2}
          position={[0, 1, 0]}
        />
      </Clouds>
    );
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <mesh
        ref={ref}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <shaderMaterial args={[gradientShader]} depthWrite={true} />
      </mesh>
      {cloud}
      <lineSegments ref={wireframeRef}>
        <wireframeGeometry args={[new THREE.SphereGeometry(2.03, 100, 50)]} />
        <shaderMaterial args={[gradientShader]} depthWrite={true} />
      </lineSegments>
      <TextWithShader
        text="Architect"
        position={[-1.5, 0, 0]}
        depthBuffer={depthBuffer}
      />{" "}
      <TextWithShader
        text="Verifiable "
        position={[-1.5, -0.5, 0]}
        depthBuffer={depthBuffer}
      />{" "}
      <TextWithShader
        text="Worlds "
        position={[-1.5, -1, 0]}
        depthBuffer={depthBuffer}
      />{" "}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.2}
          height={1}
          intensity={0.01}
        />
      </EffectComposer>
    </mesh>
  );
}

extend({ TextGeometry });

function TextWithShader({ text, position, depthBuffer }: any) {
  const textOptions = useMemo(
    () => ({
      size: 0.4,
      height: 0.05,
    }),
    [],
  );

  const textShader = useMemo(
    () => ({
      vertexShader: `
      varying vec2 vUv;
      varying vec4 vPosition;
      void main() {
        vUv = uv;
        vPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vPosition;
      }
    `,
      fragmentShader: `
      varying vec2 vUv;
      varying vec4 vPosition;
      uniform sampler2D globeDepthTexture;
      uniform float cameraNear;
      uniform float cameraFar;

      float readDepth(sampler2D depthSampler, vec2 coord) {
        float fragCoordZ = texture2D(depthSampler, coord).x;
        float z = fragCoordZ * 2.0 - 1.0;
        return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
      }

      void main() {
        float globeDepth = readDepth(globeDepthTexture, vUv);
        float textDepth = vPosition.z / vPosition.w;
        vec3 textColor = textDepth < globeDepth ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0); // White if in front, Black if behind
        gl_FragColor = vec4(textColor, 1.0);
      }
    `,
      uniforms: {
        globeDepthTexture: { value: depthBuffer },
        cameraNear: { value: 10 }, // Adjust based on your camera settings
        cameraFar: { value: 10 }, // Adjust based on your camera settings
      },
    }),
    [depthBuffer],
  );

  return (
    <Text3D
      position={position}
      lineHeight={0.5}
      // letterSpacing={0.025}
      font={"./Agrandir-Heavy_Regular.json"}
      {...textOptions}
      renderOrder={1} // Ensure text is rendered after the globe
    >
      {text}
      <shaderMaterial
        args={[textShader]}
        depthTest={false} // Disable depth testing for the text material
      />
    </Text3D>
  );
}

export function GlobeLines() {
  const GLOBE_RADIUS = 1.501; // Define the radius of the globe
  const GRID_COLOR = "purple"; // Define the grid color
  const LINE_THICKNESS = 0.01;
  const HAG = 0.01; // Slight distance above globe that longitude/latitude lines are drawn.
  const PI = Math.PI;
  const cos = Math.cos;
  const sin = Math.sin;

  const longitudeLines = useMemo(() => {
    const lines = [];
    for (let n = 0; n < 24; ++n) {
      const rotationY = (n * PI) / 12;
      lines.push(
        <Cylinder
          key={`longitude-${n}`}
          args={[
            GLOBE_RADIUS + HAG,
            GLOBE_RADIUS + HAG,
            LINE_THICKNESS,
            50,
            1,
            true,
          ]}
          position={[0, -LINE_THICKNESS / 2, 0]}
          rotation={[PI / 2, rotationY, 0]}
          material={new THREE.MeshBasicMaterial({ color: GRID_COLOR })}
        />,
      );
    }
    return lines;
  }, []);

  const latitudeLines = useMemo(() => {
    const lines = [];
    for (let n = 1; n < 12; ++n) {
      const lat = ((n - 6) * PI) / 12;
      const r = GLOBE_RADIUS * cos(lat);
      const y = GLOBE_RADIUS * sin(lat);
      const r1 = r - (LINE_THICKNESS * sin(lat)) / 2;
      const r2 = r + (LINE_THICKNESS * sin(lat)) / 2;
      lines.push(
        <Cylinder
          key={`latitude-${n}`}
          args={[r1 + HAG, r2 + HAG, cos(lat) * LINE_THICKNESS, 50, 8, true]}
          position={[0, (-cos(lat) * LINE_THICKNESS) / 2 + y, 0]}
          material={new THREE.MeshBasicMaterial({ color: GRID_COLOR })}
        />,
      );
    }
    return lines;
  }, []);

  return (
    <>
      {longitudeLines}
      {latitudeLines}
    </>
  );
}
