import { useContext, createContext, useState, ReactNode } from "react";


export interface ContextProviderProps {
    children: ReactNode;
}


interface DrumMachineContextProps {
    power: boolean,
    setPower: React.Dispatch<React.SetStateAction<boolean>>,
    volume: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>,
    currentPad: string,
    setCurrentPad: React.Dispatch<React.SetStateAction<string>>,
    currentBank: string,
    setCurrentBank: React.Dispatch<React.SetStateAction<string>>,

}

const DrumMachineContext = createContext<DrumMachineContextProps>({
    power: true,
    setPower: () => { },
    volume: 0.8,
    setVolume: () => { },
    currentPad: '',
    setCurrentPad: () => { },
    currentBank: 'A',
    setCurrentBank: () => { },
})

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [power, setPower] = useState<boolean>(true);
    const [volume, setVolume] = useState<number>(0.8);
    const [currentPad, setCurrentPad] = useState<string>('');
    const [currentBank, setCurrentBank] = useState<string>('A');
    
   const DrumMachineContextValue: DrumMachineContextProps = {
    power,
    setPower,
    volume,
    setVolume,
    currentPad,
    setCurrentPad,
    currentBank,
    setCurrentBank,
   }

    return (
        <DrumMachineContext.Provider value={DrumMachineContextValue}>
            {children}
        </DrumMachineContext.Provider >

    );

};

export function useDrumMachineContext() {
    return useContext(DrumMachineContext);
}