import {RiCloseFill} from "react-icons/ri";

export default function HelpModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            {/* Contenedor del modal */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
                {/* Header: título a la izquierda y botón de cierre a la derecha */}
                <div className="flex items-center justify-between border-b px-4 py-2">
                    <h2 className="text-lg font-semibold text-red-800">Información de la aplicación</h2>
                    <button
                        onClick={onClose}
                        className="flex justify-center rounded-full border-2 border-red-800 text-red-800 shadow hover:bg-red-800 hover:text-white transition-colors"
                        aria-label="Cerrar modal">
                        <RiCloseFill />
                    </button>
                </div>
                {/* Cuerpo del modal con el contenido */}
                <div className="p-4 text-black text-sm">
                    <p>
                        Bienvenido a CodeQuest, una experiencia interactiva diseñada
                        para que descubras todo lo que ofrece la carrera de Ingeniería de Sistemas e Inteligencia Artificial.
                    </p>
                    <p className="mt-3">
                        A través de un recorrido virtual gamificado, podrás conocer:
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>En qué consiste esta apasionante carrera.</li>
                        <li>A qué se dedica un ingeniero en Sistemas e IA.</li>
                        <li>
                            Las especialidades que puedes seguir, como Ciberseguridad, Ciencia de Datos, Desarrollo de Software, entre otras.
                        </li>
                        <li>
                            Y lo mejor: lo harás mientras juegas, resuelves retos y te diviertes.
                        </li>
                    </ul>
                    <p className="mt-3">
                        Explora, aprende y descubre si este mundo tecnológico es para ti.
                    </p>
                    <p className="mt-3 font-semibold">
                        ¿Listo para empezar la aventura?
                    </p>
                </div>
            </div>
        </div>
    );
}
