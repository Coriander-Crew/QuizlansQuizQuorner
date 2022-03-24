import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import testimonialPhoto1 from '../images/testimonialPhoto1.png';
import testimonialPhoto2 from '../images/testimonialPhoto2.png';
import testimonialPhoto3 from '../images/testimonialPhoto3.png';

const LandingPage = () => {
  return (
  <FirstNesting>
    <StyledH1 id="headline">
      The #1 place for all of your quiz needs.  Choose between pre-built quiz or a custom quiz.  Choose to go solo or challenge your friends.  Definitely the best way to improve your happy hour trivia odds.
    </StyledH1>
    <div id="intro1">
      <InlineDuo>
        <LeftPhoto>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*" src={testimonialPhoto1}></img>
        </LeftPhoto>
      </InlineDuo>
      <InlineDuo>
        <RightText>
          Create a quiz to study for your next midterm exam
        </RightText>
      </InlineDuo>
    </div>
    <div id="intro2">
      <InlineDuo>
        <LeftText>
          Take a pre-built quiz to sharpen your skills.
        </LeftText>
      </InlineDuo>
      <InlineDuo>
        <RightPhoto>
          <img alt="Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*" src={testimonialPhoto1}></img>
        </RightPhoto>
      </InlineDuo>
    </div>
    <div id="rhetoricalIntro3">
      <InlineDuo>
        <LeftPhoto>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*" src={testimonialPhoto1}></img>
        </LeftPhoto>
      </InlineDuo>
      <InlineDuo>
        <RightText>
          Create a quiz to challenge your friends to see how well they know you.
        </RightText>
      </InlineDuo>
    </div>
    <div id="testimonials">
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #1" src={testimonialPhoto1}></img>
        </center>
        <Testimonial>
          "Steve Quizlan changed my life!"
        </Testimonial>
      </InlineTrio>
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #2" src={testimonialPhoto2}></img>
        </center>
        <Testimonial>
          "I never knew taking quizzes could be so fun!"
        </Testimonial>
      </InlineTrio>
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #3" src={testimonialPhoto3}></img>
        </center>
        <Testimonial>
          "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
        </Testimonial>
      </InlineTrio>
    </div>
    <StyledH2 id="getStartedHeading">How to Get Started</StyledH2>
    <StyledH3 id="getStartedInfo1">Step One: Sign Up for an Account</StyledH3>
    <StyledH3 id="getStartedInfo">Step Two: Start Taking Quizzes!</StyledH3>
    <Link to="/login">
      <center>
         <StyledButton id="signup">Sign Up Now!</StyledButton>
      </center>
    </Link>
  </FirstNesting>
  );
};

const FirstNesting = styled.div`
  background-color: var(--yellow);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  width: 90%;
  margin: auto;
`

const LeftText = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  margin-left: 30%;
  text-align: left;
  float: left;
`

const LeftPhoto = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  margin-left: 30%;
  float: left;
`

const RightText = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  margin-right: 30%;
  text-align: right;
  float: right;
`

const RightPhoto = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  margin-right: 30%;
  float: right;
`

const InlineDuo = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 50%;
`

const InlineTrio = styled.span`
  display: inline-block;
  width: 33%;
  margin: auto;
  margin-top: 50px;
`

const StyledButton = styled.button`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  border-width: 0;
  box-shadow: var(--standard-shadow);
  margin-bottom: 20px;
  width: 25%;
  font-size: 24px;
`
const StyledH1 = styled.h1`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const StyledH2 = styled.h2`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`

const StyledH3 = styled.h3`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`

  const Testimonial = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

export default LandingPage;
