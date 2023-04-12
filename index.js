function addingEventListener() {
    const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}
//document.querySelector('body')
//const bodyElement = document.querySelector('body') // se;ects the whole body
//then create a function myFunction(){ //inner function/callback function console.log("hello")}
//bodyElement.addEventListener("click", () => myFunction())
// what would happen if I were to invoke my function here?
//body is an event target //addEventListener is the method // the click is the event type (list of event types are in the MDN doc) // then use myFunction as the callback function
