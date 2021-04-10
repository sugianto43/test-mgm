import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => {
        console.log("ini data res", res);
        setPictures(res.data);
      })
      .catch();
  }, []);

  useEffect(()=>{
    localStorage.setItem('favorite', JSON.stringify(favorite))
  }, [favorite])

console.log(favorite)
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {pictures
          // eslint-disable-next-line array-callback-return
          .filter((val) => {
            if (setSearch === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((data, i) => (
            <div className="cards" key={i}>
              <Link to={`detail/${data.id}`}>
                <img src={data.thumbnailUrl} alt={data.title} />
              <p>{data?.title?.slice(0, 15)} ...</p>
              </Link>
              <button style={{marginBottom: '5px'}} onClick={()=>{
                  let array= favorite;
                  let image = data.thumbnailUrl
                  array.push(image)
                  setFavorite([...array])
              }}>add fav</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
