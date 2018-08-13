import React from 'react'

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

class App extends React.Component {
  render() {
    return (
      <div>
      <SimpleComponent />
      <SimplerComponent handleClick={undefined}/>
      </div>
    )
  }
}

export default App
