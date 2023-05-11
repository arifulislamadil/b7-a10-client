import React from "react";
import { Link } from "react-router-dom";


const Chef = ({ chef }) => {
  const { id, name, experience, picture, recipes } = chef;


  
  return (
    <div className="border-solid border-2 border-sky-500">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-left text-center">
            <h2 className="card-title text-left">{name}</h2>
            <div className="flex gap-4">
              <p className="text-left">Experience : {experience}</p>
              <p>Recipes : {recipes.length}</p>
            </div>

            <div className="flex gap-4">
              <div className="card-actions">
                <button className="btn btn-primary px-10">Like <span className="text-gray-900 ml-2 rounded-full p-2 bg-orange-600">4</span></button>
              </div>

              <div className="card-actions">
              {
                  <Link to={`/chef/${id}`} className="btn btn-primary px-10">
                  View Recipes
                
                </Link>
                
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
