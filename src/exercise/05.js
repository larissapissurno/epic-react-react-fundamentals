// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Exercise
// const smallBox = <div className='box box--small' style={{backgroundColor: 'lightblue'}} >small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{backgroundColor: 'pink'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor: 'orange'}}>large orange box</div>

// Extra 1
// function Box({children, className = '', style}) {
//   const mergedClassNames = `box ${className}`

//   const mergedStyles = {
//     fontStyle: 'italic',
//     ...style
//   }

  
//   return <div className={mergedClassNames} style={mergedStyles}>{children}</div>
// }

// Extra 2
function Box({children, style, size}) {
  const mergedClassNames = `box box--${size}`

  const mergedStyles = {
    fontStyle: 'italic',
    ...style
  }

  return <div className={mergedClassNames} style={mergedStyles}>{children}</div>
}

function App() {
  return (
    // Exercise
    // <div>
    //   {smallBox}
    //   {mediumBox}
    //   {largeBox}
    // </div>

    // Extra 1
    // <>
    //   <Box className='box--small' style={{backgroundColor: 'lightblue'}} >small lightblue box</Box>
    //   <Box className='box--medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
    //   <Box className='box--large' style={{backgroundColor: 'orange'}}>large orange box</Box>
    // </>

    // Extra 2
    <>
      <Box size='small' style={{backgroundColor: 'lightblue'}} >small lightblue box</Box>
      <Box size='medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
      <Box size='large' style={{backgroundColor: 'orange'}}>large orange box</Box>
    </>
  )
}

export default App
