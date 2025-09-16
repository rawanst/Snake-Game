import { 
  Box 
} from '@mui/material'

const Playground = ({ rows, cols }) => {

  // Create Arrays that contains the render of every Box
  // Each Box contains it location, like this: 'x-y'
  // Each Box has a width and height to adapt the number of rows and cols
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const x = i % cols;
    const y = Math.floor(i / cols);
    return (
      <Box
        key={`${x}-${y}`}
        sx={{
          width: `${100 / cols}%`,
          height: `${100 / rows}%`,
          bgcolor: 'transparent',
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