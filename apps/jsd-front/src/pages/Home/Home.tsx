import Content from "../../components/Content";
import CustomMap from "../../components/CustomMap";
import Navbar from "../../components/Navbar/Navbar";

const styles: { [property: string]: React.CSSProperties } = {
  mapContainer: {
    width: "100%",
    height: "500px",
  },
} as const;

const Home = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Bicycles webpage</h1>
        <CustomMap style={styles.mapContainer} />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Content>
    </>
  );
}

export default Home;