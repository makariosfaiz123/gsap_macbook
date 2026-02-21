import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import {features, featureSequence} from "../constants/index.js";
import clsx from "clsx";
import {Suspense, useEffect, useRef} from "react";
import {Html} from "@react-three/drei";
import MacBookModel from "./models/Macbook.jsx";
import {useMediaQuery} from "react-responsive";
import useMacBookStore from "../Store/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({query : "(max-width: 1024px)"});
    const {setTextrue}= useMacBookStore();

    // pre-load all featrue videos during component mount
    useEffect(()=>{
        featureSequence.forEach((feature)=>{
            const v = document.createElement("video");

            Object.assign(v,{
                src : feature.videoPath,
                muted : true,
                playsInline : true,
                preload : 'auto',
                crossOrigin: 'anonymous',
            });
            v.load();
        })
    },[])

    useGSAP(()=>{
        // 3D MODEL ROTATION ANIMATION
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger:"#f-canvas",
                start:"top top",
                end:"bottom top",
                scrub:1,
                pin:true,
        }
        });

        // SYNC THE FEATRUE CONTENT
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger:"#f-canvas",
                start:"top center",
                end:"bottom top",
                scrub:1,
            }
        });

        //3D SPIN
        if(groupRef.current){
            modelTimeline.to(groupRef.current.rotation, {y : Math.PI * 2, ease : "power1.inOut"} );
        }

        // Content $ Textrue Sync
        timeline
            .call(()=>setTextrue('/videos/feature-1.mp4'))
            .to('.box1',{opacity: 1, y: 0, delay: 1})

            .call(()=>setTextrue('/videos/feature-2.mp4'))
            .to('.box2',{opacity: 1, y: 0})

            .call(()=>setTextrue('/videos/feature-3.mp4'))
            .to('.box3',{opacity: 1, y: 0})

            .call(()=>setTextrue('/videos/feature-4.mp4'))
            .to('.box4',{opacity: 1, y: 0})

            .call(()=>setTextrue('/videos/feature-5.mp4'))
            .to('.box5',{opacity: 1, y: 0})

    },[]);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacBookModel scale={isMobile ? 0.08 : 0.1} position={[0,-1,0]} />
            </Suspense>
        </group>
    )
}

const Featrues = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas  id="f-canvas" camera={{}}>
                <StudioLights />

                <ambientLight intensity={0.5} />

                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={index} className={clsx('box',`box${index + 1}`,feature.styles)} >
                        <img src={feature.icon} alt={feature.highlight}/>
                        <p>
                            <span className={"text-white"}>{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Featrues
