export default function Button() {
    return (
        <>
            <div className="pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
                <div class="flex items-center justify-center dark:bg-gray-800">
                    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg" loading="lazy" alt="google logo"/>
                            <span>Contact Me</span>
                    </button>
                </div>
            </div>
        </>
    )
}

