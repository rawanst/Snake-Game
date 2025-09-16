import { 
  Box 
} from '@mui/material'

const Playground = ({ rows, cols, snake }) => {

  // Create Arrays that contains the render of every Box
  // Each Box contains it location, like this: 'x-y'
  // Each Box has a width and height to adapt the number of rows and cols
  // The Box color defer if there is the snake on it
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const x = i % cols;
    const y = Math.floor(i / cols);
    const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
    return (
      <Box
        key={`${x}-${y}`}
        sx={{
          width: `${100 / cols}%`,
          height: `${100 / rows}%`,
          bgcolor: isSnake ? '#39ff14' : 'transparent',
          border: '1px solid #222',
        }}
      />
    )
  })

  return (
    <Box
      sx={{
        height: '420px',
        bgcolor: '#111',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {cells}
    </Box>
  )
}

export default Playground