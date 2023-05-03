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
      </Content>
    </>
  );
}

export default Home;