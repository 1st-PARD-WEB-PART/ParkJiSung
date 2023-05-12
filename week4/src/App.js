import ColorBox from "./ColorBox";
import ColorContext from "./Color";

const App = () => {
  return (
    <div>
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
    <div>
    <ColorBox />
  </div>
  </div>
  );
};

export default App;