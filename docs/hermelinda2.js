      
      
      const momDosPaths = document.getElementsByClassName("mom-dos-path");
      const btn = document.getElementById("momContainer_boton")

      console.log(momDosPaths)

      function ocultarPaths() {
        for (let i = 0; i <= momDosPaths.length - 1; i++) {
          momDosPaths[i].style.opacity = 0.03;
        }
      }

      function mostrarPathsOriginales() {
        for (let i = 0; i <= momDosPaths.length - 1; i++) {
          momDosPaths[i].style.opacity = 1;
        }
      }

      function colorRandom() {
      let set = "0123456789ABCDEF";
      let codigo = [];
      for (let i = 0; i <= 5; i++) {
      let num = Math.floor(Math.random() * 16);
      codigo.push(set[num]);
      }
      let codigoColor = "#" + codigo.join("");
       return codigoColor;
      }


      function pintarMama() {
        ocultarPaths();
        let i = 0;
        let setInt = setInterval(function () {
          momDosPaths[i].style.opacity = 1;
          let color = colorRandom()
          momDosPaths[147].style.fill = color;
          momDosPaths[148].style.fill = color;
          momDosPaths[146].style.fill = color;
          momDosPaths[145].style.fill = color;
          momDosPaths[228].style.fill = color;
          momDosPaths[225].style.fill = color;
          momDosPaths[227].style.fill = color;
          momDosPaths[226].style.fill = color;
          momDosPaths[229].style.fill = color;

          if (i === momDosPaths.length - 1) {
            clearInterval(setInt);
          }
          i++;
        }, 10);
      }
      
let tiempoCiclo;

      function pintarMamaCiclo() {
        ocultarPaths();
        pintarMama();
      }

      function pintarMamaCiclos() {
        pintarMamaCiclo();
        tiempoCiclo = setInterval(pintarMamaCiclo, 3030);
      }

      function detenerPintarMamaCiclos() {
        clearInterval(tiempoCiclo);
      }
      let check = 0

      function togglePintarMamaCiclos() {
        if (check === 0) {
          pintarMamaCiclos();
          check = 1;
          btn.innerHTML = '<i class="far fa-pause-circle"></i>';
        } else {
          detenerPintarMamaCiclos();
          mostrarPathsOriginales()

          check = 0;

          btn.innerHTML = '<i class="far fa-play-circle"></i>';
        }
      }