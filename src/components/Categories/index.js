import React from 'react'
import './categories.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Telefonie from './images/1.jpg'
export default class Categories extends React.Component {
  render() {
    return (
      <div className="categories">
        <h3>Categories</h3>
        {/*telefonia mobila*/}
        <div className="flippy1">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide className="frontside">
              <div className="container">
                <img
                  src={Telefonie}
                  style={{ width: '300px', height: '300px' }}
                />
                <div className="centered">Telefonia mobila</div>
              </div>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <div className="container">
                <img
                  src={Telefonie}
                  style={{ width: '300px', height: '300px' }}
                />
                <div className="centered1" style={{ color: '#fff' }}>
                  <div>
                    <ul>
                      <li>
                        <a href="#">- Orange</a>
                      </li>
                      <li>
                        <a href="#">- Moldcell</a>
                      </li>
                      <li>
                        <a href="#">- Unite</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button>Achita</button>
              </div>
            </BackSide>
          </Flippy>
        </div>
        {/*servicii comunale*/}
        <div className="flippy2">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Servicii comunale
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>Gaz, GasNaturalFenosa, FeeNord, ApaCanal</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*operatori internet si tv*/}
        <div className="flippy3">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Operatori TV si Internet
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>StarNet, Moldtelecom, SunCommunications</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*cosmetica*/}
        <div className="flippy4">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Cosmetica
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>Avon, Oriflame, Faberlic</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*servicii financiare*/}
        <div className="flippy5">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Servicii financiare
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>MAIB, CreditBun, eCredit</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*emoney*/}
        <div className="flippy6">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Bani electronici
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>WebMoney, QIWI</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*retele sociale*/}
        <div className="flippy7">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Retele sociale
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>Odnoklassniki, VKontakte</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
        {/*altele*/}
        <div className="flippy8">
          <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={r => (this.flippy = r)}
            style={{ width: '300px', height: '300px' }}>
            <FrontSide
              style={{
                backgroundColor: '#41669d'
              }}>
              Altele
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852' }}>
              <p>Cupon.md, Zumzi, Surprise.md</p>
              <button>Achita</button>
            </BackSide>
          </Flippy>
        </div>
      </div>
    )
  }
}
