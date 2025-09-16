import React, { useState } from 'react'
import { 
  createTheme, 
  ThemeProvider, 
  CssBaseline, 
  Box,
} from '@mui/material'
import HeaderGame from './Component/HeaderGame'
import Playground from './Component/Playground'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
})

const App = () => {

  const [ rows , setRows ] = useState(20)
  const [ cols , setCols ] = useState(20)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Box
          width='95%'
          maxWidth={400}
        >

          <HeaderGame />
          <Playground 
            rows={rows} 
            cols={cols}
          />

        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App