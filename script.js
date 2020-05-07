function matematica() {

    var txtmat = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")]

    var mat = [(Number(txtmat[0].value)), (Number(txtmat[1].value)), (Number(txtmat[2].value))]

    let media = (mat[0] + mat[1] + mat[2]) / 3

    let divmedia = document.getElementById("mediam")

    if (txtmat[0].value == 0 || txtmat[1].value == 0 || txtmat[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('mat').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('mat').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('mat').style.backgroundColor = '#ff4040'
    }
}
function portugues() {

    var txtport = [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")]

    var port = [(Number(txtport[0].value)), (Number(txtport[1].value)), (Number(txtport[2].value))]

    let media = (port[0] + port[1] + port[2]) / 3

    let divmedia = document.getElementById("mediap")

    if (txtport[0].value == 0 || txtport[1].value == 0 || txtport[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('port').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('port').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('port').style.backgroundColor = '#ff4040'
    }

}
function biologia() {
    var txtbio = [document.getElementById("bio1"), document.getElementById("bio2"), document.getElementById("bio3")]

    var bio = [(Number(txtbio[0].value)), (Number(txtbio[1].value)), (Number(txtbio[2].value))]

    let media = (bio[0] + bio[1] + bio[2]) / 3

    let divmedia = document.getElementById("mediab")

    if (txtbio[0].value == 0 || txtbio[1].value == 0 || txtbio[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('bio').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('bio').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('bio').style.backgroundColor = '#ff4040'
    }
}
function geografia() {
    var txtgeo = [document.getElementById("g1"), document.getElementById("g2"), document.getElementById("g3")]

    var geo = [(Number(txtgeo[0].value)), (Number(txtgeo[1].value)), (Number(txtgeo[2].value))]

    let media = (geo[0] + geo[1] + geo[2]) / 3

    let divmedia = document.getElementById("mediag")

    if (txtgeo[0].value == 0 || txtgeo[1].value == 0 || txtgeo[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('geo').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('geo').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('geo').style.backgroundColor = '#ff4040'
    }
}
function historia() {
    var txthis = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("h3")]

    var his = [(Number(txthis[0].value)), (Number(txthis[1].value)), (Number(txthis[2].value))]

    let media = (his[0] + his[1] + his[2]) / 3

    let divmedia = document.getElementById("mediah")

    if (txthis[0].value == 0 || txthis[1].value == 0 || txthis[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('his').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('his').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('his').style.backgroundColor = '#ff4040'
    }
}
function ingles() {
    var txting = [document.getElementById("i1"), document.getElementById("i2"), document.getElementById("i3")]

    var ing = [(Number(txting[0].value)), (Number(txting[1].value)), (Number(txting[2].value))]

    let media = (ing[0] + ing[1] + ing[2]) / 3

    let divmedia = document.getElementById("mediai")

    if (txting[0].value == 0 || txting[1].value == 0 || txting[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('ing').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('ing').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('ing').style.backgroundColor = '#ff4040'
    }
}
function espanhol() {
    var txtesp = [document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3")]

    var esp = [(Number(txtesp[0].value)), (Number(txtesp[1].value)), (Number(txtesp[2].value))]

    let media = (esp[0] + esp[1] + esp[2]) / 3

    let divmedia = document.getElementById("mediae")

    if (txtesp[0].value == 0 || txtesp[1].value == 0 || txtesp[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('esp').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('esp').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('esp').style.backgroundColor = '#ff4040'
    }
}
function fisica() {
    var txtfis = [document.getElementById("f1"), document.getElementById("f2"), document.getElementById("f3")]

    var fis = [(Number(txtfis[0].value)), (Number(txtfis[1].value)), (Number(txtfis[2].value))]

    let media = (fis[0] + fis[1] + fis[2]) / 3

    let divmedia = document.getElementById("mediaf")

    if (txtfis[0].value == 0 || txtfis[1].value == 0 || txtfis[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('fis').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('fis').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('fis').style.backgroundColor = '#ff4040'
    }
}
function quimica() {
    var txtqui = [document.getElementById("q1"), document.getElementById("q2"), document.getElementById("q3")]

    var qui = [(Number(txtqui[0].value)), (Number(txtqui[1].value)), (Number(txtqui[2].value))]

    let media = (qui[0] + qui[1] + qui[2]) / 3

    let divmedia = document.getElementById("mediaq")

    if (txtqui[0].value == 0 || txtqui[1].value == 0 || txtqui[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('qui').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('qui').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('qui').style.backgroundColor = '#ff4040'
    }
}
function sistemasoperacionais() {
    var txtso = [document.getElementById("so1"), document.getElementById("so2"), document.getElementById("so3")]

    var so = [(Number(txtso[0].value)), (Number(txtso[1].value)), (Number(txtso[2].value))]

    let media = (so[0] + so[1] + so[2]) / 3

    let divmedia = document.getElementById("mediasis")

    if (txtso[0].value == 0 || txtso[1].value == 0 || txtso[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('sis').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('sis').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('sis').style.backgroundColor = '#ff4040'
    }
}
function programacaoweb() {
    var txtpw = [document.getElementById("pw1"), document.getElementById("pw2"), document.getElementById("pw3")]

    var pw = [(Number(txtpw[0].value)), (Number(txtpw[1].value)), (Number(txtpw[2].value))]

    let media = (pw[0] + pw[1] + pw[2]) / 3

    let divmedia = document.getElementById("mediapw")

    if (txtpw[0].value == 0 || txtpw[1].value == 0 || txtpw[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('pw').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('pw').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('pw').style.backgroundColor = '#ff4040'
    }
}
function robotica() {
    var txtr = [document.getElementById("r1"), document.getElementById("r2"), document.getElementById("r3")]

    var r = [(Number(txtr[0].value)), (Number(txtr[1].value)), (Number(txtr[2].value))]

    let media = (r[0] + r[1] + r[2]) / 3

    let divmedia = document.getElementById("mediar")

    if (txtr[0].value == 0 || txtr[1].value == 0 || txtr[2].value == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('rob').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('rob').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('rob').style.backgroundColor = '#ff4040'
    }
}