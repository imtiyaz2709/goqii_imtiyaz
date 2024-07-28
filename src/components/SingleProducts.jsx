import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const SingleProducts = () => {
  const [data, setData] = useState({});

  const { product_id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${product_id}?client_id=3l8GT_4zBofmtuq_yq5nSy8WkEU9I6EHxvXYXsm0pzM`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  },);

  return (
    <>
    <Header/>
    <div className="max-w-4xl flex md:flex-row md:gap-4 flex-col  mx-auto p-4 bg-white shadow-lg rounded-lg">
     <div className="flex-1">
     <img
     src={data.urls?.regular}
     alt={data.description}
     className="w-full h-[300px] object-contain rounded-lg mb-4 animate__animated animate__swing"
   />
     </div>
     <div className="flex-1">
      <h1 className="text-2xl font-bold mb-2">
        {data.alt_description || "No description"}
      </h1>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Location:</span> {data.user?.location}
      </p>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Photo Details</h2>
          <p className="text-gray-600">
            Camera: {data.exif?.make} {data.exif?.model}
          </p>
          <p className="text-gray-600">Exposure: {data.exif?.exposure_time}s</p>
          <p className="text-gray-600">Aperture: f/{data.exif?.aperture}</p>
          <p className="text-gray-600">
            Focal Length: {data.exif?.focal_length}mm
          </p>
          <p className="text-gray-600">ISO: {data.exif?.iso}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">
          <i className="fas fa-download"></i> Downloads: {data.downloads}
        </span>
        <span className="text-gray-600">
          <i className="fas fa-heart"></i> Likes: {data.likes}
        </span>
      </div>
      </div>
    </div>
    </>
  );
};

export default SingleProducts;
