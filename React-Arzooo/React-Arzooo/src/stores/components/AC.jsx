import React, { useEffect } from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  useEffect(() => {
    fetch('http://192.168.1.163:8093/admin/ac')
    .then(response => response.json())
  
  },[])

  return (
    <>
      <div className="proTitle">
        <h2>Air Condition</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/ac'>
                <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AC;
