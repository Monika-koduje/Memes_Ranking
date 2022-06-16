import React from "react";
import "./App.css";
import Meme from "./Meme";

const FavouriteMemes = (props) => {
    const favouriteMeme = props.memesAll.filter(
        (meme) => meme.favourite === true
      );
    const favouriteMemesAll = favouriteMeme.map((meme) => (
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
          <h5>Favourite memes counter ({favouriteMemesAll.length})</h5>
        </center>
        <div>
          {favouriteMemesAll.length > 0 ? (
            favouriteMemesAll 
          ) : (
            <h1>Favourite memes ranking is empty...you don't have favourite memes!!</h1>
          )}
        </div>
      </>
    );
  };
  











export default FavouriteMemes;


