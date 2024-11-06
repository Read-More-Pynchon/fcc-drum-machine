import Display from "./Components/Display";
import PadBoard from "./Components/PadBoard";

function App() {
  return (
    <div className="bg-blackish w-full h-screen box-border p-4">
      <h1 className="text-3xl text-pink text-bold font-sans text-center">Drum Machine - Free Code Camp</h1>
      <div id="drum-machine" className="grid grid-cols-2 m-3 p-3 bg-teal">

        <PadBoard />
        <Display />
      </div>
    </div>
  );
}

export default App;
