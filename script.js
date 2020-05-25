var mediageral = []
var dados = []
function info() {
    let nome = document.getElementById('nome')
    let serie = document.getElementById('serie')
    dados.push(nome, serie)
}
    function matematica() {
        var txtmat = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")]

        var mat = [(Number(txtmat[0].value)), (Number(txtmat[1].value)), (Number(txtmat[2].value))]

        let media = (mat[0] + mat[1] + mat[2]) / 3

        let divmedia = document.getElementById("mediam")

        if (txtmat[0].value.length == 0 || txtmat[1].value.length == 0 || txtmat[2].value.length == 0) {
            divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
            let quadroorange = document.getElementById('mat').style.backgroundColor = '#ff860b'
        }
        else if (media >= 6) {
            divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
            let quadrogreen = document.getElementById('mat').style.backgroundColor = '#3eff42'

            let sel = document.getElementById("mediam")
            let botaomat = document.createElement('button')
            botaomat.textContent = "Guardar Média" //Estiliza esses botões pelo CSS
            sel.appendChild(botaomat)
            function guardarmedia() { mediageral.push(media) }
            botao.addEventListener('click', guardarmedia)

        } else {
            divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
            let quadrored = document.getElementById('mat').style.backgroundColor = '#ff4040'

            let sel = document.getElementById("mediam")
            let botaomat = document.createElement('button')
            botaomat.textContent = "Guardar Média"
            sel.appendChild(botaomat)
            function guardarmedia() { mediageral.push(media) }
            botaomat.addEventListener('click', guardarmedia)
        }
}
function portugues() {

    var txtport = [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")]

    var port = [(Number(txtport[0].value)), (Number(txtport[1].value)), (Number(txtport[2].value))]

    let media = (port[0] + port[1] + port[2]) / 3

    let divmedia = document.getElementById("mediap")

    if (txtport[0].value.length == 0 || txtport[1].value.length == 0 || txtport[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('port').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('port').style.backgroundColor = '#3eff42'

        let sel = document.getElementById("mediap")
        let botaoport = document.createElement('button')
        botaoport.textContent = "Guardar Média"
        sel.appendChild(botaoport)
        function guardarmedia() { mediageral.push(media) }
        botaoport.addEventListener('click', guardarmedia)

    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('port').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediap")
        let botaoport = document.createElement('button')
        botaoport.textContent = "Guardar Média"
        sel.appendChild(botaoport)
        function guardarmedia() { mediageral.push(media) }
        botaoport.addEventListener('click', guardarmedia)
    }

}
function biologia() {
    var txtbio = [document.getElementById("bio1"), document.getElementById("bio2"), document.getElementById("bio3")]

    var bio = [(Number(txtbio[0].value)), (Number(txtbio[1].value)), (Number(txtbio[2].value))]

    let media = (bio[0] + bio[1] + bio[2]) / 3


    let divmedia = document.getElementById("mediab")

    if (txtbio[0].value.length == 0 || txtbio[1].value.length == 0 || txtbio[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('bio').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('bio').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediab")
        let botaobio = document.createElement('button')
        botaobio.textContent = "Guardar Média"
        sel.appendChild(botaobio)
        function guardarmedia() { mediageral.push(media) }
        botaobio.addEventListener('click', guardarmedia)

    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('bio').style.backgroundColor = '#ff4040'

        let sel = document.getElementById("mediab")
        let botaobio = document.createElement('button')
        botaobio.textContent = "Guardar Média"
        sel.appendChild(botaobio)
        function guardarmedia() { mediageral.push(media)}
        botaobio.addEventListener('click', guardarmedia)
    }
}
function geografia() {
    var txtgeo = [document.getElementById("g1"), document.getElementById("g2"), document.getElementById("g3")]

    var geo = [(Number(txtgeo[0].value)), (Number(txtgeo[1].value)), (Number(txtgeo[2].value))]

    let media = (geo[0] + geo[1] + geo[2]) / 3

    let divmedia = document.getElementById("mediag")

    if (txtgeo[0].value.length == 0 || txtgeo[1].value.length == 0 || txtgeo[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('geo').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('geo').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediag")
        let botaogeo = document.createElement('button')
        botaogeo.textContent = "Guardar Média"
        sel.appendChild(botaogeo)
        function guardarmedia() { mediageral.push(media) }
        botaogeo.addEventListener('click', guardarmedia)


    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('geo').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediag")
        let botaogeo = document.createElement('button')
        botaogeo.textContent = "Guardar Média"
        sel.appendChild(botaogeo)
        function guardarmedia() { mediageral.push(media) }
        botaogeo.addEventListener('click', guardarmedia)
    }
}
function historia() {
    var txthis = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("h3")]

    var his = [(Number(txthis[0].value)), (Number(txthis[1].value)), (Number(txthis[2].value))]

    let media = (his[0] + his[1] + his[2]) / 3

    let divmedia = document.getElementById("mediah")

    if (txthis[0].value.length == 0 || txthis[1].value.length == 0 || txthis[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('his').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('his').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediah")
        let botaohis = document.createElement('button')
        botaohis.textContent = "Guardar Média"
        sel.appendChild(botaohis)
        function guardarmedia() { mediageral.push(media) }
        botaohis.addEventListener('click', guardarmedia)

    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('his').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediah")
        let botaohis = document.createElement('button')
        botaohis.textContent = "Guardar Média"
        sel.appendChild(botaohis)
        function guardarmedia() { mediageral.push(media) }
        botaohis.addEventListener('click', guardarmedia)

    }
}
function ingles() {
    var txting = [document.getElementById("i1"), document.getElementById("i2"), document.getElementById("i3")]

    var ing = [(Number(txting[0].value)), (Number(txting[1].value)), (Number(txting[2].value))]

    let media = (ing[0] + ing[1] + ing[2]) / 3

    let divmedia = document.getElementById("mediai")

    if (txting[0].value.length == 0 || txting[1].value.length == 0 || txting[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('ing').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('ing').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediai")
        let botaoing = document.createElement('button')
        botaoing.textContent = "Guardar Média"
        sel.appendChild(botaoing)
        function guardarmedia() { mediageral.push(media) }
        botaoing.addEventListener('click', guardarmedia)

    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('ing').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediai")
        let botaoing = document.createElement('button')
        botaoing.textContent = "Guardar Média"
        sel.appendChild(botaoing)
        function guardarmedia() { mediageral.push(media) }
        botaoing.addEventListener('click', guardarmedia)

    }
}
function espanhol() {
    var txtesp = [document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3")]

    var esp = [(Number(txtesp[0].value)), (Number(txtesp[1].value)), (Number(txtesp[2].value))]

    let media = (esp[0] + esp[1] + esp[2]) / 3

    let divmedia = document.getElementById("mediae")

    if (txtesp[0].value.length == 0 || txtesp[1].value.length == 0 || txtesp[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('esp').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
        let quadrogreen = document.getElementById('esp').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediae")
        let botaoesp = document.createElement('button')
        botaoesp.textContent = "Guardar Média"
        sel.appendChild(botaoesp)
        function guardarmedia() { mediageral.push(media) }
        botaoesp.addEventListener('click', guardarmedia)

    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('esp').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediae")
        let botaoesp = document.createElement('button')
        botaoesp.textContent = "Guardar Média"
        sel.appendChild(botaoesp)
        function guardarmedia() { mediageral.push(media) }
        botaoesp.addEventListener('click', guardarmedia)

    }
}
function fisica() {
    var txtfis = [document.getElementById("f1"), document.getElementById("f2"), document.getElementById("f3")]

    var fis = [(Number(txtfis[0].value)), (Number(txtfis[1].value)), (Number(txtfis[2].value))]

    let media = (fis[0] + fis[1] + fis[2]) / 3

    let divmedia = document.getElementById("mediaf")

    if (txtfis[0].value.length == 0 || txtfis[1].value.length == 0 || txtfis[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('fis').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
        let quadrogreen = document.getElementById('fis').style.backgroundColor = '#3eff42'

        let sel = document.getElementById("mediaf")
        let botaofis = document.createElement('button')
        botaofis.textContent = "Guardar Média"
        sel.appendChild(botaofis)
        function guardarmedia() { mediageral.push(media) }
        botaofis.addEventListener('click', guardarmedia)
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('fis').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediaf")
        let botaofis = document.createElement('button')
        botaofis.textContent = "Guardar Média"
        sel.appendChild(botaofis)
        function guardarmedia() { mediageral.push(media) }
        botaofis.addEventListener('click', guardarmedia)

    }
}
function quimica() {
    var txtqui = [document.getElementById("q1"), document.getElementById("q2"), document.getElementById("q3")]

    var qui = [(Number(txtqui[0].value)), (Number(txtqui[1].value)), (Number(txtqui[2].value))]

    let media = (qui[0] + qui[1] + qui[2]) / 3

    let divmedia = document.getElementById("mediaq")

    if (txtqui[0].value.length == 0 || txtqui[1].value.length == 0 || txtqui[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('qui').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
        let quadrogreen = document.getElementById('qui').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediaq")
        let botaoqui = document.createElement('button')
        botaoqui.textContent = "Guardar Média"
        sel.appendChild(botaoqui)
        function guardarmedia() { mediageral.push(media) }
        botaoqui.addEventListener('click', guardarmedia)

    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('qui').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediaq")
        let botaoqui = document.createElement('button')
        botaoqui.textContent = "Guardar Média"
        sel.appendChild(botaoqui)
        function guardarmedia() { mediageral.push(media) }
        botaoqui.addEventListener('click', guardarmedia)

    }
}
function sistemasoperacionais() {
    var txtso = [document.getElementById("so1"), document.getElementById("so2"), document.getElementById("so3")]

    var so = [(Number(txtso[0].value)), (Number(txtso[1].value)), (Number(txtso[2].value))]

    let media = (so[0] + so[1] + so[2]) / 3

    let divmedia = document.getElementById("mediasis")

    if (txtso[0].value.length == 0 || txtso[1].value.length == 0 || txtso[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('sis').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('sis').style.backgroundColor = '#3eff42'

        let sel = document.getElementById("mediasis")
        let botaoso = document.createElement('button')
        botaoso.textContent = "Guardar Média"
        sel.appendChild(botaoso)
        function guardarmedia() { mediageral.push(media) }
        botaoso.addEventListener('click', guardarmedia)
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('sis').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediasis")
        let botaoso = document.createElement('button')
        botaoso.textContent = "Guardar Média"
        sel.appendChild(botaoso)
        function guardarmedia() { mediageral.push(media) }
        botaoso.addEventListener('click', guardarmedia)

    }
}
function programacaoweb() {
    var txtpw = [document.getElementById("pw1"), document.getElementById("pw2"), document.getElementById("pw3")]

    var pw = [(Number(txtpw[0].value)), (Number(txtpw[1].value)), (Number(txtpw[2].value))]

    let media = (pw[0] + pw[1] + pw[2]) / 3

    let divmedia = document.getElementById("mediapw")

    if (txtpw[0].value.length == 0 || txtpw[1].value.length == 0 || txtpw[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('pw').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
        let quadrogreen = document.getElementById('pw').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediapw")
        let botaopw = document.createElement('button')
        botaopw.textContent = "Guardar Média"
        sel.appendChild(botaopw)
        function guardarmedia() { mediageral.push(media) }
        botaopw.addEventListener('click', guardarmedia)

    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('pw').style.backgroundColor = '#ff4040'
        
        let sel = document.getElementById("mediapw")
        let botaopw = document.createElement('button')
        botaopw.textContent = "Guardar Média"
        sel.appendChild(botaopw)
        function guardarmedia() { mediageral.push(media) }
        botaopw.addEventListener('click', guardarmedia)

    }
}
function robotica() {
    var txtr = [document.getElementById("r1"), document.getElementById("r2"), document.getElementById("r3")]

    var r = [(Number(txtr[0].value)), (Number(txtr[1].value)), (Number(txtr[2].value))]

    let media = (r[0] + r[1] + r[2]) / 3

    let divmedia = document.getElementById("mediar")

    if (txtr[0].value.length == 0 || txtr[1].value.length == 0 || txtr[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('rob').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)    `
        let quadrogreen = document.getElementById('rob').style.backgroundColor = '#3eff42'
        
        let sel = document.getElementById("mediar")
        let botaorob = document.createElement('button')
        botaorob.textContent = "Guardar Média"
        sel.appendChild(botaorob)
        function guardarmedia() { mediageral.push(media) }
        botaorob.addEventListener('click', guardarmedia)

    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(    `
        let quadrored = document.getElementById('rob').style.backgroundColor = '#ff4040'
       
        let sel = document.getElementById("mediar")
        let botaorob = document.createElement('button')
        botaorob.textContent = "Guardar Média"
        sel.appendChild(botaorob)
        function guardarmedia() { mediageral.push(media) }
        botaorob.addEventListener('click', guardarmedia)

    }
}
function testmedia() {
    if (typeof mediageral[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] == 'undefined' || serie.value < 1) {
        alert('Erro, verifique as informações!')
    }
    else {
        alert(mediageral)
        var total = 0
        for (var i = 0; i < mediageral.length; i++) {
            total += mediageral[i]
        }
        var avg = total / mediageral.length
        var teste = document.getElementById('teste')
        if (avg < 6) {
            teste.innerHTML = `Você deve se esforçar mais ${nome.value}, sua média geral é : ${avg.toFixed(2)}`
            teste.style.backgroundColor = 'rgba(211, 52, 52, 0.856)'
        }
        else {
            teste.innerHTML = `Parabéns ${nome.value}, sua média geral é : ${avg.toFixed(2)}`
            teste.style.backgroundColor = 'green'
        }
    }
    mediageral.length = 0
}