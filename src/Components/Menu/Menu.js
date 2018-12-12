import React, {Component} from 'react'
import './Menu.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

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
        <div className={this.state.addClass} onMouseEnter={() => this.toggleOpen()} onMouseLeave={() => this.toggleOpen()}>
          <div className="wing bar bar1"></div>
          <div className="wing bar bar2"></div>
          <div className="wing wing1"></div>
          <div className="wing wing2"></div>
          <div className="wing-tip wing-tip1"></div>
          <div className="wing-tip wing-tip2"></div>
          <div className="wing-tip wing-tip3"></div>
          <div className="wing-tip wing-tip4"></div>
            <ul className="ul" onClick={(e) => this.handleMenuClick(e)}>
              <NavLink to="/people" className="link">people</NavLink>
              <NavLink to="/vehicles" className="link">vehicles</NavLink>
              <NavLink to="/planets" className="link">planets</NavLink>
              <NavLink to="/favorites" className="link">favorites</NavLink><span className="favorites-ctr">{localStorageObj ? localStorageObj.length : 0}</span>
            </ul>
        </div>
        <NavLink id="logo-container" to="/">
          <h1 className="logo">swapi-box</h1>
        </NavLink>
      </div>
    )
  }
}

Menu.proptypes = {
  menuSelect: PropTypes.func.isRequired, 
  favorites: PropTypes.array
}

export default Menu