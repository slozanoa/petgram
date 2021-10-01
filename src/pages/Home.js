import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Fragment>
  );
};
