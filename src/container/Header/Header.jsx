import React from 'react'
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
            <SubHeading title='Chase the new Flavour'/>
            <h1 className='app__header-h1'>The key to Fine dining</h1>
            <p className='app__header-p p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className='app__header-img app__wrapper_img'>
            <img src={images.welcome} alt='header-img'/>
        </div>
    </div>
  )
}

export default Header;