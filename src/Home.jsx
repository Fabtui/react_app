import './stylesheets/Home.css';
import { Link } from 'react-router-dom';

export function Home () {
  return <div className='home-wrap'>
      <Link className="home-wrap-link" to="/MyScale">
        <div className='home-wrap-item item1'>My scale</div>
        <div className='hint-box'>All about a scale</div>
      </Link>
      <Link className="home-wrap-link" to="/AllScales">
        <div className='home-wrap-item item2'>All scales</div>
        <div className='hint-box'>See all the existing scales</div>
      </Link>
      <Link className="home-wrap-link" to="/Search">
        <div className='home-wrap-item item3'>Search</div>
        <div className='hint-box'>Find a scale by notes</div>
      </Link>
    </div>

}
