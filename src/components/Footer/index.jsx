import { Container, Typography } from '@mui/material'
import React from 'react'
import Copyright from '../../Assets/MusicPage/Copyright.png'

function Footer() {
  return (
    <div>
      <Container>
        <Typography align="center">
          <footer>
            <img src={Copyright} alt="Copyright" />
          </footer>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
