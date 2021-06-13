import React, { Component } from "react";
import "./App.css";
import NavRanking from "./NavRanking";
import HotMemes from "./HotMemes";
import RegularMemes from "./RegularMemes";
import MainPage from "./MainPage";
import Error404 from "./Error404";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";

import meme_1 from "../IMG_memes/meme_1.png";
import meme_2 from "../IMG_memes/meme_2.jpg";
import meme_3 from "../IMG_memes/meme_3.png";
import meme_4 from "../IMG_memes/meme_4.png";
import meme_5 from "../IMG_memes/meme_5.jpg";
import meme_6 from "../IMG_memes/meme_6.png";
import meme_7 from "../IMG_memes/meme_7.jpg";
import meme_8 from "../IMG_memes/meme_8.jpg";
import meme_9 from "../IMG_memes/meme_9.png";
import meme_10 from "../IMG_memes/meme_10.jpg";
import meme_11 from "../IMG_memes/meme_11.jpg";
import meme_12 from "../IMG_memes/meme_12.jpg";
import meme_13 from "../IMG_memes/meme_13.png";
import meme_14 from "../IMG_memes/meme_14.jpg";
import meme_15 from "../IMG_memes/meme_15.jpg";
import meme_16 from "../IMG_memes/meme_16.png";

import logo from "../logo.png";

class App extends Component {
  state = {
    logo: [
      {
        logo: logo,
      },
    ],

    memesAll: [
      {
        id: 1,
        title: "Meme 1",
        upvotes: 16,
        downvotes: -4,
        img: meme_1,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 2,
        title: "Meme 2",
        upvotes: 1,
        downvotes: -2,
        img: meme_2,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 3,
        title: "Meme 3",
        upvotes: 6,
        downvotes: -6,
        img: meme_3,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 4,
        title: "Meme 4",
        upvotes: 0,
        downvotes: 0,
        img: meme_4,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 5,
        title: "Meme 5",
        upvotes: 40,
        downvotes: -1,
        img: meme_5,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 6,
        title: "Meme 6",
        upvotes: 0,
        downvotes: 0,
        img: meme_6,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 7,
        title: "Meme 7",
        upvotes: 10,
        downvotes: 0,
        img: meme_7,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 8,
        title: "Meme 8",
        upvotes: 0,
        downvotes: 0,
        img: meme_8,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 9,
        title: "Meme 9",
        upvotes: 5,
        downvotes: -1,
        img: meme_9,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 10,
        title: "Meme 10",
        upvotes: 2,
        downvotes: 0,
        img: meme_10,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 11,
        title: "Meme 11",
        upvotes: 35,
        downvotes: -5,
        img: meme_11,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 12,
        title: "Meme 12",
        upvotes: 0,
        downvotes: 0,
        img: meme_12,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 13,
        title: "Meme 13",
        upvotes: 3,
        downvotes: -20,
        img: meme_13,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 14,
        title: "Meme 14",
        upvotes: 0,
        downvotes: 0,
        img: meme_14,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 15,
        title: "Meme 15",
        upvotes: 0,
        downvotes: -3,
        img: meme_15,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
      {
        id: 16,
        title: "Meme 16",
        upvotes: 6,
        downvotes: 0,
        img: meme_16,
        star: <i className="far fa-star star"></i>,
        click: false,
        favourite: false,
      },
    ],
  };

  downVotesCounter = (id) => {
    let memesAll = [...this.state.memesAll];
    memesAll.forEach((meme) => {
      if (meme.id === id) {
        meme.downvotes = meme.downvotes - 1;
        meme.click = true;
      }
    });
    this.setState({ memesAll });
  };

  upVotesCounter = (id) => {
    let memesAll = [...this.state.memesAll];
    memesAll.forEach((meme) => {
      if (meme.id === id) {
        meme.upvotes = meme.upvotes + 1;
        meme.click = true;
      }
    });
    this.setState({ memesAll });
  };

  clickMeme = (id) => {
    let memesAll = [...this.state.memesAll];
    memesAll.forEach((meme) => {
      if (meme.id === id) {
        meme.favourite = true;
      }
    });
    this.setState({ memesAll });
  };

  render() {
    return (
      <>
        <div className="container">
          <BrowserRouter>
            <div className="nav">
              <Link to="/">
                <img className="logoImg" src={logo} alt="logo"></img>
              </Link>
              <p className="memes">Memes Top List</p>
              <NavRanking />
            </div>
            <div className="pagesPath">
              <Switch>
                <Route path="/hot">
                  <HotMemes
                    memesAll={this.state.memesAll}
                    upVotesCounter={this.upVotesCounter}
                    downVotesCounter={this.downVotesCounter}
                    clickMeme={this.clickMeme}
                  />
                </Route>
                <Route exact path="/">
                  <Redirect to="/" />
                  <MainPage
                    memesAll={this.state.memesAll}
                    upVotesCounter={this.upVotesCounter}
                    downVotesCounter={this.downVotesCounter}
                    clickMeme={this.clickMeme}
                  />
                </Route>
                <Route path="/regular">
                  <RegularMemes
                    memesAll={this.state.memesAll}
                    upVotesCounter={this.upVotesCounter}
                    downVotesCounter={this.downVotesCounter}
                    clickMeme={this.clickMeme}
                  />
                </Route>
                <Route path="*">
                  <Error404 />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
          <footer>
            <p>Copyright © 2021</p>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
