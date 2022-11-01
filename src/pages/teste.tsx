import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link';
import Header from '../components/Header';
// import { AnimatePresence } from 'framer-motion';

const privacyScreen: any = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    // backgroundColor: "#3E8989",
    backgroundColor: "#801a86",
    zIndex: "2",
};
const progress: any = {
    position: "fixed",
    left: 0,
    right: 0,
    height: "5px",
    background: "#801a86",
    bottom: "100px",
};


export default function Teste() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const isPresent = useIsPresent()
    return (
        <div className="scroll-smooth snap-y snap-mandatory overflow-scroll z-0">
            <Header />
            <div>
                <div
                    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
                >
                    <h3 className="absolute top-24 font-inter text-2xl text-portfolioGrey-200 tracking-[20px]">NOME DO PROJETO</h3>
                    <article className=" text-portfolioGrey-100">
                        {/* <h1>
                            Galleries
                        </h1> */}
                        <ul>
                            <li>
                                <Link href="/#projects">Volar</Link>
                            </li>
                        </ul>
                    </article>
                    <motion.div className="progress" style={{ ...progress, scaleX }} />
                    <motion.div
                        initial={{ scaleX: 2 }}
                        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
                        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
                        style={{
                            ...privacyScreen,
                            originX: isPresent ? 0 : 1
                        }}
                    />
                </div>
            </div>
        </div>
    )
}