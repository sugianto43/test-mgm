import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function PictureDetail(props) {
  const params = useParams();
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then((res) => {
        console.log("ini detail", res);
        setPicture(res.data);
      })
      .catch();
  }, [params.id]);
  return (
    <div className="picture-container">
      <div className="pict-detail">
        <img
          src={picture.url}
          alt={picture.title}
          className="images"
          style={{ height: "300px", marginTop: "60px" }}
        />
        <p>Album id: {picture.albumId}</p>
        <p>Picture id: {picture.id}</p>
        <p>Title: {picture.title}</p>
        {/* <button onClick={addFavorite}>Add to favorite</button> */}
      </div>
    </div>
  );
}

export default PictureDetail;
