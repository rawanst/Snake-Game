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
    const interval = setInterval(() => moveSnake(), speed)
    return () => clearInterval(interval)
  }, [snake, direction, speed])

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
  }, [])

  const moveSnake = () => {
    const head = snake[0]
    let newHead

    switch(direction) {
      case 'R':
        newHead = moveRight([...head])
        break
      case 'L':
        newHead = moveLeft([...head])
        break
      case 'U':
        newHead = moveUp([...head])
        break
      case 'D':
        newHead = moveDown([...head])
        break
    }

    const newSnake = [newHead, ...snake]
    newSnake.pop()
    setSnake(newSnake)
  }

  const moveRight = (x) => {
    x[0] === cols ? x[0] = 0 : x[0]++
    return x
  }
  const moveLeft = (x) => {
    x[0] === 0 ? x[0] = cols - 1 : x[0]--
    return x
  }
  const moveUp = (x) => {
    x[1] === 0 ? x[1] = rows - 1 : x[1]--
    return x
  }
  const moveDown = (x) => {
    x[1] === rows - 1 ? x[1] = 0 : x[1]++
    return x
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