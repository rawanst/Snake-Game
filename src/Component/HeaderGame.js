import {
  Box,
  IconButton,
  Typography,
} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'

const HeaderGame = () => {
  return(
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
  )
}

export default HeaderGame