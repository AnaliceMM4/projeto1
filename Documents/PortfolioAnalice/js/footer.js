function voltarAoTopo() {
    if (document.documentElement.scrollTop !== undefined) {
        document.documentElement.scrollTop = 0; // Para navegadores modernos
    }
    if (document.body.scrollTop !== undefined) {
        document.body.scrollTop = 0; // Para navegadores mais antigos
    }
}

// Exibir o botão "Voltar ao Topo" quando o usuário rolar a página para baixo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("voltar-ao-topo");
    if (button) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}


  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

