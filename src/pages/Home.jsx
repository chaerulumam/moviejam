import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={request.requestUpcoming} />
      <Row title="Popular" fetchURL={request.requestPopular} />
      <Row title="Trending" fetchURL={request.requestTrending} />
      <Row title="Horror" fetchURL={request.requestHorror} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
    </div>
  );
};

export default Home;
