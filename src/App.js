import { 
  createTheme, 
  ThemeProvider, 
  CssBaseline, 
  Box,
} from '@mui/material'
import HeaderGame from './Component/HeaderGame'

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
          
          {/* Snake Playground */}
          <Box
            height={400}
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor='#111'
            borderRadius={1}
          >
            <h1>Snake Game</h1>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}