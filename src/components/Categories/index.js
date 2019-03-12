import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardFooter,
  CardText,
  Button
} from 'reactstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

import './categories.css'
import Telefonie from './images/1.jpg'
import Online from './images/2.jpg'
import ServiciiComunale from './images/3.png'
import TV from './images/4.jpg'

const categories = [
  {
    name: 'Telefonia mobila',
    services: ['Orange', 'Moldcell'],
    image: Telefonie
  },
  {
    name: 'Servicii comunale',
    services: ['RedNord', 'MoldovaGaz', 'ApaCanal'],
    image: ServiciiComunale
  },
  {
    name: 'Operatori TV si Internet',
    services: ['Moldtelecom', 'SunCommunications'],
    image: TV
  },
  {
    name: 'Bani electronici',
    services: ['WebMoney', 'PayPal'],
    image: Online
  }
]

export default class Categories extends React.Component {
  render() {
    return (
      <Container>
        <h2 className="my-4">Operatii</h2>

        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={12} md={6} lg={4} xl={3} className={'mb-4'}>
              <Flippy flipOnHover={true} flipDirection="horizontal">
                <FrontSide style={{ padding: '0' }}>
                  <Card>
                    <div className="card-img-wrapper">
                      <CardImg
                        top
                        src={category.image}
                        style={{ backgroundColor: '#41669d' }}
                      />
                    </div>
                    <CardBody>
                      <CardText>{category.name}</CardText>
                    </CardBody>
                    <CardFooter className="text-truncate">
                      {category.services.join(', ')}
                    </CardFooter>
                  </Card>
                </FrontSide>
                <BackSide style={{ padding: '0' }}>
                  <Card>
                    <div className="card-img-wrapper">
                      <CardImg
                        top
                        src={category.image}
                        style={{ backgroundColor: '#175852' }}
                      />
                    </div>
                    <CardBody>
                      <CardText className="text-truncate">
                        {category.services.join(', ')}
                      </CardText>
                    </CardBody>
                    <CardFooter>
                      <Button color="success">Achita</Button>
                    </CardFooter>
                  </Card>
                </BackSide>
              </Flippy>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
