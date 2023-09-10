function copy(that){
    var email = 'raza1996.go@gmail.com';

    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = email;
    inp.select();
    document.execCommand('copy');
    inp.remove();
}