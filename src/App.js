import './App.css';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Location from './pages/Location'; // Location 컴포넌트 가져오기

function App() {
  return (
    <div className="App">
      <Main />
      <hr />
      <Gallery />
      <hr />
      <Location /> {/* Location 컴포넌트 추가 */}
    </div>
  );
}

export default App;