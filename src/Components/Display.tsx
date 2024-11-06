import { ChangeEvent } from "react";
import { useDrumMachineContext } from "../contexts/DrumMachineContext"



export default function Display() {

    const {
        setPower,
        volume,
        setVolume,
        currentPad,
        } = useDrumMachineContext()

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
    };

    const handlePowerSwitch = () => {
        setPower((prevState) => !prevState);
    }


    return (
        <div className="bg-teal w-1/2 h-fit">
            <h2 className="text-2xl font-sans text-blue">Display</h2>
            
            <label>Power</label>
            <input name="power" type="checkbox" onChange={handlePowerSwitch} checked  ></input>
            <div className="flex items-center space-x-4 p-6 m-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 9v6h4l5 5V4l-5 5H5z" />
                </svg>
                
                <input onChange={handleVolumeChange} type="range" min="0" max="1" step="0.01" value={volume} className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500" />
                
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3.23v2.06c3.39.49 6 3.39 6 6.91s-2.61 6.42-6 6.91v2.06c4.56-.51 8-4.38 8-8.97s-3.44-8.45-8-8.97zm-4 5.27L5 14H3V9h2l5-5v9z" />
                </svg>
            </div>
        
            <div id="display"  className="m-6 p-6 bg-white text-black font-bold">
                <p className="text-xl font-bold text-center">{currentPad}</p>
            </div>

        </div>
    )
}
