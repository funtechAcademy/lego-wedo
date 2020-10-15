console.log("js cargado!");

function delay (URL) {
    setTimeout( function() { window.location = URL }, 2000 );
}


setTimeout(() => {
    document.getElementById("pageloader").classList.add("dimissloader");
    console.log("holamundo");
}, 1000);