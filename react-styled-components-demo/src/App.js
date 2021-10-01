import './App.css'
import Button, { FancyButton } from './components/Button/Button'

function App() {
  return (
    <div className='App'>
      <Button>Styled Button</Button>
      <div>
        <br />
      </div>
      <Button variant='outline'>Styled Button</Button>
      <div>
        <br />
      </div>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  )
}

export default App
