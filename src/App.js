// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'; 
// // import RecipeList from './RecipeList';

// const API_URL = 'http://localhost:5000/';

// function App() {
//   const [recipes, setRecipes] = useState([]);

//   const handleShowItems = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       console.log("called")
//       alert(JSON.stringify(response.data))
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   return (
//     <div className="App">
     
//         <h1>Recipe Bank</h1>
//         <button type="button" onClick={handleShowItems}>Show Recipes</button>
//         <RecipeList rps={recipes} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RecipeList from './RecipeList'; // Import RecipeList here

const API_URL = 'http://localhost:5000/';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleShowItems = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("called")
      // alert(JSON.stringify(response.data))
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <body>
      {/* <div className="App"> */}
        <h1>Recipe Bank</h1>
        <button type="button" onClick={handleShowItems}>Show Recipes</button>
        <RecipeList rps={recipes} />
      {/* </div> */}
    </body>
  );
}

export default App;