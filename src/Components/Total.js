import React from 'react';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class Total extends React.Component{

  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );


      return (
        <section className="main__summary">

          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(total)}

            </div>
          </div>
        </section>
      )
    }
  }
