import satData from "./satData";
import styling from "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  	
  const typeButtons = displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  });

  return (
    <div className="flex-container">
      {typeButtons}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;