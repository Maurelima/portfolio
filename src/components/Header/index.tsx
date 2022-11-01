'use client';
import { CiLinkedin } from 'react-icons/ci'
import { SlSocialGithub } from 'react-icons/sl'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from "framer-motion"
import Link from 'next/link';

export default function NavBar() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-portfolioGrey-200 gap-x-4">
                    <Link href="#skills">
                <CiLinkedin className="bg-transparent cursor-pointer" size={22} /></Link>
                <SlSocialGithub className="bg-transparent cursor-pointer" size={22} />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-portfolioGrey-200 gap-x-4">
                {/* Social Icons */}
                <AiOutlineMail className="bg-transparent cursor-pointer" size={22} />
                <p className="uppercase hidden md:inline-flex text-sm tracking-widest font-inter">
                    Get in Touch
                </p>
            </motion.div>
        </header>
    )
}