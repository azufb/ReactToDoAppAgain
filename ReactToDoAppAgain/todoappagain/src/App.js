import React, { Component } from 'react';
import './App.css';
import List from './list';

class App extends Component {

  // stateの初期化処理
  constructor(props) {
    // constructorの後に必須
    super(props);
    this.state = {
      // 出力用配列
      items: [],
      // 入力値用配列
      inputItem: {
        title: '',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  // 入力値を出力用配列に格納する機能(入力・追加機能)
  addItem(event) {
    event.preventDefault();
    // 入力値を変数newItemに格納。
    let newItem = this.state.inputItem;
    if (newItem.title !== "") {
      let items = [this.state.items, newItem];
    this.setState({
      items: items,
      inputItem: {
        title: '',
        key: ''
      }
    })
    }
  }

  handleInput(event) {
    this.setState({
      inputItem: {
        title: event.target.value,
        key: Date.now()
      }
    })
  }

  // 編集機能
  setUpdate(title, key) {
    let items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.title = title;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div>
        {/* 入力フォームと追加ボタン */}
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.handleInput} value={this.state.inputItem.title}/>
          <button><span role="img" aria-label="close">➕</span></button>
        </form>
        {/* 出力エリア */}
        <p>{this.state.items.title}</p>
        {/* 編集機能、削除機能をつける部分 */}
        <List items={this.state.items} setUpdate={this.setUpdate}/>
      </div>
    );
  }
  
}

export default App;
