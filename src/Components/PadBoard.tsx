
import DrumPad from "./DrumPad";

export default function PadBoard() {

    const drumPadInfo = [
        {
            letter: "Q",
            color: 'teal',
            samples: [
                {
                    title: "Heater 1",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "W",
            color: 'pink',
            samples: [
                {
                    title: "Heater 2",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "E",
            color: 'purple',
            samples: [
                {
                    title: "Heater 3",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "A",
            color: 'white',
            samples: [
                {
                    title: "Heater 4",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "S",
            color: 'blackish',
            samples: [
                {
                    title: "Clap",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "D",
            color: 'blue',
            samples: [
                {
                    title: "Open-HH",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "Z",
            color: 'purple',
            samples: [
                {
                    title: "Kick-n-HAt",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "X",
            color: 'pink',
            samples: [
                {
                    title: "Kick",
                    source: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
                    bank: "A",
                }
            ]
        },
        {
            letter: "C",
            color: 'teal',
            samples: [
                {
                    title: "Closed-HH",
                    source:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
                    bank: "A",
                }
            ]
        }
    ];

    const drumPads = drumPadInfo.map((info, index) => {
        return (
            <DrumPad key={index} letter={info.letter} samples={info.samples} color={info.color}/>
        )
    });


    return (
        <div className="grid grid-cols-3 bg-red m-auto w-fit">
            {drumPads}
        </div>
    )
}
