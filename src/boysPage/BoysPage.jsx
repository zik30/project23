import { useEffect, useState } from "react";
import BoysCard from "../components/BoysCard";
import stl from "./boysPage.module.scss";

const BoysPage = () => {
  const URL = "../students.json";

  const [ students, setStudents ] = useState([])

  const getStudents = async () => {
    const response = await fetch("./src/students.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();

    setStudents(data)
    console.log(data[0])
    
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>BoysPage</h1>
      <div className={stl.boysPage}>
        
        {
            students.map( (student, i) => (
                <BoysCard key={i} name={student.name} phrase={student.phrase} url={student.url}/>
            ))
        }
        
      </div>
    </div>
  );
};

export default BoysPage;
