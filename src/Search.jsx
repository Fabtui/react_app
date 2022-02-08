import React, {Component} from 'react'
import {SearchCheckboxes} from './SearchCheckboxes'
import {SearchScales} from './SearchScales'
import './stylesheets/search.css'

export class Search extends React.Component {
  constructor (props) {
    super (props)
    this.state = ({
      selectedNotes: []
    })
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(selectedNotesArray) {
    selectedNotesArray.sort(function(a, b){return a - b;});
    this.setState({
      selectedNotes: selectedNotesArray
    })
  }

  render () {
    return <div className='container'>
      <SearchCheckboxes onChange={this.handleChange}></SearchCheckboxes>
      <SearchScales selectedNotes={this.state.selectedNotes}/>
    </div>
  }
}