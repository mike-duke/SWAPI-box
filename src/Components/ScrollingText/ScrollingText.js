import React from 'react'
import Loading from '../Loading/Loading'
import './ScrollingText.scss'

const ScrollingText = ({ crawl, title, episode, date, loadingStatus }) => {

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
              <p className="date">(Release date: {date})</p>
            </div>
            <p className="crawl-text">{crawl}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default ScrollingText