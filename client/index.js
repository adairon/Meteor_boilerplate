import React from 'react'
import ReactDom from 'react-dom'
import App from '/imports/routers/App'

console.log('CLIENT : Meteor est lancé')

ReactDom.render(
    <App/>,
    document.getElementById('root')
)