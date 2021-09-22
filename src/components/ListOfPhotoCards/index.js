import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

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
