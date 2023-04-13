import './App.css';
import kevin1 from './assets/kevin1.jpg';
import kevin2 from './assets/kevin2.jpg';
import kevin3 from './assets/kevin3.jpg';
import kevin4 from './assets/kevin4.jpg';
import kevin5 from './assets/kevin5.jpg';
import Marquee from 'react-fast-marquee';

function App() {
  return (
    <Marquee style={{height: '100vh'}}>
      <img src={require('./assets/kevin1.jpg')} style={{height: '50vh', marginLeft: 30, marginRight: 30}}/>
      <img src={require('./assets/kevin2.jpg')} style={{height: '50vh', marginLeft: 30, marginRight: 30}}/>
      <img src={require('./assets/kevin3.jpg')} style={{height: '50vh', marginLeft: 30, marginRight: 30}}/>
      <img src={require('./assets/kevin4.jpg')} style={{height: '50vh', marginLeft: 30, marginRight: 30}}/>
      <img src={require('./assets/kevin5.jpg')} style={{height: '50vh', marginLeft: 30, marginRight: 30}}/>
    </Marquee>
  );
}

export default App;
