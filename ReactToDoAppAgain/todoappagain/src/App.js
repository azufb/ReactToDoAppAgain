import React from 'react';
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
}

function App() {
  return (
    <div>
      {/* 入力フォームと追加ボタン */}
      <form>
        <input type="text" />
        <button type="submit">➕</button>
      </form>
      {/* 出力エリア */}
      <p></p>
    </div>
  );
}

export default App;
