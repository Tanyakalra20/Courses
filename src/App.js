import React from "react";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";

const App = () => {
   const [courses, setCourses] = useState(null);
   const [loading, setLoading] = useState(true);
   const [category, setCategory] = useState(filterData[0].title);

    async function fetchData() {
      setLoading(true);
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
         } 
      catch (error) 
      {
        toast.error("something went wrong");
      }
      setLoading(false);
    };

    useEffect (() => {
      fetchData();
    }, [] )


  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div>
           <div>
        <Filter filterData={filterData}
            category = {category}
            setCategory = {setCategory}
        />
           </div>

          <div className="w-[11/12] flex flex-wrap max-w-[1200px]  mx-auto justify-center items-center min-h-[50vh]">
          {
          loading ? (<Spinner/>) : (<Cards courses={courses}  category = {category}/>)
           }
           </div>
      </div>

   
    </div>
  );
};

export default App;
