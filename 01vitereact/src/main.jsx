import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherEmelent = (
  <a href="https://google.com" target='_blank'>Visit Google!</a>
)

const anotherUser = "Another User"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // <App />
    // anotherEmelent
    reactElement
)
