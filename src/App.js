import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo, useState } from 'react';
// import Item from './item';
// import m1 from './img/m1.jpg'
import m2 from './img/m2.png'
import m3 from './img/m3.jpg'
import m4 from './img/m4.jpg'
import m10 from './img/m10.jpg'
import m6 from './img/m6.jpg'
import m7 from './img/m7.jpg'
import m8 from './img/m8.jpg'
import m9 from './img/m9.jpg'
import c1 from './img/c1.jpg'
import c2 from './img/c2.png'
import c3 from './img/c3.jpg'
import c4 from './img/c4.jpg'
import c5 from './img/c5.jpg'
import c6 from './img/c6.png'
import c7 from './img/c7.jpg'
import c8 from './img/c8.jpg'
import c9 from './img/c9.jpg'
import c10 from './img/c10.png'
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import b3 from './img/b3.jpg'
import b4 from './img/b4.jpg'
import ci1 from './img/ci1.png'
import ci2 from './img/ci2.jpg'
import ci3 from './img/ci3.jpg'
import ci4 from './img/ci4.jpg'
import ci5 from './img/ci5.jpg'
import ci6 from './img/ci6.jpg'
import ci7 from './img/ci7.jpeg'









function App() {

  const arr_data = [
    { category: 'mountain', image: '../img/m1.jpg' },
    { category: 'mountain', image: m2 },
    { category: 'mountain', image: m3 },
    { category: 'mountain', image: m4 },
    { category: 'mountain', image: m10 },
    { category: 'mountain', image: m6 },
    { category: 'mountain', image: m7 },
    { category: 'mountain', image: m9 },
    { category: 'mountain', image: m8 },
    { category: 'car', image: c1 },
    { category: 'car', image: c2 },
    { category: 'car', image: c3 },
    { category: 'car', image: c4 },
    { category: 'car', image: c5 },
    { category: 'car', image: c6 },
    { category: 'car', image: c7 },
    { category: 'car', image: c8 },
    { category: 'car', image: c9 },
    { category: 'car', image: c10 },
    { category: 'bird', image: b1 },
    { category: 'bird', image: b2 },
    { category: 'bird', image: b3 },
    { category: 'bird', image: b4 },
    { category: 'city', image: ci1 },
    { category: 'city', image: ci2 },
    { category: 'city', image: ci3 },
    { category: 'city', image: ci4 },
    { category: 'city', image: ci5 },
    { category: 'city', image: ci6 },
    { category: 'city', image: ci7 },
  ]

  const [items, setitems] = useState(arr_data);
  const [name , setname] = useState()
  function demo(e) {
    const update = arr_data.filter((i) => {
      return i.category === e
    })

    setitems(update)
    setname(e)



  }
  function search(i) {
    const searching = arr_data.filter((e) => {
      return e.category === i
    })
    setitems(searching)
  }
  return (
    <div className="App">
      <div className="menu">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <ul className='list-unstyled d-flex'>
                <li className='me-5'><button onClick={() => demo('mountain')}>Mountain</button></li>
                <li className='me-5'><button onClick={() => demo('city')}>City</button></li>
                <li className='me-5'><button onClick={() => demo('bird')}>Bird</button></li>
                <li className='me-5'><button onClick={() => demo('car')}>Car</button></li>
                <li className='d-none d-md-block'>
                   <input type="text"placeholder='search..' onChange={(i) => search(i.target.value)} />

                </li>
                {/* <img src="./img/m2.png" alt=""/> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <center><h2>{name}</h2></center>
      <center>

        <div className="container">
          <div className="row">
            {
              items.map((i) => {
                return (
                  <>
                    <div className="col-auto col-lg-3 border-1">
                    <div className="img m-3">
                      <img src={i.image} alt="" className='img-fluid ' />
                      </div>  
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>



      </center>



    </div>
  );
}

export default App;
