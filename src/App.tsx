import './App.css'
import PrincipalScene from "./features/scenes/PrincipalScene.tsx";
import HomePage from "./presentation/pages/HomePage.tsx";
import {useState} from "react";

function App() {

    const [hasStarted, setHasStarted] = useState(false)

    const handleStart = () => {
        setHasStarted(true)
    }

    return (
        <div className="relative w-full h-screen">
            <PrincipalScene />
            {!hasStarted && <HomePage onStart={handleStart} />}
        </div>
    )

}

export default App
