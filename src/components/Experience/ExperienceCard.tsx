'use client';
import { motion } from 'framer-motion';

interface ExperienceProps {
    position: string;
    company: string;
    companyLogo: string;
    technologies: string[];
    started: string;
    ended: string;
    works: string[];
}

export default function ExperienceCard(props: ExperienceProps) {
    const { position, company, companyLogo, technologies, started, ended, works } = props;
    return (
        <article
            className="flex flex-col rounded-lg items-center space-y-7 
            flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
            bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scroll-smooth">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
                src={`/${companyLogo}.png`}
            />

            <div className="px-0 md:px-10 text-portfolioGrey-100">
                <h4 className="text-4xl font-light uppercase">{position}</h4>
                <p className="font-bold text-2xl mt-1 uppercase">{company}</p>

                <div className="flex space-x-2 my-2">
                    {technologies.map((tech) => {
                        return <img key={`${tech}`} alt={tech} className="bg-gray-100 h-10 w-10 rounded-full object-cover object-center" src={`/${tech}`} />
                    })}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started work {started} - Ended {ended}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {works.map((work) => {
                        return <li key={work}>{work}</li>
                    })}
                </ul>
            </div>
        </article>
    )
}