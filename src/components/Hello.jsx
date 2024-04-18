

function Hello() {
    return (
        <>
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">


                    <section class="flex mt-20 flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">

                        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <p class="text-2xl  font-medium tracking-tight text-gray-500 sm:text-6xl">Hi there 👋, Welcome to the VasaiLocal's</p>

                            <h1 class="mb-8 mt-3 text-4xl font-bold text-blue-600 sm:text-5xl md:mb-12 md:text-6xl">Tech<span className="text-4xl font-bold tracking-tight text-pink-600 sm:text-6xl">Ninja</span></h1>

                            <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">Driving Digital Transformation
                                in Your Neighborhood..</p>


                        </div>

                        <div class="h-52 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                            <img src="https://i.imgur.com/04O3x2H.png" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Hello;
