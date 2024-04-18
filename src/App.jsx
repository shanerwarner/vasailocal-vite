import Hello from "./components/Hello"
import Catalog from "./components/Catalog"
import PCbuild from "./components/PCbuild"
import Custompc from "./components/Custompc"
import Button from "./components/Button"
import Hero from "./components/Hero"


export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <Hello />
            <Catalog />
            <PCbuild/>
            <Button/>
        </div>
    )

}