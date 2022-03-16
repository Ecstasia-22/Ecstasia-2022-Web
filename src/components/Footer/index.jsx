import { Container, Typography } from '@mui/material'
import React from 'react'
import './style.css'

function Footer() {
  return (
    <div>
      <Container>
        <Typography align="center">
          <footer classNameName="footerStyle">
            © Copyright ECSTASIA 2022 - All Rights Reserved
          </footer>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
