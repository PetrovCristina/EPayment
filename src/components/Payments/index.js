import React from 'react'
import { Row, Col, Card, CardImg, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './payments.css'
import Telefonie from './images/1.jpg'
import Online from './images/2.jpg'
import ServiciiComunale from './images/3.png'
import TV from './images/4.jpg'
const categories = [
  {
    image: Telefonie,
    payment: 'Achita telefonia mobila',
    link: '/mobile'
  },
  {
    image: ServiciiComunale,
    payment: 'Achita servicii comunale',
    link: '/comunale'
  },
  {
    image: TV,
    payment: 'Achita TV',
    link: '/tv'
  },
  {
    image: Online,
    payment: 'Achita Internet',
    link: '/internet'
  }
]
export default class Payments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="my-4">Operatii</h2>

        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={12} md={6} lg={4} xl={3} className={'mb-4'}>
              <Card>
                <div className="card-img-wrapper">
                  <CardImg
                    top
                    src={category.image}
                    style={{ backgroundColor: '#175852' }}
                  />
                </div>
                <CardFooter>
                  <Button
                    tag={Link}
                    to={category.link}
                    color="info"
                    className="mt-2 mt-md-0 ml-md-2">
                    {category.payment}
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    )
  }
}
