import React from "react";
// import { useSpring, animated } from 'react-spring';


// const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Explainer() {
  // // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 250, friction: 40 } }))
  // const style = {
  //   // transform: props.xys.interpolate(trans),
  //   backgroundImage: "url(/static/ebook-cover.png",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  // }

  

  return (
    <div className="flex flex-1 bg-descriptive justify-center items-center h-screen">
       <div className="w-2/3 lgg:w2/3 xl:w-1/2 h-auto lg:h-xxxxl">
       <img src="/static/ebook-cover.png"/>
       </div>
        {/* <animated.div
          
          onMouseMove={({ clientX: x, client Y: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={style}
        /> */}
    </div>
  )
}


  
  export default Explainer;