var data = [
    {
        name:'Alijon',
        username:'ali12',
        online:'last seen 12:00',
        img:'https://www.nicepng.com/png/detail/144-1446162_pin-businessman-clipart-png-flat-user-icon.png',
       
    },
    {
        name:'Hoshimjon',
        username:'hoshim11',
        online:'last seen 21:21',
        img:'https://conceptdraw.com/a154c4/p181/preview/640/pict--user-man-cloud-clipart-vector-stencils-library',
    },
    {
        name:'Aliikrom',
        username:'ali22',
        online:'last seen 22:22',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
    },
    {
        name:'Akbarjon',
        username:'A.karimov',
        online:'last seen 17:00',
        img:'https://www.pinclipart.com/picdir/big/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png',
    },
    {
        name:'Liza',
        username:'liza12',
        online:'last seen 12:00',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgzDNj0_6KMaIGnAQ3CPTQEBIdoEJnpu6jKb9Nog3dZMOJng6g_hGozB09sfo40zS2TU&usqp=CAU',
    },
    {
        name:'Alijon',
        username:'ali12',
        online:'last seen 12:00',
        img:'https://www.nicepng.com/png/detail/144-1446162_pin-businessman-clipart-png-flat-user-icon.png',
    },
    {
        name:'Hoshimjon',
        username:'hoshim22',
        online:'last seen 21:21',
        img:'https://conceptdraw.com/a154c4/p181/preview/640/pict--user-man-cloud-clipart-vector-stencils-library',
    },
    {
        name:'Aliikrom',
        username:'ali22',
        online:'last seen 22:22',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
    },
    {
        name:'Akbarjon',
        username:'A.karimov',
        online:'last seen 17:00',
        img:'https://www.pinclipart.com/picdir/big/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png',
    },
    {
        name:'Liza',
        username:'liza12',
        online:'last seen 12:00',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgzDNj0_6KMaIGnAQ3CPTQEBIdoEJnpu6jKb9Nog3dZMOJng6g_hGozB09sfo40zS2TU&usqp=CAU',
    },
]

var Input = document.getElementById('inp')

Input.onkeypress = Search


function Search() {
    var filtered = data.filter((item)=>{
        return item.username.includes(Input.value)
    })

    
    var text = '';
    filtered.map((item,index)=>{
        text+=
        `<div id='user' onclick='hi(${index})'>
            <img src=${item.img} alt='' >
            <div>
                <h2>${item.name}</h2>
                <p>${item.online}</p>
                <p>${item.username}</p>
            </div>
        </div>`
    })

    if(text ===''){
        document.getElementById('users').innerHTML = 
        '<p align=center>No user found with this username</p>'
    }else{
        document.getElementById('users').innerHTML = text
    }
}


function InitialList() {
    var text = '';
    data.map((item,index)=>{
        text+=
        `<div id='user' onclick='hi(${index})'>
            <img src=${item.img} alt='' >
            <div>
                <h2>${item.name}</h2>
                <p>${item.online}</p>
                <p>${item.username}</p>
            </div>
        </div>`
    })

    document.getElementById('users').innerHTML = text
}

InitialList()

function hi(id){
  
}
console.log(data[nom]);