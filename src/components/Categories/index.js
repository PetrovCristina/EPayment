import React from 'react'
import { UncontrolledCarousel, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const items = [
  {
    src:
      'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    altText: 'Efectueaza plati',
    caption:
      'Telefonia mobila, servicii comunale, operatori TV si Internet, Bani electronici',
    header: (
      <Button
        tag={Link}
        to="/plati"
        color="info"
        className="mt-2 mt-md-0 ml-md-2">
        Efectueaza plati
      </Button>
    )
  },
  {
    src:
      'https://images.unsplash.com/photo-1523629619140-ee5b56cb3b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80',
    altText: 'Schimba valuta',
    caption: 'Schimba valuta',
    header: (
      <Button
        tag={Link}
        to="/valuta"
        color="info"
        className="mt-2 mt-md-0 ml-md-2">
        Schimba valuta
      </Button>
    )
  },
  {
    src:
      'https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    altText: 'Transfera bani',
    caption: 'Transfera banii catre un alt utilizator',
    header: (
      <Button
        tag={Link}
        to="/transfera"
        color="info"
        className="mt-2 mt-md-0 ml-md-2">
        Transfera bani
      </Button>
    )
  }
]

const Cards = () => <UncontrolledCarousel items={items} />

export default Cards
