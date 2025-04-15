import {useState} from "react";
import {FaQuestion} from "react-icons/fa";
import HelpModal from "../components/modals/HelpModal.tsx";
import {Button} from "../components/UI/Button.tsx";

function HomePage({ onStart }: { onStart: () => void }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="absolute z-50 top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-white text-4xl mb-4">Bienvenido a CodeQuest</h1>
                <Button onClick={onStart}>Comenzar</Button>
            </div>

            <button
                onClick={() => setModalOpen(true)}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-800 text-red-800 shadow hover:bg-red-800 hover:text-white transition-colors"
                aria-label="Abrir ayuda">
                <FaQuestion />
            </button>

            {modalOpen && <HelpModal onClose={() => setModalOpen(false)} />}
        </div>
    )
}

export default HomePage;
