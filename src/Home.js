import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousels from "./Carousel";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel showThumbs="false" autoPlay swipeable className="home__image">
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-Dec/FTV_PC-GW-hero_1500x600_1x._CB446558100_.jpg" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" />
          </div>
        </Carousel>

        {/*         <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
 */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="LG 4K Super UHD LED Smart TV (Black)"
            price={2999.99}
            image="https://www.pngkey.com/png/full/682-6828118_75-4k-led-ultra-hd-tv.png"
            rating={5}
          />
          <Product
            id="4903050"
            title="Apple iPhone 11 (64GB) "
            price={849}
            image="http://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-High-Quality-Image.png"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="NVIDIA Titan RTX Graphics Card"
            price={2094.99}
            image="https://www.nvidia.com/content/dam/en-zz/Solutions/titan/titan-rtx/nvidia-titan-rtx-shop-2c50-p@2x.png"
            rating={4}
          />

          <Product
            id="3254354345"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={122.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={2424.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
