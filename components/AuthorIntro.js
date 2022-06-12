
import { Row, Col, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuthorIntro = ({ about }) =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars.githubusercontent.com/u/16295175?v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Bienvenidos a M&JSoap´s,</h5>
          <p className="welcome-text">
            Blog de champús y jabones de elaboración artesanal, aceites, higiene personal, cuidado de la piel y el cabello. <br />
            <a target="_blank" href="https://wa.me/34649599475?text=Deseo%20informacion%20de%20los%20productos">Desea información producto</a>
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>

export default AuthorIntro;
