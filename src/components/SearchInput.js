import React , { Component, PropTypes } from 'react';

class SearchInput extends Component {



  render (){
    return (
      <div className='search-input-box'>
        <input
          className='search-input'
          type='text'
          placeholder={this.props.placeholder}

          />
      </div>
    )
  }
}

SearchInput.PropTypes = {
  placeholder:PropTypes.string
}

exports default SearchInput
