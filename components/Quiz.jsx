import { useState, useEffect, useRef } from "react";
import '../style/Quiz.css';
import Compass from "./Compass";

const Quiz = () => {
    const [name, setName] = useState('');
    const [secret, setSecret] = useState('hidden');
    const secretRef = useRef();

    useEffect(() => {
        setSecret(name.toLocaleLowerCase().slice(0, 6) === "alanna" ? "secret" : 'hidden');
    }, [name]);

    useEffect(() => {
        if (secret === "secret") {
            secretRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [secret]);

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            <input
                type="text"
                placeholder="Qual é o seu nome?"
                id='quiz-input'
                value={name}
                onChange={(e) => setName(e.target.value.trimStart())}
            />
            {name && (<h2>Olá, {name.charAt(0).toUpperCase() + name.slice(1)}!</h2>)}
            <div className={secret} ref={secretRef}>
                <br /><p>Caso você seja a minha princesa, eu queria dizer que te amo muitooo!</p><br />
                <p>Você é muito especial para mim, a minha pessoa preferida, queria poder estar sempre com você.</p><br />
                <p>Você é o meu raio de luz, não me imaginar sem você.</p><br />
                <p>Vou deixar essa bússola que provavelmente vai apontar para onde eu tô (minha casakk)</p><br />
                <p>Te amo! Beijos!</p>
                <div className="compass">
                    <Compass />
                    <iframe
                        width="auto"
                        height="200px"
                        src="https://www.youtube.com/embed/j56dEcq7ryo?autoplay=1"
                        title="The Neighbourhood - Compass"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Quiz;