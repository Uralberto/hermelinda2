
      const piezasUno = document.querySelectorAll("path");
      const btn = document.getElementById("momContainer_boton")

      console.log(piezasUno)

      function ocultarPaths() {
        for (let j = 0; j <= piezasUno.length - 1; j++) {
          piezasUno[j].style.opacity = 0.03;
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
          piezasUno[i].style.opacity = 1;
          let color = colorRandom()
          piezasUno[147].style.fill = color;
          piezasUno[148].style.fill = color;
          piezasUno[146].style.fill = color;
          piezasUno[145].style.fill = color;
          piezasUno[228].style.fill = color;
          piezasUno[225].style.fill = color;
          piezasUno[224].style.fill = color;
          piezasUno[223].style.fill = color;
          if (i === piezasUno.length - 1) {
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
          check = 0;

          btn.innerHTML = '<i class="far fa-play-circle"></i>';
        }
      }