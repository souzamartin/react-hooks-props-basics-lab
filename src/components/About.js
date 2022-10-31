import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </>
  )
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
        github={props.github}
        linkedin={props.linkedin}
      />
    </div>
  );
}

export default About
