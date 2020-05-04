function notas() {
    //Matemática
    var txtmat = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")] //Selecionar os valores dos inputs para dentro da variável
    var mat = [(Number(txtmat[0].value)), (Number(txtmat[1].value)), (Number(txtmat[2].value))]  //Converter os valores recebidos para números
    if(txtmat[0,1,2].value==0 ){
        alert("Confira as notas de matemática novamente")
        var b0=document.getElementById('b0').style.backgroundColor='red'
    }
    else{
    var mediam = (mat[0]+mat[1]+mat[2])/3 //Cálculo da média
    mat.push(mediam) //Adicionando o valor da média ao array
    alert(`A média de matemática é ${mediam.toFixed(1)}`)
    }

    //Português
    var txtport = [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")]
    var port = [(Number(txtport[0].value)), (Number(txtport[1].value)), (Number(txtport[2].value))]
    var mediap = (port[0]+port[1]+port[2])/3
    if(txtport[0,1,2].value==0){
        alert("Confira as notas de português novamente")
        var b1=document.getElementById('b1').style.backgroundColor='red'
    }
    else{
    port.push(mediap)
    alert(`A média de português é ${mediap.toFixed(1)}`)
    }
    //Biologia
    var txtbio = [document.getElementById("bio1"), document.getElementById("bio2"), document.getElementById("bio3")]
    var bio = [(Number(txtbio[0].value)), (Number(txtbio[1].value)), (Number(txtbio[2].value))]
    var mediab = (bio[0]+bio[1]+bio[2])/3
    if(txtbio[0,1,2].value==0){
        alert("Confira as notas de biologia novamente")
        var b2=document.getElementById('b2').style.backgroundColor='red'
    }
    else{
    bio.push(mediab)
    alert(`A média de biologia é ${mediab.toFixed(1)}`)
    }
 //Geografia
    var txtgeo = [document.getElementById("g1"), document.getElementById("g2"), document.getElementById("g3")]
    var geo = [(Number(txtgeo[0].value)), (Number(txtgeo[1].value)), (Number(txtgeo[2].value))]
    var mediag = (geo[0]+geo[1]+geo[2])/3
    if(txtgeo[0,1,2].value==0){
        alert("Confira as notas de geografia novamente")
        var b3=document.getElementById('b3').style.backgroundColor='red'
    }
    else{
    geo.push(mediag)
    alert(`A média de geografia é ${mediag.toFixed(1)}`)
}
//História
    var txthis = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("h3")]
    var his = [(Number(txthis[0].value)), (Number(txthis[1].value)), (Number(txthis[2].value))]
    var mediah = (his[0]+his[1]+his[2])/3
    if(txthis[0,1,2].value==0){
        alert("Confira as notas de história novamente")
        var b4=document.getElementById('b4').style.backgroundColor='red'
    }
    else{
    his.push(mediah)
    alert(`A média de história é ${mediah.toFixed(1)}`)
    }
//Inglês
    var txting = [document.getElementById("i1"), document.getElementById("i2"), document.getElementById("i3")]
    var ing = [(Number(txting[0].value)), (Number(txting[1].value)), (Number(txting[2].value))]
    var mediai = (ing[0]+ing[1]+ing[2])/3
    if(txting[0,1,2].value==0){
        alert("Confira as notas de inglês novamente")
        var b5=document.getElementById('b5').style.backgroundColor='red'
    }
    else{
    ing.push(mediai)
    alert(`A média de inglês é ${mediai.toFixed(1)}`)
    }
//Espanhol
var txtesp = [document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3")]
var esp = [(Number(txtesp[0].value)), (Number(txtesp[1].value)), (Number(txtesp[2].value))]
var mediae = (esp[0]+esp[1]+esp[2])/3
if(txtesp[0,1,2].value==0){
    alert("Confira as notas de espanhol novamente")
    var b6=document.getElementById('b6').style.backgroundColor='red'
}
else{
esp.push(mediae)
alert(`A média de espanhol é ${mediae.toFixed(1)}`)
}
//Física
var txtfis = [document.getElementById("f1"), document.getElementById("f2"), document.getElementById("f3")]
var fis = [(Number(txtfis[0].value)), (Number(txtfis[1].value)), (Number(txtfis[2].value))]
var mediaf = (fis[0]+fis[1]+fis[2])/3
if(txtfis[0,1,2].value==0){
    alert("Confira as notas de física novamente")
    var b7=document.getElementById('b7').style.backgroundColor='red'
}
else{
fis.push(mediaf)
alert(`A média de física é ${mediaf.toFixed(1)}`)
}
//Química
var txtqui = [document.getElementById("q1"), document.getElementById("q2"), document.getElementById("q3")]
var qui = [(Number(txtqui[0].value)), (Number(txtqui[1].value)), (Number(txtqui[2].value))]
var mediaq = (qui[0]+qui[1]+qui[2])/3
if(txtqui[0,1,2].value==0){
    alert("Confira as notas de química novamente")
    var b8=document.getElementById('b8').style.backgroundColor='red'
}
else{
qui.push(mediaq)
alert(`A média de química é ${mediaq.toFixed(1)}`)
}
//Sistemas Operacionais
var txtso = [document.getElementById("so1"), document.getElementById("so2"), document.getElementById("so3")]
var so = [(Number(txtso[0].value)), (Number(txtso[1].value)), (Number(txtso[2].value))]
var mediaso = (so[0]+so[1]+so[2])/3
if(txtso[0,1,2].value==0){
    alert("Confira as notas de sistemas operacionais novamente")
    var b9=document.getElementById('b9').style.backgroundColor='red'
}
else{
so.push(mediaso)
alert(`A média de sistemas operacionais é ${mediaso.toFixed(1)}`)
}
//Programação web
var txtpw = [document.getElementById("pw1"), document.getElementById("pw2"), document.getElementById("pw3")]
var pw = [(Number(txtpw[0].value)), (Number(txtpw[1].value)), (Number(txtpw[2].value))]
var mediapw = (pw[0]+pw[1]+pw[2])/3
if(txtpw[0,1,2].value==0){
    alert("Confira as notas de Programação web novamente")
    var b10=document.getElementById('b10').style.backgroundColor='red'
}
else{
pw.push(mediapw)
alert(`A média de programação web é ${mediapw.toFixed(1)}`)
}
//Robótica
var txtr = [document.getElementById("r1"), document.getElementById("r2"), document.getElementById("r3")]
var r = [(Number(txtr[0].value)), (Number(txtr[1].value)), (Number(txtr[2].value))]
var mediar = (r[0]+r[1]+r[2])/3
if(txtr[0,1,2].value==0){
    alert("Confira as notas de robótica novamente")
    var b11=document.getElementById('b11').style.backgroundColor='red'
}
else{
r.push(mediar)
alert(`A média de robótica é ${mediar.toFixed(1)}`)
}
// Seção de substituição de variáveis(medias) na tabela
alert(mediam)
var media_notas=[mediam,mediap,mediab,mediag,mediahis,mediaing,mediaesp,mediaf,mediaq,mediaso,mediapw,mediar]
alert(media_notas[4])
var nmat=document.getElementById('nmat')
var nport=document.getElementById('nport')
var nbio=document.getElementById('nbio')
var ngeo=document.getElementById('ngeo')
var nhist=document.getElementById('nhist')
var ning=document.getElementById('ning')
var nesp=document.getElementById('nesp')
var nfis=document.getElementById('nfis')
var nqui=document.getElementById('nqui')
var nso=document.getElementById('nso')
var npw=document.getElementById('npw')
var nr=document.getElementById('nr')

}
