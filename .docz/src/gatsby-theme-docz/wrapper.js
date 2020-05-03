import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ children }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
      />
    </Helmet>
    {children}
  </>
)
