import Link from 'next/link';


export default function Projects() {
    return (
        <div
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 font-inter text-2xl text-portfolioGrey-200 tracking-[20px]">PROJECTS</h3>

            {/* <div className="flex flex-row flex-wrap">
                <div className="md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">
                    <img alt="teste" src="./about.jpg" />
                </div>
                <div className="md:w-1/4 bg-gray-400 p-4 text-center text-gray-700">
                    <img alt="teste" src="./about.jpg" />
                </div>
            </div> */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                        <Link href="/teste">
                          <img alt="teste" src="./about.jpg" />
                        </Link>
                    </div>
                    <div>
                        <img alt="teste" src="./about.jpg" />
                    </div>
                    <div>
                        <img alt="teste" src="./about.jpg" />
                    </div>
                    <div>
                        <img alt="teste" src="./about.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}