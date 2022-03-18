import React, { Component } from 'react'

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '220px', width: '100%' }}>
        <div className="google-map-code">
          <iframe
            title='UEM Kolkata'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.512695709607!2d88.48771271492477!3d22.559920185189334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%20(UEM)%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1647544363590!5m2!1sen!2sin"
            width="100%"
            height="220"
            frameborder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    )
  }
}

export default Map
