import React from "react";
import "./App.css";
import Meme from "./Meme";

const RegularMemes = (props) => {
  const regularMemes = props.memesAll.filter(
    (meme) => meme.upvotes + meme.downvotes <= 5
  );
  const regularMemesAll = regularMemes.map((meme) => (
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
        <h5>Regular memes counter ({regularMemesAll.length})</h5>
      </center>
      <div>
        {regularMemesAll.length > 0 ? (
          regularMemesAll
        ) : (
          <h1>Ranking is empty...Time for more memes!!</h1>
        )}
      </div>
    </>
  );
};

export default RegularMemes;
