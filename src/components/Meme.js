import React from "react";

const Meme = (props) => {
  const changeStar = {
    color: "gold",
  };

  const { title, img, upvotes, downvotes, id, star, click, favourite, cross} =
    props.meme;

  return (
    <div className="memeBox">
      <div className="titleStar">
        <h3>{title}</h3>
        <button

        style={favourite === true ? changeStar : null}
        className="starGold"
        onClick={() => props.clickMemeTrue(id)}
        >
          {star}

        </button>
        <button
        className="starRed"
        onClick={() => props.clickMemeFalse(id)}
          >
          {cross}

        </button>
      </div>
      <hr />
      <img className="memeImg" src={img} alt="meme"></img>
      <hr />
      <button
        disabled={click}
        className="upBtn"
        onClick={() => props.upVotesCounter(id)}
      >
        <i className="far fa-thumbs-up up"></i>
        <div className="vote">{upvotes}</div>
      </button>
      <button
        disabled={click}
        className="downBtn"
        onClick={() => props.downVotesCounter(id)}
      >
        <i className="far fa-thumbs-down down"></i>
        <div className="vote">{downvotes}</div>
      </button>
    </div>
  );
};

export default Meme;
