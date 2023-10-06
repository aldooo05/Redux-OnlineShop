import React, { Fragment } from "react";
import TopNavbar from "../../Coponents/Header/TopNavbar";
import HeaderSlider from "../../Coponents/Slider/HeaderSlider";
import AllCategories from "../../Coponents/Categories/AllCategories";
import LatestProducts from "../../Coponents/Product/LatestProducts";
import Footer from "../../Coponents/Footer/Footer";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </Fragment>
  );
}

export default Home;

//Diatas terdapat fragment atau komponen yang fungsinya adalah sebagai wrapper sederhana untuk mengelompokan beberapaa elemen ke DOM, yang membungkus Dari mualai si navbar sampai footernya