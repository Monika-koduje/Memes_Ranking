import React from "react";
import "./App.css";
import Meme from "./Meme";

const HotMemes = (props) => {
  const hotMemes = props.memesAll.filter(
    (meme) => meme.upvotes + meme.downvotes > 5
  );
  const hotMemesAll = hotMemes.map((meme) => (
    <Meme
      key={meme.id}
      meme={meme}
      upVotesCounter={props.upVotesCounter}
      downVotesCounter={props.downVotesCounter}
      clickMemeTrue={props.clickMemeTrue}
      clickMemeFalse={props.clickMemeFalse}
    />
  ));

  return (
    <>
      <center>
        <h5>Hot memes counter ({hotMemesAll.length})</h5>
      </center>
      <div>
        {hotMemesAll.length > 0 ? (
          hotMemesAll
        ) : (
          <h1>Ranking is empty...it's so sad...Are you sure? VOTE NOW</h1>
        )}
      </div>
    </>
  );
};

export default HotMemes;
