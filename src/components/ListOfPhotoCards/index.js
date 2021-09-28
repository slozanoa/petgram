import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";
import { getPhotos } from "../../hoc/withPhotos";
export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId },
  });
  const cdcd = data;
  if (!data) {
    return <div>Cargando...</div>;
  }
  console.log(data);
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
