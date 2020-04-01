import React from 'react';
import Total from './Total';
import Option from './Option';
import Customize from './Customize';

class Summary extends React.Component {
  render() {

    return (
      <div>

        <Customize selected={this.props.selected} features={this.props.features} updateFeature={this.props.updateFeature} />
        <Option selected={this.props.selected} />
        <Total selected={this.props.selected}/>
      </div>
    );
  }
}




export default Summary;
