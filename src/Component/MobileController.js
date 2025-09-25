import {
  IconButton,
  Box,
} from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const MobileController = ({ setDirection }) => {
  return(
    <Box
      sx={{
        marginTop: '8vh',
        display: 'flex',
        justifyContent: 'center',

      }}
    >
      <IconButton onClick={() => setDirection('L')}>
        <ArrowCircleLeftIcon  sx={{fontSize: '6vh'}}/>
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
        }}
      >
        <IconButton sx={{mb: '3vh'}} onClick={() => setDirection('U')}>
          <ArrowCircleUpIcon sx={{fontSize: '6vh'}} />
        </IconButton>
        <IconButton sx={{mt: '3vh'}} onClick={() => setDirection('D')}>
          <ArrowCircleDownIcon sx={{fontSize: '6vh'}} />
        </IconButton>
      </Box>

      <IconButton>
        <ArrowCircleRightIcon sx={{fontSize: '6vh'}} onClick={() => setDirection('R')}/>
      </IconButton>
    </Box>
  )
}

export default MobileController