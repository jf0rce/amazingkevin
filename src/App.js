import './App.css';
import kevin1 from './assets/kevin1.jpg';
import kevin2 from './assets/kevin2.jpg';
import kevin3 from './assets/kevin3.jpg';
import kevin4 from './assets/kevin4.jpg';
import kevin5 from './assets/kevin5.jpg';
import { Banner } from './Banner';

function App() {
  const images = [
    kevin1,
    kevin2,
    kevin3,
    kevin4,
    kevin5
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

  return (
    <div style={{ display: 'block' }}>
      <div className='App'>
        <Banner images={images} speed={25500} />
      </div>
    </div>
  );
}

export default App;
