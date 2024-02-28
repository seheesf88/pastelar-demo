import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div className="row d-flex justify-content-center mt-5">
      <Card className="col-8">
        <Card.Body>
          <Card.Title>SeHee Son.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">San Francisco, CA</Card.Subtitle>
          <Card.Text>
            Software Engineer with 4+ years of experience adept at front end development with a focus on reliability, scalability and innovative solutions.
            Thrives in a fast-paced startup culture, possessing keen attention to detail, solid problem-solving abilities, and strong communication skills.
          </Card.Text>
          <Card.Link href="https://www.linkedin.com/in/sehee-son/">Linkedin</Card.Link>
          <Card.Link href="https://github.com/seheesf88">Github</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default About;