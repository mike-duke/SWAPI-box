import React from 'react'
import Loading from '../Loading/Loading'
import './ScrollingText.scss'

const ScrollingText = ({ crawl, title, episode, loadingStatus }) => {

    const numeralArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
    const numeral = numeralArray[episode - 1]

  if (loadingStatus) {
    return <Loading />
  } else {
    return (
      <section className="scrolling-text">
        <div className="fade"></div>
        <article className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>{`Episode ${numeral}`}</p>
              <h1>{title}</h1>
            </div>
            <p className="crawl-text">{crawl}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default ScrollingText

// component and styling built from the CSS-Tricks article "Star Wars Crawl Text" by Geoff Graham. https://css-tricks.com/snippets/css/star-wars-crawl-text/