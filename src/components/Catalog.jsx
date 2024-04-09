export default function Catalog() {
    return (
        <>
            <div className=" pl-6 pt-10 pb-10  flex-grow container mx-auto" >
                <h1
                    className=" mb-4 text-4xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text
            text-transparen">
                    Service Catalog</h1>
                    <p class="mt-1 text-xl font-normal text-gray-500 dark:text-gray-400">Browse a list of services
                            curated to help you work and play, stay organized, get answers, keep in touch, grow your
                            business, and more. Starting rom ₹90 Onwards</p>
            </div>

            <main className="px-3 flex-grow container mx-auto">
                <div class="relative overflow-x-auto border-2 rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Service name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                WiFi Setup and Configuration
                                    <h1 className="font-normal">Home or small office.</h1>
                                </th>
                                <td class="px-6 py-4">
                                Rs 90
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Advanced WiFi Installation
                                <h1 className="font-normal">Installation and configuration of advanced WiFi systems including access points for
                                larger office spaces.</h1>
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}