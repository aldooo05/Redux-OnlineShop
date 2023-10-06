import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} src="../img/slider/pure-pu-ladies-shoulder-bag.png" alt="pure pu ladies bag" />
          <Carousel.Caption className="bg-white">
            <h5>"Trend Terbaru, Harga Terbaik: Selamat Datang di Pusat Belanja Kami"</h5>
            <p>Mari berbelanja.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} src="../img/slider/young-handsome-guy-smart-suit.png" alt="pure mustard oil" />
          <Carousel.Caption className="bg-white">
            <h5>Pakaian Pria 100% Katun</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
              quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet laborum.
            </p>
            <div className="mb-3">
              <Button variant="dark">Belanja sekarang juga</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} src="../img/slider/blender-fruits-kitchen-space.png" alt="smart blender home appliance" />
          <Carousel.Caption className="bg-white">
            <h5>Mari berbelanja kebutuhan dapur-mu kesini</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
              quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet laborum.
            </p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
