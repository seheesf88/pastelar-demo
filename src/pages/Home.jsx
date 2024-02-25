import React, { useState } from 'react';
import BaseBook from '../components/BaseBook';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [openBook, setOpenBook] = useState(false)
  return (
    <div className="container">
      {
        openBook ?
        <BaseBook closeBook={() => setOpenBook(false)} /> :
        <Button variant="success" onClick={() => setOpenBook(true)}>Click here</Button>
      }
    </div>
  )
}
export default Home;