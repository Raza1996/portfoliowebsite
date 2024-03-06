function copy(that){
    var email = 'contact@goraza.ca';

    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = email;
    inp.select();
    document.execCommand('copy');
    inp.remove();
}