import './App.css'
import Button, { FancyButton, SubmitButton } from './components/Button/Button'
import logo from './logo.svg'
import './styles.css'
import { AnimatedLogo } from './components/Button/Button.styles'

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
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
      <div>
        <br />
      </div>
      <img src={logo} className='App-logo' alt='logo' />
      <AnimatedLogo src={logo} />
    </div>
  )
}

export default App
