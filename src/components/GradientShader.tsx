// // ShaderBackground.jsx or .tsx

// import React from "react";
// import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// export default function ShaderBackground() {
//   return (
//     <ShaderGradientCanvas
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: "-1",
//       }}
//     >
//       <ShaderGradient
//         // customize using props:
//         type="plane" // 'plane' | 'sphere' | 'waterPlane'
//         animate="on" // animate can be 'on' or 'off'
//         uSpeed={0.4} // speed of gradient
//         uStrength={4} // intensity/strength
//         uFrequency={5.5} // frequency
//         uDensity={1.3} // density parameter
//         color1="#52ff89" // first color
//         color2="#dbba95" // second color
//         color3="#d0bce1" // third color
//         brightness={1.2}
//         reflection={0.1}
//         cAzimuthAngle={180}
//         cPolarAngle={90}
//         cameraZoom={1}
//       />
//     </ShaderGradientCanvas>
//   );
// }
