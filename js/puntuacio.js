function agregarGenero() {
        var genero = document.getElementById('genero').value;
        var lista = document.getElementById('lista');
        var generoM = document.createElement('li');
        generoM.textContent = genero;
        lista.appendChild(generoM);
        document.getElementById('genero').value = "";
    }

    function elimiGene() {
        var lista = document.getElementById("lista");
            lista.childElementCount > 0;
            lista.removeChild(lista.lastElementChild); 
    }

    function cambiaTi() {
        var nuevoT = prompt("Ingrese un nuevo título:");
            nuevoT !== null;
            document.getElementById("titulo").innerHTML = nuevoT;
    }
