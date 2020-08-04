import React from "react";
import ChooseUs from "../components/ChooseUs";
import Consult from "../components/Consult";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import TheGallery from "../components/TheGallery";
// import Nav from "../components//Nav";
import News from "../components/News";
import Price from "../components/Price";
import Testimonial from "../components/Testimonial";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <ChooseUs />
            <Faqs />
            <Testimonial />
            <Price />
            <TheGallery />
            <News />
            <Consult />
            <Footer />
        </>
    );
}

export default Home;