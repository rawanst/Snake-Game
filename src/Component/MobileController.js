import {
  IconButton,
  Box,
} from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const MobileController = () => {
  return(
    <Box
      sx={{
        marginTop: '8vh',
        display: 'flex',
        justifyContent: 'center',

      }}
    >
      <IconButton>
        <ArrowCircleLeftIcon  sx={{fontSize: '6vh'}}/>
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
        }}
      >
        <IconButton sx={{mb: '3vh'}}>
          <ArrowCircleUpIcon sx={{fontSize: '6vh'}} />
        </IconButton>
        <IconButton sx={{mt: '3vh'}}>
          <ArrowCircleDownIcon sx={{fontSize: '6vh'}} />
        </IconButton>
      </Box>

      <IconButton>
        <ArrowCircleRightIcon sx={{fontSize: '6vh'}} />
      </IconButton>
    </Box>
  )
}

export default MobileController