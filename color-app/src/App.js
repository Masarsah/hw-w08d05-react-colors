import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile';
// import ColorForm from './components/ColorForm';
// import Color from './components/Color';
import Search from './components/Search';
import ColorPicker from './components/ColorPicker'

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      activeColor: [],
      modal: false,
      search: false,
      rgb: ''
    }
  }


  componentDidMount() {
    // fetch all the data from our API
    // update our state "colors" with that data
    console.log('fetching data');
    fetch('http://localhost:3001/colors')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          colors: data
        })

      })
      .catch(error => {
        console.log(error)
      })
  }

  createNewColor(color) {
    /* 
      posts data to the database, the database
      sends that same data back.
      add that data to the 'colors' state
    */
    const url = 'http://localhost:3001/colors'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        const updatedColors = this.state.colors.concat([data]);
        console.log(updatedColors)
        this.setState({
          colors: updatedColors,
          activeColor: [data],
          modal: false
        })
      })
      .catch(error => {
        console.log(error);
      })
  }




  updateColor(color) {
    const url = `http://localhost:3001/colors/${color.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(color)
    })
      .then(response => response.json())
      .then(data => {

        const updatedColors = this.state.colors.map(el => {
          return el.id === data.id ? data : el
        })
        console.log('current state: ', this.state.colors);
        console.log('new state: ', updatedColors)

        this.setState({
          colors: updatedColors,
          activeColor: [color],
          modal: false
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteColor(id) {
    const url = `http://localhost:3001/colors/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        const updatedColors = this.state.colors.filter(color => color.id !== id)
        this.setState({
          colors: updatedColors,
          activeColor: null
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmit(color) {
    if (this.state.activeColor) {
      this.updateColor(color)
    } else {
      this.createNewColor(color)
    }
  }


  renderTiles(allColors) {
    // map through the state "colors" 
    // and make a tile for each TV color
    return allColors.map((color, i) => {
      return (
        <Tile key={color.id}
          color={color}
          swatchStyle={this.swatchStyle.bind(this)}
          setCurrentColor={this.setCurrentColor.bind(this)}
          deleteColor={this.deleteColor.bind(this)}
        />
      )
    })
  }


  setCurrentColor(color) {
    console.log('setting color');
    console.log(color);
  
    this.setState({
      activeColor:color
    })
    // when given a color, set state 'activeColor' to that color
  }

  toggleSearch() {
    this.setState({
      search: !this.state.search
    })
  }

  renderContent() {
    if (this.state.search) {
      return <Search toggleSearch={this.toggleSearch.bind(this)} />
    } else {
      return (
        <div className="home">
          <div className="curent">

            <ColorPicker
              setCurrentColor={this.setCurrentColor.bind(this)}
              swatchStyle={this.swatchStyle.bind(this)}
              activeColor={this.state.activeColor}
              handleSubmit={this.handleSubmit.bind(this)} />
          </div>
          <div className="colors">

            <div className="action-buttons">
              <div onClick={this.toggleSearch.bind(this)}>
                <img src="https://i.imgur.com/WX7bym4.png" alt="" />
              </div>
              {/* <div onClick={this.toggleModal.bind(this)}>+</div> */}
            </div>
            {this.renderTiles(this.state.colors)}
          </div>
        </div>
      )
    }
  }
  swatchStyle(rgb) {
    this.state.rgbb = rgb.split(',')
    return {
      width: '250px',
      height: '250px',
      margin: '0 auto',
      backgroundColor: `rgb( ${this.state.rgbb[0]}, ${this.state.rgbb[1]},${this.state.rgbb[2]}`
    }
  }


  render() {
    return (
      <div>
        <header>My Colors</header>
        {this.renderContent()}

        {/* <ColorForm
            handleSubmit={this.handleSubmit.bind(this)}
            // toggleModal={this.toggleModal.bind(this)}
            activeColor={this.state.activeColor}
          /> : ''} */}



      </div>
    );
  }
}

export default App;