
atob = str => new Buffer.from(str, 'base64').toString('utf-8');
function lmao() {
  var input = document.querySelector('#url');
  var inputValue = input.value;
          window.location.assign('/proxy/' + inputValue);

}
