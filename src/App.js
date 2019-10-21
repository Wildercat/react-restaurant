import React from 'react';
import axios from 'axios';

import BSCard from './global-components/BSCard'
import './App.css';
import BSNav from './global-components/BSNav';
import ArrayToHtml from './global-components/ArrayToHtml';
import appData from './json/appData.json';
import ArrayToAHref from './global-components/ArrayToAHref';
import ArrayToHtmlParent from './global-components/ArrayToHtmlParent';
import CardCols from './CardCols';


class TestCol extends React.Component {
  render() {
    console.log(this);
    return (
      <div className='col-3'>
        {this.props.children}
      </div>
    );
  }
}
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
        response = await axios.get('http://entree-f18.herokuapp.com/v1/menu');
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
        <BSNav navId={nav_collapse} navbar_items={appData.content.navbar_items} />
        <p className="display-3">
          asdfasdf
      </p>
        <div className='row p-3'>

          <CardCols menuData={this.state.menuData} cols={appData.content.top_cols} />
          

        </div>
        <div className='row p-3'>
          <CardCols menuData={this.state.menuData} cols={appData.content.bot_cols} />
        </div>
      </div>
    );
  }
}

export default App;
