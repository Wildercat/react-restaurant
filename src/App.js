import React from 'react';
import axios from 'axios';

import './App.css';
import BSNav from './global-components/BSNav';
import appData from './json/appData.json';
import CardCols from './CardCols';
import Splash from './Splash';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: null
    }
  }



  async getMenuData() {
    let menuData = [];
    for (let i = 0; i < 5; i++) {

      let response;
      try {
        response = await axios.get('https://entree-f18.herokuapp.com/v1/menu/12');
      } catch (err) {
        console.log(err);
      }
      response.data.menu_items = response.data.menu_items.map(item => {
        // random number in range 10-50
        item.price = Math.ceil(40 * Math.random() + 10);
        return item;
      })
      menuData.push(response.data);
    }

    localStorage.setItem('menuData', JSON.stringify(menuData));

    this.setState({ 'menuData': menuData })
  }

  componentDidMount() {
    // if there is a saved menu, add it to state, else fetch new
    localStorage.getItem('menuData') ? this.setState({
      menuData: JSON.parse(localStorage.getItem('menuData'))
    }) : this.getMenuData();
  }

  render() {
    let nav_collapse = 'burger1';
    return (
      <div className="App container">
        
        <Splash className='row p-3' imgURL={appData.content.splash_image}>
          <div className='col'>
            <BSNav navId={nav_collapse} navbar_items={appData.content.navbar_items} />
            <div className='row justify-content-left'>
                <h1 className='display-1 text-light'>{appData.content.name}</h1>
            </div>
            <div className='row'>
              <h3 className='text-light font-weight-light'>{appData.content.address}</h3>
            </div>
            <div className='row'>
              <h5 className='text-light font-weight-lighter'>{appData.content.hours}</h5>
            </div>
          </div>
          
        </Splash>
        <div className='row p-3'>
          <a name='menu1'></a>

          <CardCols menuData={this.state.menuData} cols={appData.content.top_cols} />


        </div>
        <div className='row p-3'>
        <a name='menu2'></a>
          <CardCols menuData={this.state.menuData} cols={appData.content.bot_cols} />
        </div>
      </div>
    );
  }
}

export default App;
