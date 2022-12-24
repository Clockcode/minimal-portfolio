import React from 'react'
import { Link } from "react-router-dom";
import home from '../Styles/home.css'
export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Design is my thing.</h1>
      <div className="subtitle">
        <span className="subtitle_sentence">
          <span className="subtitle_sentence_word">I</span>
          <Link className="subtitle_sentence_link" to="work">
            work
          </Link>
          <span className="subtitle_sentence_word">on it.</span>
        </span>
        <span className="subtitle_sentence">
          <span className="subtitle_sentence_word">I</span>
          <span className="subtitle_sentence_link">read</span>
          <span className="subtitle_sentence_word">about it.</span>
        </span>
        <span className="subtitle_sentence">
          <span className="subtitle_sentence_word">I</span>
          <Link className="subtitle_sentence_link" to="articles">
            write
          </Link>
          <span className="subtitle_sentence_word">about it.</span>
        </span>
        <span className="subtitle_sentence">
          <span className="subtitle_sentence_word">I do</span>
          <Link className="subtitle_sentence_link" to="about">
            other stuff
          </Link>
          <span className="subtitle_sentence_word">to.</span>
        </span>
      </div>
    </div>
  );
}
