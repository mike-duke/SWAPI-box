import React, {Component} from 'react'
import './Menu.scss'


class Menu extends Component {
  constructor() {
    super()
    this.state = {
      addClass: 'circle-menu'
    }
  }


  toggleOpen = () => {
    if (this.state.addClass === 'circle-menu') {
      this.setState({
        addClass: 'open circle-menu'
      })
    } else {
      this.setState({
        addClass: 'circle-menu'
      })
    }
  }

  handleMenuClick = (e) => {
    if (!e.target.classList.contains('ul')) {
      this.props.menuSelect(e.target.innerText)
    }
  }

  render() {
    let localStorageObj = JSON.parse(localStorage.getItem('favorites'))
    return (
      <div className="menu-container">
        <div className={this.state.addClass} onClick={() => this.toggleOpen()}>
          <div className="wing bar bar1"></div>
          <div className="wing bar bar2"></div>
          <div className="wing wing1"></div>
          <div className="wing wing2"></div>
          <div className="wing-tip wing-tip1"></div>
          <div className="wing-tip wing-tip2"></div>
          <div className="wing-tip wing-tip3"></div>
          <div className="wing-tip wing-tip4"></div>
            <ul className="ul" onClick={(e) => this.handleMenuClick(e)}>
              <li>people</li>
              <li>vehicles</li>
              <li>planets</li>
              <li>favorites</li><span className="favorites-ctr">{localStorageObj ? localStorageObj.length : 0}</span>
            </ul>
        </div>
        <h1 className="logo">SWAPI-Box</h1>
      </div>
    )
  }
}

export default Menu