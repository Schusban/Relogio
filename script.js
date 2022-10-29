function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = String(data.getMinutes()).padStart(2, 0)
    var segundo = String(data.getSeconds()).padStart(2, 0)
    var  tempo = setInterval(carregar,1000) 
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas`
    if (hora >= 6 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.background = '#fdd132'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#ca9a66'
    }else {
        img.src='noite.png'
        document.body.style.background = '#1a3755'
    }
}
