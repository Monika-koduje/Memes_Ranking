import React from "react";
import "./App.css";
import Meme from "./Meme";

const MainPage = (props) => {
  const hotRegularMemesAll = props.memesAll.map((meme) => (
    <Meme
      key={meme.id}
      meme={meme}
      upVotesCounter={props.upVotesCounter}
      downVotesCounter={props.downVotesCounter}
      clickMeme={props.clickMeme}
    />
  ));

  return (
    <>
      <center>
        <h5>All memes counter ({hotRegularMemesAll.length})</h5>
      </center>
      <div>
        {hotRegularMemesAll.length > 0 ? (
          hotRegularMemesAll
        ) : (
          <h1>Ranking is empty...Time for more memes!!</h1>
        )}
      </div>
    </>
  );
};

export default MainPage;
