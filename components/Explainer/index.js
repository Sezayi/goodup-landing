import React from "react";
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.1]
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Explainer() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const style = {
    transform: props.xys.interpolate(trans),
    backgroundImage: "url(https://www.bookish.com/wp-content/uploads/the-night-gardener-9781481439787_hr.jpg",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  }
  return (
    <div className="flex flex-1 justify-center items-center h-full  ">
        <animated.div
          className="w-1/2 h-xxxxl bg-grey image"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={style}
        />
    </div>
  )
}


  
  export default Explainer;