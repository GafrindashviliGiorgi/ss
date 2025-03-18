import { useState } from 'react';
import './App.css';

function App() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG33tJ8tRf48bAoM8H_uG4jxb9E5pTYlRP4NYEVfvejw7Hd6qXfFUcm0D87L8iLmStJQg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKf8r7QM296XZzIjcTEPKYr4SovBCId7yumfWGdONEbjySHwFQACy0nap3OGwVMC4Tv0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdv9dHli7QJF8uhXhYlN6qQ_4Bz9kwkD3GEYryOUf2E1FizMs3L9cOpknx1TV2kVyNFQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5Ecmq5KKkQeO0sxNsFC584il-C247HNEmg&s'
  ];

  const [price, setPrice] = useState("250$");
  const [ricxvi, setSurati] = useState(images[0]);
  const [num, setNum] = useState(1);
  const [bigText, setText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
  const [list, setList] = useState([]); 

  function buy() {
    setList([...list, ricxvi]);
  }

  function removeItem(index) {
    setList(list.filter((item, i) => i !== index));
  }

  return (
    <>
      <div className='k25'>
        {list.map((item, i) => (
          <div key={i} className="cart-item">
            <img src={item} alt="" width="250px" height="130px" />
            <button className="delete-btn" onClick={() => removeItem(i)}>X</button>
          </div>
        ))}
      </div>

      <div className='k5'>
        <div className='k4'>
          <div className='k2'>
            <img src={ricxvi} alt="" className='k3' />
          </div>
          <div className='k1'>
            {images.map((img, index) => (
              <img key={index} src={img} alt="" width={'100px'} height={'100px'} onClick={() => {
                setSurati(img);
                setPrice(`${(index + 1) * 50}$`);
                setText(`Product ${index + 1} description.`);
              }} />
            ))}
          </div>
        </div>

        <div className="nextContainer">
          <h3 className='giosH3'>SNEAKER COMPANY</h3>
          <div className='k7'>
            <h1>Fall Limited</h1>
            <h1 className='k8'>Sneakers</h1>
            <p className='k23'>{bigText}</p>
            <div className="price">
              <h1>{price}</h1>
              <div className="ku">50%</div>
            </div>
            <div className='k11'>
              <button className='k12' onClick={() => setNum(num + 1)}>+</button>
              <h1>{num}</h1>
              <button className='k13' onClick={() => setNum(num > 1 ? num - 1 : 1)}>-</button>
              <button className='k22' onClick={buy}>buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
