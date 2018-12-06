import React from 'react';
import './ScrollingText.scss';

const ScrollingText = ({ crawl, title, episode }) => {

  const numeralizeEpisode = (episodeNumber) => {
    const numeralArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
    return numeralArray[episodeNumber - 1];
  }

  if (title === undefined) {
    return ''
  } else {
    return (
      <section className="scrolling-text">
        <div className="fade"></div>
        <article className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>{`Episode ${numeralizeEpisode(episode)}`}</p>
              <h1>{title}</h1>
            </div>
            <p className="crawl-text">{crawl}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default ScrollingText;

// component and styling built from the CSS-Tricks article "Star Wars Crawl Text" by Geoff Graham. https://css-tricks.com/snippets/css/star-wars-crawl-text/