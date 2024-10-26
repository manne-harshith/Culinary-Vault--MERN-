
// function RecipeList({rps}) {

//     return (

//         rps.map(rp => {
//             <>
//                 Receipe: {rps.ItemName}
//             </>
//         })
//     )
// }

// export default RecipeList

import React from 'react';

function RecipeList({ rps }) {
  return (
    <body>
        <div>
        {rps.map(rp => (
            <div key={rp.id}> {/* Assuming each recipe has a unique id */}
            Recipe: {rp.ItemName},
            Ingredients: {rp.ItemIngrediens},
            Description: {rp.ItemDescription}

            </div>
        ))}
        </div>
    </body>
  );
}

export default RecipeList;
  