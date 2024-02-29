import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div className="row d-flex justify-content-center mt-5">
      <Card className="col-10 col-md-8">
        <Card.Body>
          <Card.Title>SeHee Son.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">San Francisco, CA</Card.Subtitle>
          <div className="row mb-5">
            <div className="col-12 col-sm-8">
              <Card.Text>
                  Hi, I am SeHee, a software engineer specializing in frontend development.
                  I am proficient in JavaScript, React, React Native, and the Vue framework.
                  Over the past 5 years, I've worked in fast-paced startup environments that required collaborative work, 
                  strong communication skills, problem-solving ability, and flexibility. I have successfully completed 
                  all my tasks and brought a positive aspect to the team!
              </Card.Text>
              <Card.Text>
                  Besides work, I am passionate about exploring desserts, baking, and finding good sweet spots around the world.
                  I am really excited about Pastelar AI's mission to connect all sweets. Please take a look at my work, 
                  and let me know which part you want to see more of, as this work is missing many features. I can show more 
                  about UI styling work, including Storybook, theming, etc., or I can show more about integrating RESTful APIs 
                  along with OpenAI. I can also demonstrate my knowledge in React, Redux, and react hooks. Please let me know!
              </Card.Text>
            </div>
            <div className="col-12 mt-5 col-sm-4 mt-sm-0">
              <img src="mycake.png" width="100" className="col-12 col-xm-4" style={{ borderRadius: '30px'}} alt="" />
            </div>
          </div>
          <Card.Link href="https://www.linkedin.com/in/sehee-son/">Linkedin</Card.Link>
          <Card.Link href="https://github.com/seheesf88">Github</Card.Link>
          <Card.Link href="https://seheeson.com">Portfolio</Card.Link>
          <Card.Link href="../SeHee_Son_resume.pdf" download>Resume</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default About;