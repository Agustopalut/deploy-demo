
import NavigationBar from "./components/NavigationBar.js"
import Intro from "./components/Intro.js"
import Trending from "./components/Trending.js"
import Superhero from "./components/Superhero.js"
import "./style/LandingPage.css"
function App() {
  return (
    <div>
      <div className='mybg'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      <div className='superhero'>
        <h1 className="text-light">Super hero</h1>
        <Superhero />
      </div>
    </div> 
  ) 
}

export default App;
