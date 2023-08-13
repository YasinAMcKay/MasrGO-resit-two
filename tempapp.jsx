import React, { useEffect, useState} from 'react'

class App extends component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('http://localhost:3000/country')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }

    else {
      return(
        <div className="App">
          <ul>
            {items.map(item => (
              <li key ={item.id}>
                Name: {item.city} | {item.country}
              </li>
            ))};
          </ul>
        </div>
      );

    }

  }
}