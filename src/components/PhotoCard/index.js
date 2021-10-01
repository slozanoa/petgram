import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useNearScreen } from "../../hook/useNearScreen";
import { FavButton } from "../FavButton";
import { Link } from "@reach/router";
import { useMuationToogleLike } from "../../container/ToggleLikeMutation";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };
  console.log("{ mutation, mutationLoading, mutationError }", {
    mutation,
    mutationLoading,
    mutationError,
  });

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
