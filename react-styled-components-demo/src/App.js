import './App.css'
import Button, { FancyButton, SubmitButton } from './components/Button/Button'

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
    </div>
  )
}

export default App
