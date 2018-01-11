export default () => {
  console.log('working')
  const heading = document.createElement('h1')
  heading.innerText = 'Looking in the network tab index.js is importing entry.js :)'
  document.body.appendChild(heading)
}
