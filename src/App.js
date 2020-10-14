import React from 'react'
import CardTarot from './CardTarot'
import GlobalStyles from './GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <div>Tarot Reader</div>
        <CardTarot />
      </div>
    </ThemeProvider>
  )
}

export default App