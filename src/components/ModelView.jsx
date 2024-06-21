import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

export default function ModelView({ index, groupRef, gsapType, controRef, setRotationState, size, item }) {
  return (
    <View index={index} id={gsapType} className={`border-2 border-red-500 w-full h-full ${index === 2}?'right-[-100%]:''`}>
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())} />
      <group ref={groupRef} name={`${index===1}?'small':'large`} position={[0,0,0]}>
        <Suspense fallback={<Loader/>}>
          <IPhone
          scale={index===1?[15,15,15]:[17,17,17]}
          item={item}
          size={size} />
        </Suspense>
      </group>
    </View>
  );
}
