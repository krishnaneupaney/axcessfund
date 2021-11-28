import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>

      <div className="cards__container" >

        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='images/ax.png' />
          </ul>
          <h1>How Axcess Fund Uniquily Works</h1>
          <br />
          <br />
          <ul className="cards__items">
            <CardItem
              src='images/signupd.png'
              text='first, a simple-users signup form'
              path='/products'
            />


            <CardItem
              src="images/bills.png"
              text="Second, simply add the bills you would like to get funded for" />

            <CardItem
              src='images/apply.png'
              text='Third, apply for the amount of funding require, 98% of time get instant decision!'

            />
            <CardItem
              src="images/select.png"
              text="Lastly, select how long you need to pay back, set-up amount you can afford to pay monthly and relax"

            />
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards;