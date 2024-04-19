

export default function Hero() {
    return (
        <>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 ">

                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-1/2  sm:w-1/2  md:w-full  lg:w-full  xl:w-1/2 ">
                        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-2xl font-medium tracking-tight text-gray-500 sm:text-6xl">
                                    Hi there 👋,
                                </h1>
                                <h1 className="text-2xl font-medium tracking-tight text-gray-500 sm:text-6xl">
                                    Welcome to the
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Vasai Local's

                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
                                    Tech Ninja

                                </h1>


                            </div>

                        </div>
                    </div>
                    <div className="w-1/2  sm:w-1/2  md:w-full  lg:w-full  xl:w-1/2 "><div className=" mx-auto max-w-sm">
                        <img className=""
                            src="https://i.imgur.com/04O3x2H.png"
                            alt="" />
                    </div></div>
                </div>
            </div>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
                Driving Digital Transformation
                in Your Neighborhood.
            </h2>


        </>
    )
}

