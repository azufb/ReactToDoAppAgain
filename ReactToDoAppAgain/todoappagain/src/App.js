import React, { Component} from 'react';
import './App.css';

class App extends Component {

  // stateの初期化処理
  constructor(props) {
    // constructorの後に必須
    super(props);
    this.state = {
      items: [],
      inputItem: {
        title: '',
        key: ''
      }
    }

  }

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
    console.log(items);
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
  
  render() {
    return (
      <div>
        {/* 入力フォームと追加ボタン */}
        <form>
          <input type="text" onSubmit={this.addItem}/>
          <span role="img" aria-label="close">➕</span>
        </form>
        {/* 出力エリア */}
        <p></p>
      </div>
    );
  }
  
}

export default App;
