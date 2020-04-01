import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Currency extends React.Component {
    render() {
      return (
        <span>
        {USCurrencyFormat.format(this.props.cost)}
        </span>
      )
    }
}

export default Currency;
