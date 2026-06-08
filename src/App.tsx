import './styles.css'
import QuoteForm from './components/QuoteForm';
import { Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={
        <section className='homePage'>
          <div className="bgUILayer"></div>
        <div className="navbar">
          <div id='company'>
            <h3 id='company_name'>The<br></br> Himalayan <br></br>Explorer</h3>
          </div>
          <div id="navlinks">
            <ul>
              <li>Packages</li>
              <li><Link to="/quoteForm">Quote Now</Link></li>
              <li>Login</li>
              <li>About Us</li>
          </ul>
          </div>
        </div>
        <div className="homePageBody">
          <h1>Exploring the Heights</h1>
          <h3>exploring -</h3>
          <h2>The Himalayas</h2>
          <p>Discover <Link to="/packages"><button id="bodyLink">Packages</button></Link></p>
        </div>
        <div className="footer">© The Himalayan Explorer Inc. Copyrights 2026</div>
      </section>
      }/>
      <Route path='/quoteForm' element={<QuoteForm/>}/>
    </Routes>
      
    </>
  )
}

export default App
