function copy(that){
    var email = 'h.raza.design@gmail.com';

    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = email;
    inp.select();
    document.execCommand('copy');
    inp.remove();
}