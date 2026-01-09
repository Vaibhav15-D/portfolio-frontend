function openCourseDetail(type){
  learnModal.style.display="block";

  const courses={
    python:["Python for Beginners","Complete Python basics to advanced.","Syntax, Loops, OOP, Projects"],
    sql:["SQL for Data Analysis","Master databases.","Joins, Aggregates, Queries"],
    powerbi:["Power BI Mastery","Professional dashboards.","DAX, Reports"],
    ml:["Machine Learning Foundations","Understand ML concepts.","Algorithms, Models"],
    ai:["Artificial Intelligence","Core AI systems.","NLP, Vision"],
    fastapi:["FastAPI Backend","Modern APIs.","CRUD, Auth"],
    django:["Django Full Stack","Build websites.","Models, Views"],
    js:["JavaScript Mastery","Frontend logic.","DOM, ES6"],
    ds:["Data Science Essentials","Data analysis skills.","Pandas, Numpy"]
  };

  learnTitle.innerText=courses[type][0];
  learnDesc.innerText=courses[type][1];
  learnTopics.innerText=courses[type][2];
}

function closeLearn(){learnModal.style.display="none";}
