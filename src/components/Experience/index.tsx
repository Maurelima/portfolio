'use client';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{
                once: true,
            }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-4 font-inter text-2xl text-portfolioGrey-200 tracking-[20px]">EXPECIENCE</h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                <ExperienceCard
                    position="Technical support"
                    companyLogo="CustomData"
                    company="CustomData"
                    technologies={['js.png', 'php.png', 'java.jpg', 'mysql.jpg', 'sqlServer.png', 'firebird.jfif']}
                    started="Mar. 2016"
                    ended="May. 2020"
                    works={[
                        'Small Automation Developments',
                        'Customer Service',
                        'Database Operation',
                        'Software and Server Upgrade',
                        'Internal Network Configuration'
                    ]}
                />
                <ExperienceCard
                    position="Full Stack Developer"
                    company="Freelancer"
                    companyLogo="ezdev"
                    technologies={['nextjs.jpg', 'react.png', 'ts.png', 'mysql.jpg', 'node.png', 'php.png']}
                    started="May. 2020"
                    ended="Feb. 2021"
                    works={[
                        'WEB Development with JavaScript and PHP',
                        'Frontend development with Raintpl and ReactJs',
                        'Backend development with Slim Framework',
                        'GIT, GitHub, SmartGit',
                    ]}
                />
                <ExperienceCard
                    position="Full Stack Developer"
                    company="intersolid Software"
                    companyLogo="intersolid"
                    technologies={['react.png', 'ts.png', 'postgres.png', 'node.png', 'typeorm.png']}
                    started="Feb. 2021"
                    ended="May. 2021"
                    works={[
                        'WEB Development',
                        'GIT, GitHub, SmartGit',
                        'Moved to innovation team (Konvix)',
                    ]}
                />
                <ExperienceCard
                    position="Full Stack Developer"
                    company="Konvix Tecnologia"
                    companyLogo="konvix2"
                    technologies={['react.png', 'ts.png', 'postgres.png', 'node.png', 'adonis.png']}
                    started="Feb. 2021"
                    ended="May. 2021"
                    works={[
                        'WEB Development',
                        'Prototyping with Figma',
                        'Creating performatic components with ReactJs',
                        'Backend development with REST API - Adonis.Js',
                        'Knowledge in agile methodology (SCRUM)',
                        'GIT, GitHub, SmartGit',
                    ]}
                />
            </div>
        </motion.div>
    )
}