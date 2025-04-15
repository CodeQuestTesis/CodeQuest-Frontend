import {Button} from "../components/ui/Button.tsx";
import {useState} from "react";
import {FaQuestion} from "react-icons/fa";
import HelpModal from "../components/modals/HelpModal.tsx";

function HomePage() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black/80">
            {/* Contenido principal centrado */}
            <div className="text-center">
                <h1 className="text-white text-4xl mb-4">Bienvenido a CodeQuest</h1>
                <Button>Comenzar</Button>
            </div>

            {/* Botón con ícono de pregunta en la esquina superior derecha */}
            <button
                onClick={openModal}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-800 text-red-800 shadow hover:bg-red-800 hover:text-white transition-colors"
                aria-label="Abrir ayuda">
                <FaQuestion />
            </button>
            {/* Llamada al componente HelpModal */}
            {modalOpen && <HelpModal onClose={closeModal} />}
        </div>
    );
}

export default HomePage;
