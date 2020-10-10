import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import logo from "../food.jpg";



function HomePage() {
  // variables
  const [projectList, setProjectList] = useState([]);

  //methods

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}project/`)
      .then((results) => {
        return results.json();
      })

      .then((data) => {
        setProjectList(data);
      });
    // setProjectList(allProjects);
  }, []);

 return (
   <div>
     <div className = "home-content">
       <img id= "home-image" src= {logo} className= "home-img"/>     
       <h2>This platform is the source of awareness for food wastage.</h2>
       <p>The main purpose of this project is helping the people who are struggling for their everday meals. This platform will the source to provide them every single meals as much as possible.</p>
     </div>

   </div>
 )

  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;
