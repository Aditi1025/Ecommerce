import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
className="d-block w-100"
src="/images/men1.jpeg"
alt="First slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="/images/women2.jpeg"
alt="Second slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="/images/children1.jpeg"
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