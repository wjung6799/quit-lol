import React from 'react';


class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.instituiton} </h2>
        <div> {this.props.date} </div>
        <div> {this.props.description} </div>
      </div>
    );
  }
}

export default Experience