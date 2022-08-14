// option: 1....
//<h3 id="handler-status">Default text</h3>
// <button onclick="handlerOnClick()">Hello i am sabbir I am rearning js</button>
function handlerOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handlerd by function on onclick attribute...';
 }

 // option: 2.....
 // <button id="event-listener">Handler event by addEventListener</button>
 document.getElementById('event-listener').addEventListener('click', function(){ // anonimas function or callBack function
     const handlerStatus = document.getElementById('handler-status');
     handlerStatus.innerText = 'one day i am boss in javaScript..';
 });


 // option: 2 recap... IMpotant...
 /*
  <p id="input-pre">Defulte input text..</p>
    <input id="input-field" type="text">
    <button id="btn-update">update</button>
*/
document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputPre = document.getElementById('input-pre');
    inputPre.innerText = inputText;
    inputField.value = '';
});


// option: 2 recap.....
