import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={request.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={request.requestTrending} />
      <Row rowID="4" title="Horror" fetchURL={request.requestHorror} />
      <Row rowID="5" title="Top Rated" fetchURL={request.requestTopRated} />
    </div>
  );
};

export default Home;
