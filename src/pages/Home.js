import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCards";

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Fragment>
  );
};
