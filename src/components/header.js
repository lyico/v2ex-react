import React , { Component } from 'react';

class Header extends Component{
  render() {
    return(
      <header className='header'>
        <div>
          <a href='https://www.v2ex.com/'>
            <img src='./../static/images/logo@2x.png'/>
          </a>
        </div>
      </header>
    )
  }
}
