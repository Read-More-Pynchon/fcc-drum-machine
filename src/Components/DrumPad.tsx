
import { useDrumMachineContext } from "../contexts/DrumMachineContext";
import { useEffect, useRef, useState } from "react";

export interface Sample {
    title: string;
    source: string;
    bank: string;
}

export interface DrumPadProps {
    letter: string,
    color: string,
    samples: Sample[]

}

export default function DrumPad(props: DrumPadProps) {


    const { currentBank, volume, setCurrentPad, power } = useDrumMachineContext();
    const [sample] = useState<Sample>(() => {
        if (!currentBank) return props.samples[0];
        return props.samples.find(sample => sample.bank === currentBank) ?? props.samples[0];
    });

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const padRef = useRef<HTMLDivElement>(null);
    /*
        const handleKeyboardInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
            const keyPressed = event.key;
            console.log(`Your key is ${keyPressed}!`);
            if (keyPressed.toUpperCase() === props.letter) {
                console.log("Keyboard Pressed: ", props.letter)
                handleClick();
            }
        };
        */

    // Global keyboard event listener
    useEffect(() => {
        const handleGlobalKeyDown = (event: KeyboardEvent) => {
            if (event.key.toUpperCase() === props.letter) {
                event.preventDefault(); // Prevent any default behavior
                if (!power) {
                    alert("Power is Off");
                    return;
                }
                setCurrentPad(sample.title);
                setIsPlaying(true);
                console.log(`Key pressed: ${props.letter} - ${sample.title}`);
            }
        };

        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => {
            window.removeEventListener('keydown', handleGlobalKeyDown);
        };
    }, [props.letter, power, sample.title, setCurrentPad]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            audio.load();
            const handleAudioEnd = () => setIsPlaying(false);
            audio.addEventListener("ended", handleAudioEnd);
            return () => {
                audio.removeEventListener("ended", handleAudioEnd);
            };
        }
    }, [sample.source, volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            if (isPlaying) {
                audio.play()
                    .catch((error) => console.error("Audio play error:", error))
                    .finally(() => setIsPlaying(false));
            }
        }
    }, [isPlaying, volume]);

    const handleClick = () => {
        if (!power) {
            alert("Power is Off");
            return;
        }
        setCurrentPad(sample.title);
        setIsPlaying((prev) => !prev);
        console.log(`Clicked: ${props.letter} - ${sample.title}`);
    };





    switch (props.color) {
        case "teal":
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}
                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-teal text-blue p-3 m-3 shadow-lg shadow-purple hover:bg-pink text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
        case 'pink':
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}
                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-pink text-white p-3 m-3 shadow-lg shadow-purple  hover:bg-blue text-center text-xl font-bold align-middle">
                    {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
        case 'purple':
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}

                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-purple text-white p-3 m-3 shadow-lg shadow-purple hover:bg-blackish text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
        case 'blue':
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}

                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-blue text-teal p-3 m-3 shadow-lg shadow-purple hover:bg-pink text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
        case 'blackish':
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}

                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-blackish text-teal p-3 m-3 shadow-lg shadow-purple hover:bg-purple text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
        case 'white':
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}

                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-white text-blue p-3 m-3 shadow-lg shadow-purple hover:bg-pink text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );

        default:
            return (
                  <div
                    id={sample.title.replace(' ', '-').toLowerCase()}
                    onClick={handleClick}

                    tabIndex={0}
                    role="button"
                    aria-label={`Drum pad ${props.letter}`}
                    className="drum-pad col-span-1 w-16 h-16 rounded-lg border-2 border-blackish-300 bg-blue text-white p-3 m-3 shadow-lg shadow-purple text-center text-xl font-bold align-middle">
               {props.letter}
                    <audio id={props.letter} src={sample.source} ref={audioRef} className="clip">
                    </audio>
                </div>
            );
    }
}
