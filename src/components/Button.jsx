export default function Button() {
    return (
        <>
            <div className="pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
                <div class="flex items-center justify-center dark:bg-gray-800">
                    <button class="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg" loading="lazy" alt="google logo"/>
                            <span>Contact Me</span>
                    </button>
                </div>
            </div>
        </>
    )
}

