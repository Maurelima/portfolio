'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function About() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event: any) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 font-inter text-2xl text-portfolioGrey-200 tracking-[20px]">ABOUT</h3>
            <motion.div
                style={{
                    perspective: 950
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
                onMouseMove={handleMouse}
                onMouseOut={() => {
                    x.set(200);
                    y.set(200);
                }}
            >

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY
                    }}
                    src="./about.jpg"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
                />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 text-portfolioGrey-100">
                <h4 className="text-4xl font-inter">Who am I?</h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices mattis nunc a fermentum. Fusce eu risus ipsum. Aenean mi eros, mattis ornare sagittis quis, varius vitae odio. Suspendisse potenti.
                    Nunc neque nunc, tempus quis tempus pellentesque, tristique non dui. Phasellus eu turpis lacinia, tincidunt est ac, maximus ante. Nunc convallis porta arcu, sed porttitor velit. Ut convallis consequat odio. Vivamus in turpis et sapien ornare mattis ut sed nulla.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices mattis nunc a fermentum. Fusce eu risus ipsum. Aenean mi eros, mattis ornare sagittis quis, varius vitae odio. Suspendisse potenti.
                    Nunc neque nunc, tempus quis tempus pellentesque, tristique non dui. Phasellus eu turpis lacinia, tincidunt est ac, maximus ante. Nunc convallis porta arcu, sed porttitor velit. Ut convallis consequat odio.
                </p>
            </div>
        </motion.div>
    )
}