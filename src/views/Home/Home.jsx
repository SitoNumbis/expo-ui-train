import React from "react";

// react-native
import { Text, View } from "react-native-web";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";
import Container from "../../layouts/Mobile/Container/Container";

// images
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

// styles
import "./style.css";
import { span, titleArea, titleCss, spanTitle, centerRow } from "./styles";

const tabs = ["Popular", "For You", "India", "China", "Japan"];

const slideContent = [
  <ImageCard title="Louvre Museum Paris" src={img1} />,
  <ImageCard title="Louvre Museum Paris" src={img2} />,
  <ImageCard title="Louvre Museum Paris" src={img3} />,
];
const tabContent = [
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
];

function Home() {
  return (
    <Mobile>
      <Navbar />
      <Container>
        <Text>Hola</Text>
      </Container>
      {/*
      <Container>
        <div style={titleArea}>
          <h2 style={titleCss}>
            Visit your most favorite{" "}
            <span style={spanTitle}>Museums Virtually</span>
          </h2>
        </div>

        <Search />
        <TabView tabs={tabs} content={tabContent} />
        <div style={centerRow}>
          <span style={span} onClick={null}>
            Show all
          </span>
        </div>
  </Container>*/}
      <Dock />
    </Mobile>
  );
}

export default Home;
