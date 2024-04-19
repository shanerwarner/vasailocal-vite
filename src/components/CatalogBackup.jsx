export default function CatalogBackup() {
    return (
        <>

            <main className="px-3 flex-grow container mx-auto">
                <div class="relative overflow-x-auto border-2 rounded-xl">
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
                                <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                    WiFi Setup and Configuration
                                    <h1 className="font-normal">Home or small office.</h1>
                                    <h1 className="font-normal"></h1>
                                </th>
                                <td class="px-6 py-4 font-bold ">
                                    ₹90 🔥
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className=" px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                    Advanced WiFi
                                    <h1 className="font-normal">Access Points or Switches</h1>
                                </th>
                                <td class="px-6 py-4 font-bold">
                                    ₹250
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className=" px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                    Windows 10 Setup and Support
                                    <h1 className="font-normal">Installation, configuration and</h1>
                                    <h1 className="font-normal"> Troubleshooting support</h1>
                                </th>
                                <td class="px-6 py-4 font-bold">
                                    ₹159
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-bold border-b dark:border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
                                    Windows 11 Upgrade and Support
                                    <h1 className="font-normal">Upgrade to Windows 11</h1>
                                    <h1 className="font-normal">Installation, configuration and</h1>
                                    <h1 className="font-normal"> Troubleshooting support</h1>
                                </th>
                                <td class="px-6 py-4 font-bold border-b dark:border-gray-700">
                                    ₹159
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-bold   text-gray-900 whitespace-nowrap dark:text-white">
                                    Software Installation and Updates
                                    <h1 className="font-normal">Microsft Office</h1>
                                    <h1 className="font-normal">Windows Updates, Etc</h1>
                                    <h1 className="font-normal"> Troubleshooting support</h1>
                                </th>
                                <td class="px-6 py-4 font-bold ">
                                    ₹159
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </main>
        </>
    )
}