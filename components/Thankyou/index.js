import { useSpring, animated } from 'react-spring'

export default function thankyou() {
  const props = useSpring({
      from: { left: '0%', top: '50%', width: '50%', height: '100%', background: '#fff' },
      to: async next => {
        while (1) {
          await next({ left: '0%', top: '50%', width: '100%', height: '100%', background: '#fff' })
        }
      },
    })

  const delay = useSpring({
    from: {opacity: 0}, to: {opacity: 1}, delay: 300
  })
    
    return <animated.div className="flex justify-center items-center" style={props}> 
      <div className="flex flex-col justify-center">  
          <h1 className="font-edmondsans-medium text-24 text-center lg:text-48 text-descriptive">Enjoy the read!</h1>
          <h2 className="font-edmondsans text-16 text-center lg:text-32 text-descriptive">Your ebook is being delivered to your inbox.</h2>  
            <animated.div className="self-center mt-40 sm:w-1/2" style={delay}>
              <img className="" src="../../static/beamup.png"></img>
            </animated.div>
      </div>
    </ animated.div>
}
