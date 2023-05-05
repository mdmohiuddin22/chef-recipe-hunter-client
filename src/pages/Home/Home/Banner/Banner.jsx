import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/tony7755109801519956930.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bawarchi</h3>
          <p>Food Preparation: Chefs are responsible for preparing food according to recipes and standards set by their establishment. They may also be responsible for ordering ingredients, maintaining inventory, and ensuring food safety.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/20190328_140907_0000-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ranna Master</h3>
          <p>Menu Planning: Chefs are often responsible for creating menus that meet the needs and preferences of their customers. They may also need to take into account factors such as seasonality, food availability, and budget.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/img_20200809_192445.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pitha Master</h3>
          <p>
          Cooking: Chefs use a variety of cooking techniques to prepare food, including grilling, sautéing, roasting, and baking. They must be able to cook food to the proper temperature and ensure that it is cooked evenly and consistently.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;