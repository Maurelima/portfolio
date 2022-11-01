'use client';

import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Banner() {
    const [text, count] = useTypewriter({
        words: [
            'Hi, my name is Marco',
            'Full stack Developer',
            '<SicParvisMagna />'
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col xl:flex-row space-y-8 items-center justify-between text-center overflow-hidden max-w-7xl mx-auto -my-16 z-20">
            <div className="flex flex-col text-start w-3/5">
                <h1 className="text-5xl">
                    <span className="mr-3 text-portfolioGrey-100 font-inter">{text}</span>
                    <Cursor cursorColor="#3E8989" />
                </h1>
                <small className="text-portfolioGrey-200 font-inter text-2xl">Full Stack Developer</small>
            </div>
            <div className="w-2/5">
                <motion.div
                    className="bg-portfolioGreen-100 bg-me bg-cover ml-12"
                    style={{
                        width: '200px',
                        height: '200px',
                        // filter: 'grayscale(100%)',
                    }}
                    animate={{
                        scale: [2, 2, 2, 2],
                        borderRadius: ["10%", "10%", "10%", "50%"],
                        rotateY: 170,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        times: [1, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}
                />
            </div>
        </div>
    )
}