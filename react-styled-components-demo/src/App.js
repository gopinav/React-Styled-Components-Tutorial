import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css'
import Button, { FancyButton, SubmitButton } from './components/Button/Button'
import logo from './logo.svg'
import './styles.css'
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  )
}

export default App
