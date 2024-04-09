import Hello from "./components/Hello"
import Catalog from "./components/Catalog"
import PCbuild from "./components/PCbuild"
import Custompc from "./components/Custompc"

export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <Hello />
            <Catalog />
            <Custompc />

        </div>
    )

}