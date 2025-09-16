import { 
  useState, 
  useEffect, 
} from 'react'
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

   const [ snake, setSnake ] = useState([
    [10, 10],
    [9, 10],
    [8, 10],
  ])

  const [ rows , setRows ] = useState(20)
  const [ cols , setCols ] = useState(20)

  const [ speed, setSpeed ] = useState(400)
  const [direction, setDirection] = useState('R')
  // Values: R(for Right) or L(for Left) or U(for Up) or D(for Down)

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake()
    }, speed)
    return () => clearInterval(interval)
  }, [snake, rows, speed])

  useEffect(() => {
  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowUp':
        setDirection('U')
        break
      case 'ArrowDown':
        setDirection('D')
        break
      case 'ArrowLeft':
        setDirection('L')
        break
      case 'ArrowRight':
        setDirection('R')
        break
      default:
        break
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, []);

  const moveSnake = () => {
    const copySnake = snake.map(segment => [...segment]) // deeper copy than [...segment]
    copySnake.forEach(x => {
      switch(direction){
        case 'R':
          x[0] === cols - 1 ? x[0] = 0 : x[0]++
          break
        case 'L':
          x[0] === cols - 1 ? x[0] = 0 : x[0]--
          break
        case 'U':
          x[1] === 0 ? x[1] = rows - 1 : x[1]--
          break
        case 'D':
          x[1] === rows - 1 ? x[1] = 0 : x[1]++
          break
        default:
          break
      }
    })
    setSnake(copySnake)
  }

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
            snake={snake} 
            rows={rows} 
            cols={cols}
          />

        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App