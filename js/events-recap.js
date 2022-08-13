// option: 1....
//<h3 id="handler-status">Default text</h3>
function handlerOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handlerd by function on onclick attribute...';
 }

 // option: 2.....
 // <button id="event-listener">Handler event by addEventListener</button>
 document.getElementById('event-listener').addEventListener('click', function(){
     const handlerStatus = document.getElementById('handler-status');
     handlerStatus.innerText = 'one day i am boss in javaScript..';
 });