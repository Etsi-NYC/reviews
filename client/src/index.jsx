import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello world!</h1>
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

