import React from 'react'
import { useState, useEffect } from 'react';
import Button from './Etiquetas/Button';

const HeaderComponente = () => {
    const words = ["Programador Web", "Desarrollador de Software"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        const wordInterval = setInterval(() => {
            const targetWord = words[currentWordIndex];
            const currentWordLength = currentWord.length;

            if (currentWordLength < targetWord.length) setCurrentWord(targetWord.substring(0, currentWordLength + 1));
            else {
                clearInterval(wordInterval);
                setTimeout(() => {
                    setCurrentWord('');
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(wordInterval);
    }, [currentWord, currentWordIndex]);

    return (
        <div>
            <div id="inicio" className="relative">
                <div
                    className="bg-cover bg-center h-full sm:h-screen w-full"
                    style={{ backgroundImage: "url('/img/portada.jpg')" }}
                ></div>
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 
                    flex items-center justify-center flex-col transform -translate-x-1/2 -translate-y-1/2  text-center mt-4">
                    <img
                        className="rounded-full w-64 h-64 p-0 m-0"
                        src="/img/perfil.jpg"
                        alt="foto_personal"
                    />

                    <p className="text-white text-3xl font-bold mt-4">Carlos Carbajal Matias</p>
                    <p className="text-white text-2xl font-bold mt-4">
                        <span className="typing-animation">{currentWord}</span>
                    </p>
                    <div className='text-white text-1xl'>
                        <p>  JS | ReactJS | Jquery | Python | Php | C++</p>
                        <p>  C# |  .Net   | SQLSever</p>
                    </div>

                    <Button text="Contáctame" onFunction={() => window.open("https://www.linkedin.com/in/carlos-carbajal-matias-35a1b8188/", "_blank")} />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponente