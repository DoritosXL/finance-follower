import Particles from "react-tsparticles";

type ParticleWrapperProps = {
  background?: string[]
}

const defaultParticleBackgrounds = ["#286c94", "#bd4646", "#6b791f", "#aa8528", "#914d00", "#F45623", "#D62E32", "#EB586E", "#9952CF"]

const ParticleWrapper = (props: ParticleWrapperProps) => {
  const { background = defaultParticleBackgrounds} = props

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        background: {color: {value: background},
        },
        // interactivity: {
        //   events: {
        //     onClick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //     onHover: {
        //       enable: true,
        //       mode: "repulse",
        //       parallax: {enable: false, force: 60, smooth: 10}
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     bubble: {
        //       distance: 400,
        //       duration: 2,
        //       opacity: 0.8,
        //       size: 40,
        //     },
        //     push: {
        //       quantity: 2,
        //     },
        //     repulse: {
        //       distance: 150,
        //       duration: 0.4,
        //     },
        //   },
        // },
        particles: {
          color: {
            value: "#e9e9e9",
          },
          links: {
            color: "#e9e9e9",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 3,
            straight: false,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 7,
          },
        }
      }}
    />
  );
};

export default ParticleWrapper;