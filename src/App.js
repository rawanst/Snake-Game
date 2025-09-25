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
import MobileController from './Component/MobileController'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
})

const initialValue = {
  snake: [
    [10, 10],
    [9, 10],
    [8, 10],
  ],
  rows: 20,
  cols: 20,
  speed: 500,
  score: 0,
  direction: 'R' // Values: R(for Right) or L(for Left) or U(for Up) or D(for Down)
}


const App = () => {

  // -------- state section --------
  const [ snake, setSnake ] = useState(initialValue.snake)
  const [ rows , setRows ] = useState(initialValue.rows)
  const [ cols , setCols ] = useState(initialValue.cols)

  const newFood = () => [
    Math.floor(Math.random() * cols),
    Math.floor(Math.random() * rows),
  ]

  const [ food , setFood ] = useState(newFood())
  const [ speed, setSpeed ] = useState(initialValue.speed)
  const [direction, setDirection] = useState(initialValue.direction)
  const [ score, setScore ] = useState(initialValue.score)
  const [ isPause, setIsPause ] = useState(true)
  const [ isRestart, setIsRestart ] = useState(false)
  const [ isGameOver, setIsGameOver ] = useState(false)
  // -----------------------------------

  // -------- useEffect section --------
  useEffect(() => {
    const interval = isPause ? null : setInterval(() => moveSnake(), speed)
    if(isRestart){ restart() }
    return () => clearInterval(interval)
  }, [snake, direction, speed, food, isPause, isRestart])

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
  // -----------------------------------

  // -------- functions section --------
  const restart = () => {
    setSnake(initialValue.snake)
    setRows(initialValue.rows)
    setCols(initialValue.cols)
    setFood(newFood())
    setSpeed(initialValue.speed)
    setDirection(initialValue.direction)
    setScore(initialValue.score)
    setIsPause(false)
    setIsRestart(false)
    setIsGameOver(false)
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
      setSpeed(speed+100)
    } else {
      newSnake.pop()
    }
    setSnake(newSnake)

    snake.forEach( (i, index) => {
      if( i[0] === newHead[0] && i[1] === newHead[1]){ 
        setIsPause(true)
        setIsGameOver(true)
      }
    })
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
  // -----------------------------------

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
            isGameOver={isGameOver}
          />
          <Playground
            snake={snake}
            food={food}
            rows={rows}
            cols={cols}
          />
          <MobileController 
            setDirection={setDirection}
          />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App