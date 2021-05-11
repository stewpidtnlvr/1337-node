
function lmao() {
  var input = document.querySelector('#url');

          window.location.assign('/proxy/' + input.value);

}
/*var input = document.querySelector('#url');
var url = document.getElementById('url').value;
var pr0x = document.getElementById('proxy').value;
input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign('/proxy/' + input.value);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign('/proxy/' + input.value);

});
*/
/* + btoa(input.value)*/