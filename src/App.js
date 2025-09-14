import { 
  createTheme, 
  ThemeProvider, 
  CssBaseline, 
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'

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
          
          {/* Score Play Pause Restart  */}
          <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            maxHeight='40px'
          >
            <Typography width='100%'>
              Score: 100000
            </Typography>
            <IconButton>
              <PlayCircleIcon />
            </IconButton>
            <IconButton>
              <PauseCircleIcon />
            </IconButton>
            <IconButton>
              <ReplayCircleFilledIcon />
            </IconButton>
          </Box>

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