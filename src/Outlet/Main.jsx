import {useCallback} from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";
import Footer from "../Pages/SharedPage/Footer/Footer";



import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Main = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div >
            
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#003c51",
                    },
                },
                fpsLimit: 200,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.6,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#3061AF",
                    },
                    links: {
                        color: "#C8CCD3",
                        distance: 150,
                        enable: true,
                        opacity: 1,
                        width: 0.7,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
            
            <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           
         

        </div>
    );
};

export default Main;