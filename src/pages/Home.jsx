import React, { useState } from 'react';
import BaseBook from '../components/BaseBook/BaseBook';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [openBook, setOpenBook] = useState(false)
  return (
    <div className="home mt-5" style={{ display: 'flex', justifyContent: 'center'}}>
      {
        openBook ?
        <BaseBook closeBook={() => setOpenBook(false)} /> :
        <div className="row d-flex justify-content-center mt-5">
          <Button className="col-4 my-5" variant="success" onClick={() => setOpenBook(true)}>Create Recipe</Button>
          <Card className="col-10">
            <Card.Body>
              <h2>Overview</h2>
              <p>This application simulates a book effect for creating recipes, guiding users through a series of steps to create a complete recipe. It utilizes a modern web technology stack to provide a seamless and interactive user experience.</p>

              <h2>Goals</h2>
              <ul>
                <li>Demonstrate a book effect in a web application interface.</li>
                <li>Guide users through the recipe creation process in an intuitive and engaging manner.</li>
              </ul>

              <h2>Technology Stack</h2>
              <p><strong>Frontend:</strong> React</p>
              <p><strong>Styling:</strong> React Bootstrap, Sass</p>

              <h2>User Experience Flow</h2>
              <ol>
                <li><strong>Create Recipe Button:</strong> Users start the recipe creation process by clicking the "Create Recipe" button.</li>
                <li><strong>Cover Page:</strong> Users enter the recipe name and description on a form presented on the cover page.</li>
                <li><strong>Search and Add Ingredients:</strong> Users can search for and add ingredients from a list. This stage simulates the process of gathering ingredients for the recipe.</li>
                <li><strong>Adding Instructions:</strong> Users input step-by-step instructions for preparing the recipe.</li>
                <li><strong>Submit and Close:</strong> After submitting the recipe, the book effect closes, marking the completion of the recipe creation process.</li>
              </ol>

              <h2>Areas for Improvement</h2>
              <ul>
                <li><strong>Data Persistence:</strong> Integration with a backend API is required for storing recipe data persistently. The frontend code is prepared for this integration.</li>
                <li><strong>Ingredients Page:</strong>
                  <ul>
                    <li>An API is needed for ingredient search functionality to replace the current hardcoded list.</li>
                    <li>Implementation of the remove button functionality is pending.</li>
                    <li>UI enhancements are recommended for improving the visual appeal and usability.</li>
                  </ul>
                </li>
                <li><strong>UI Enhancements:</strong> General improvements to the user interface can further enhance the visual appeal and user experience.</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      }
    </div>
  )
}
export default Home;