

function Hello() {
    return (
        <>
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">

                        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            VasaiLocal
                        </a>

                        <nav class="hidden gap-12 lg:flex">
                            <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
                            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
                            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                        </nav>

                        <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>

                        <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>

                            Menu
                        </button>

                    </header>

                    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">

                        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <p class="text-2xl font-medium tracking-tight text-gray-500 sm:text-6xl">Hi there 👋, Welcome to the VasaiLocal's</p>

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
