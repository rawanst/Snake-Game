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

export default function App() {
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
          <Playground />
        </Box>
      </Box>
    </ThemeProvider>
  )
}