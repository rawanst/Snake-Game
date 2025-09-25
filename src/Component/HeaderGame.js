import {
  Box,
  IconButton,
  Typography,
} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'

const HeaderGame = ({ 
  score, 
  isPause, 
  setIsPause, 
  setIsRestart,
  isGameOver
}) => {

  return(
    <Box
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
      maxHeight='40px'
    >

      <Typography width='100%'>
        Score: {score}
      </Typography>

      { isGameOver ? (
        <Typography variant='subtitle2'>GameOver</Typography>
      ) : (
        isPause ? (
          <IconButton onClick={() => setIsPause(false)}>
            <PlayCircleIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsPause(true)}>
            <PauseCircleIcon />
          </IconButton>
        )
      )}

      <IconButton onClick={() => setIsRestart(true)}>
        <ReplayCircleFilledIcon />
      </IconButton>
      
    </Box>
  )
}

export default HeaderGame