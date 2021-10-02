import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>See How AxcessFund Uniquily Works</h1>
      <div className="cards__container" >

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/signupd.png'
              text='first, a simple-users signup form'
              label='Adventure'
              path='/products'
            />

            {/* <Link to="/https://krishnaneupaney.github.io/project1/" /> */}

            <a href="https://krishnaneupaney.github.io/project1/">Link</a>
            <CardItem
              src="images/bills.png"
              text="Second, simply add the bills you would like to get funded for"
              label="ShopWhileYouVisit"
              path='/about'
            />
            {/* <a href="https://axcessnutrition.netlify.app/"></a>
            <CardItem
              src="images/bills.png"
              text="My first algorithm based app where I used Dijkstra algo which gurantee sortest path"
              label="Visualize"
              path='/about'
            /> */}

            <a href="https://algopathfinder.netlify.app/"></a>
            <CardItem
              src='images/apply.png'
              text='Third, apply for the amount of funding require, 98% of time get instant decision!'
              label='Extreme Adventure'
              path='/about'
            />
          </ul>
          <a href="https://axcessbookreview.netlify.app/posts/"></a>
          <ul className='cards__items'>

            <CardItem
              src='images/select.png'
              href='https://travlr-group.netlify.app/'
              text='Lastly, select how long you need to pay back, set-up amount you can afford to pay monthly and relax'
              label='Adventure'
              path='/sign-up'
            />
            <a href="https://travlr-group.netlify.app/">Link</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;