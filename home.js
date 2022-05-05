
var raqam = document.getElementById("number")
var trorfa = document.getElementById('numbertxt')

function next(){
    if(raqam.value = `+998979964345`){
        window.location.href = 'code.html'
    }else{
        trorfa.textContent = `Invalid Phone Number`
    }
}

var time = 60

function Ishla() {
    time = time - 1
    document.getElementById('time').innerHTML =  `00:${time}`
    if(time === 0){
        document.getElementById('time').innerHTML=  ('Sand again');
    }
}

function son() {
    if(time<=0){ 

    }else{
        Ishla()
    }
}

function Run() {
    setInterval(son, 1000)
}