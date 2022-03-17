import React from 'react'
import './gallery.scss'
import './gallery'

import { Container } from '@mui/material'

export default function Gallery() {
  return (
    <Container>
      <div>
        <div class="options">
          <div class="option active">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
          <div class="option">
            <div class="shadow"></div>
            <div class="label">label</div>
          </div>
        </div>

        <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" class="credit">
          Photos from Victor of Valencia on tumblr
        </a>
      </div>
    </Container>
  )
}
