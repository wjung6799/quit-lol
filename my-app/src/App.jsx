import React from 'react';
import Headerbar from './Components/Headerbar'
import SimpleContainer from './Components/SimpleContainer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Headerbar />
        <SimpleContainer />
      </div>
    )
  }
}

export default App