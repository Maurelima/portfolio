'use client';
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, transform } from 'framer-motion';
import move from 'lodash-move'
import { nanoid } from 'nanoid'

const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", "#747474"];
const CARD_COLORS2 = [
    {
        card: {
            id: nanoid(),
            techName: 'ReactJs',
            background: "I've been working with ReactJs since I quit my technical support position at CustomData. Since then I have been developing applications with focus on scalability, performance and reuse.",
            experience: '3+ years',
            image: 'big-react.png',
            active: true,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'nodejs',
            background: 'In my experiences I was able to create scalable rest APIs with focus on performance.',
            experience: '3+ years',
            image: 'big-node.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'express',
            background: 'With express and typeorm I was abble to create a complete dashboard for the dev team to use for management of our main application.',
            experience: '2 years',
            image: 'big-express.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'typeorm',
            background: 'With express and typeorm I was abble to create a complete dashboard for the dev team to use for management of our main application.',
            experience: '2 years',
            image: 'big-typeorm.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'adonisjs',
            background: 'I work with adonis since I joyned Intersolid and have been relocated to the innovation team, Konvix. We use adonisjs as the major backend framework of our ERP application.',
            experience: '2 years',
            image: 'big-adonis.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'nestjs',
            background: 'I used NestJs in a personal project for studying.',
            experience: '1 years',
            image: 'big-nest.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'nextjs',
            background: 'I use framer-motion in personal and professional projects.',
            experience: '1+ years',
            image: 'big-next.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'react-query',
            background: 'I use react-query to cache data, usually along with paging.',
            experience: '1+ years',
            image: 'big-reactquery.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'redis',
            background: 'I used redis in a personal project for studying.',
            experience: '1 years',
            image: 'big-redis.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'framer-motion',
            background: 'I use framer-motion in personal projects.',
            experience: '1 years',
            image: 'big-motion.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'typescript',
            background: 'I use typescript daily.',
            experience: '3+ years',
            image: 'big-typescript.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'Electron',
            background: 'I used electron in a management project for customData.',
            experience: '1 years',
            image: 'big-electron.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'Slim Framework',
            background: 'I used slim in menu projects for restaurants.',
            experience: '1 years',
            image: 'big-slim.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'mysql',
            background: 'I used mysql in menu projects for restaurants.',
            experience: '2+ years',
            image: 'big-mysql.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'postgres',
            background: 'I work with postgres since I joyned Intersolid and have been relocated to the innovation team, Konvix. We use postgres as our database.',
            experience: '2+ years',
            image: 'big-postgres.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'mongo',
            background: 'I used mongo in a personal project for studying.',
            experience: '1 years',
            image: 'big-mongo.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'fauna',
            background: 'I used fauna on my wedding confirmation website.',
            experience: '1 years',
            image: 'big-fauna.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'css3',
            background: 'I use css3 daily.',
            experience: '4+ years',
            image: 'big-css3.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'html5',
            background: 'I use html5 daily.',
            experience: '4+ years',
            image: 'big-html5.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'tailwind',
            background: 'I use tailwind in personal projects.',
            experience: '1+ years',
            image: 'big-tailwind.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'bootstrap',
            background: 'I use bootstrap in personal and professional projects.',
            experience: '3+ years',
            image: 'big-bootstrap.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'javascript',
            background: 'I use javascript daily.',
            experience: '4+ years',
            image: 'big-js.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'chakra ui',
            background: 'I use chakraui chakra ui in personal projects.',
            experience: '1 years',
            image: 'big-chakra.png',
            active: false,
        },
    },
    {
        card: {
            id: nanoid(),
            techName: 'react hook form',
            background: 'I use react hook form in personal and professional projects.',
            experience: '1 years',
            image: 'big-reacthookform.png',
            active: false,
        },
    },
];

const CARD_OFFSET = 4;
const SCALE_FACTOR = 0.02;


const cardWrapStyle: any = {
    position: "relative",
    height: "350px"
};

const cardStyle: any = {
    position: "absolute",
    height: "350px",
    borderRadius: "8px",
    transformOrigin: "top center",
    listStyle: "none"
};
const wrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
};
export default function Skills() {
    const [cards, setCards] = useState(() => {
        let color = [41,41,41]
        const newCards = CARD_COLORS2.map((card) => {
            color = color.map((item) => item * 0.9)
            // const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            return {
                card: card.card,
                color: color,
                id: card.card.id,
                active: card.card.active,
            }
        })
        return newCards
    });

    // const [colorShades, setColorShades] = useState(() => generateDarkColorHex());
    function moveToEnd(index: number)  {
        setCards(old =>  move(old, index, old.length - 1));
    }

    // function generateDarkColorHex() {
    //     const rgb = [41, 41, 41]
    //     // generate 10 shades of this color rgba(41, 41, 41, 0.4)
    //     let count = 24
    //     const shades = [rgb]
    //     for (let i = 0; i < count; i++) {
    //         // irá executar 10 vezes
    //         const newShade = []
    //         for (let j = 0; j < rgb.length; j++) {
    //             // vai calcular as 3 partes do rgb
    //             newShade.push(Math.ceil(shades[i][j] * 0.9))
    //         }
    //         // console.log("-----------------------")
    //         shades.push(newShade)
    //     }
    //     return shades;
    // }


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
            <h3 className="absolute top-24 font-inter text-2xl text-portfolioGrey-200 tracking-[20px]">SKILLS</h3>

            <div className="flex items-center justify-center p-10">
                <ul className="w-[500px] md:w-[600px] xl:w-[900px]" style={cardWrapStyle}>
                    <AnimatePresence>
                        {cards.map((card, index) => {
                            return (
                                <motion.li
                                    key={card.card.id}
                                    className="
                                    flex items-center justify-start space-x-5 p-10 
                                    first-letter:w-[500px] md:w-[600px] xl:w-[900px] 
                                    border-solid border-2 border-[#292929]"
                                    style={{
                                        ...cardStyle,
                                        backgroundColor: `rgb(${card.color.join(',')})`,
                                        cursor: index === 0 ? "grab" : "auto"
                                    }}
                                    animate={{
                                        top: index * - CARD_OFFSET,
                                        scale: 1 - index * SCALE_FACTOR,
                                        zIndex: CARD_COLORS.length - index,
                                        // transform: `scale(${1 - index * SCALE_FACTOR}) `,
                                    }}
                                    drag="y"
                                    transition={{
                                        duration: .7,
                                    }}
                                    dragConstraints={{
                                        top: 0,
                                        bottom: 0,
                                    }}
                                    onDragEnd={() => moveToEnd(index)}
                                >
                                    <div className={`h-40 w-40 rounded-full bg-white`}>
                                        <img src={`/${card.card.image}`} key="big-react.png" alt="react" className="h-40 w-40 rounded-full object-contain object-center" />
                                    </div>
                                    <div className="flex flex-col max-w-[636px] justify-start">
                                        <h1 className="font-bold text-2xl mt-1 uppercase text-portfolioGrey-100">{card.card.techName}</h1>
                                        <p className="text-portfolioGrey-100">
                                            {card.card.background}
                                        </p>
                                        <br />
                                        <small className="text-portfolioGrey-200">Experience: {card.card.experience}</small>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </ul>
            </div>
        </motion.div>
    )
}