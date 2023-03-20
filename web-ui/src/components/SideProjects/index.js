import React, { Component } from 'react';
import { connect } from 'react-redux';

function Picture_Displayed({picture}) {
  console.log(picture);
  return (
      <img src={"imgs/" + picture + ".png"} id="nektine-img" alt={picture}></img>
  );
}

function SideProjects({projects}) {

  let currProject = projects[16];
  let pictures = currProject.imgs;

  let pictures_displayed = pictures.map((picture) => (
    <Picture_Displayed picture={picture} key={picture.id} />
  ));

  return (
    <div className="nektine">
      <div className="nektine-projects">{pictures_displayed}</div>
    </div>
  );
}

export default connect(({projects}) => ({projects}))(SideProjects);
