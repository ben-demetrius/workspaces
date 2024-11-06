import React, { useEffect, useState } from "react";
import Card from "./Card";
import { get } from "../js/httpRequests";
import useSWR from "swr";
import { Loading, Error } from "./micro-components/Texts";

const Cards = ({ url }) => {
  const { data, error, isLoading } = useSWR(url, get);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const cards = data?.map((item, i) => {
    return (
      <Card
        key={i}
        title={item.title}
        description={item.description}
        author={item.creator.name}
        date={item.dateModified}
      />
    );
  });

  return <div className="pfa-cards">{cards}</div>;
};

export default Cards;
