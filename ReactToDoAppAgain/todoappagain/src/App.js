import React, { Component } from 'react';
import './App.css';

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
    // this.setUpdate = this.setUpdate.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }
  

  handleInput(event) {
    this.setState({
      inputItem: {
        title: event.target.value,
        key: Date.now()
      }
    })
  }

  // 入力値を出力用配列に格納する機能(入力・追加機能)
  addItem(event) {
    event.preventDefault();
    // 入力値を変数newItemに格納。
    let newItem = this.state.inputItem;
    console.log(newItem);
    let newItems = this.state.items.push(newItem);
    this.setState({
      items: [newItems],
      inputItem: {
        title: '',
        key: ''
      }
    })
  }

  render() {
    return (
      <div>
        {/* 入力フォームと追加ボタン */}
          <input type="text" onChange={this.handleInput}
           value={this.state.inputItem.title}/>
          <button type="submit" onClick={this.addItem}><span role="img" aria-label="add">➕</span></button>
        {/* 出力エリア */}
        </div>
    );
  }
  
}

export default App;
