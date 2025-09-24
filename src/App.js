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

const initialSnake = [
  [10, 10],
  [9, 10],
  [8, 10],
]
const initialRows = 20
const initialCols = 20
const initialSpeed = 400
const initialDirection = 'R'
// Values: R(for Right) or L(for Left) or U(for Up) or D(for Down)
const initialScore = 0

const App = () => {

  const [ snake, setSnake ] = useState(initialSnake)

  const [ rows , setRows ] = useState(initialRows)
  const [ cols , setCols ] = useState(initialCols)

  const newFood = () => [
    Math.floor(Math.random() * cols),
    Math.floor(Math.random() * rows),
  ]
  const [ food , setFood ] = useState(newFood())

  const [ speed, setSpeed ] = useState(initialSpeed)
  const [direction, setDirection] = useState(initialDirection)

  const [ score, setScore ] = useState(initialScore)

  const [ isPause, setIsPause ] = useState(true)
  const [ isRestart, setIsRestart ] = useState(false)

  useEffect(() => {
    const interval = isPause ? null : setInterval(() => moveSnake(), speed)
    if(isRestart){ restart() }
    return () => clearInterval(interval)
  }, [snake, direction, speed, food, isPause])

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

  const restart = () => {
    setSnake(initialSnake)
    setRows(initialRows)
    setCols(initialCols)
    setFood(newFood())
    setSpeed(initialSpeed)
    setDirection(initialDirection)
    setScore(initialScore)
    setIsPause(false)
    setIsRestart(false)
  }

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

    if ( head[0] === food [0] && head[1] === food[1] ){
      setFood(newFood())
      setScore(score+1)
    } else {
      newSnake.pop()
    }
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

          <HeaderGame 
            score={score}
            isPause={isPause}
            setIsPause={setIsPause}
            setIsRestart={setIsRestart}
          />
          <Playground
            snake={snake}
            food={food}
            rows={rows}
            cols={cols}
          />

        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App