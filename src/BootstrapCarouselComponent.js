import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BootstrapCarouselComponent.css"
class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">
</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
    <Carousel.Item>
        <img
        className="carousel_design"
        src="/images/1.png"
        alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="carousel_design"
        src="/images/2.png"
        alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
        <Carousel.Item>
        <img
        className="carousel_design"
        src="/images/3.png"
        alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;