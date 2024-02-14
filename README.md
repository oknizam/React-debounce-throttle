# throtteling
Let's assume that we have an event listener in our app to track the movement of the user mouse, then send data to a backend server to do some operations based on the location of the mouse.

const handleMouseMove = (e) => {
  //everytime the mouse moved this function will be invoked
  console.log('api call to do some operations...')
}
//event listener to track the movement of the mouse
window.addEventListener('mousemove', handleMouseMove)
If we stick with this solution, we will end up with a down backend server because it will receive a hundred of requests in short duration.



1600 API calls in few seconds is very very bad 📛📛📛. To fix this issue, we need to limit the number of API calls, and this kind of problems can be solved using a throttle function.



A throttle function is a mechanism to limit the number of calls of another function in a specific interval, any additional calls within the specified time interval will be ignored.

function throttle(fn, delay) {
  let run = false
  return function (...args) {
    if (!run) {
      fn(...args)
      run = true
      setTimeout(() => (run = false), delay)
    }
  }
}
The throttle function accepts two arguments: fn, which is a function to throttle, and delay in ms of the throttling interval and returns a throttled function.

Implement throttle function into our example
const handleMouseMove = (e) => {
  //everytime the mouse moved this function will be invoked
  console.log('api call to do some operations...')
}

//event listener to track the movement of the mouse
window.addEventListener('mousemove', throttle(handleMouseMove, 1000))
//1000ms => 1 second