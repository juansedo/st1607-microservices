import CustomMap from "./components/CustomMap";

const styles: { [property: string]: React.CSSProperties } = {
  mapContainer: {
    width: "100%",
    height: "500px",
  },
} as const;

const App = () => {
  return (
    <>
      <h1>Bicycles webpage</h1>
      <CustomMap style={styles.mapContainer} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
