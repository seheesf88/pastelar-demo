import React, { useState } from 'react';
import BaseBook from '../components/BaseBook/BaseBook';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [openBook, setOpenBook] = useState(false)
  return (
    <div className="home" style={{ display: 'flex', justifyContent: 'center' }}>
      <BaseBook closeBook={() => setOpenBook(false)} />
      {/* {
        openBook ?
        <BaseBook closeBook={() => setOpenBook(false)} /> :
        <Button variant="success" onClick={() => setOpenBook(true)}>Create Recipe</Button>
      } */}
    </div>
  )
}
export default Home;