import {
  Box,
  IconButton,
  Typography,
} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'

const HeaderGame = ({ score }) => {

  
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