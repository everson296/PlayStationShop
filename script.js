'use strict'
// ============= banco de dados ================
const dados = [
    {
        "id": '01' ,
        "wallpaper": 'img/wallpapers/sekiro_1.png', 
        "price": '199,00', 
        "platform": 'PS4, XBOX, PC', 
        "capa": 'img/jogos/sekiro.jpg', 
        "url": 'https://www.youtube.com/embed/rXMX4YJ7Lks'
    },
    
    {
        "id": '02' ,
        "wallpaper": 'img/wallpapers/gow_1.png', 
        "price": '99,50', 
        "platform": 'PS4, XBOX, PC', 
        "capa": 'img/jogos/gow.jpg', 
        "url": 'https://www.youtube.com/embed/FyIwEFXOcaE'
    },
    
    {
        "id": '03' ,
        "wallpaper": 'img/wallpapers/horizon_1.png', 
        "price": '349,90', 
        "platform": 'PS4, PS5', 
        "capa": 'img/jogos/horizon.jpg', 
        "url": 'https://www.youtube.com/embed/Lq594XmpPBg'
    },
    
    {
        "id": '04' ,
        "wallpaper": 'img/wallpapers/spider_1.png', 
        "price": '199,50', 
        "platform": 'PS4, PS5, XBOX', 
        "capa": 'img/jogos/spider.jpg', 
        "url": 'https://www.youtube.com/embed/8pR0o2fGyHg'
    },
];
//console.log(dados.length);

// ============== criar o card ================= 
const createCard = (dados, numero) => {
    const main = document.getElementById('main');
    
    for(let i = 0; i <= numero; i++){
    
        main.innerHTML=`
            <div class="card">
                <img src="${dados[i].wallpaper}"/>
                <div class="container">

                    <div class="menu">
                        <div class="leftMenu">
                            <img src="img/icons/grid.png"/>

                            <div class="itensSocial">
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>

                        </div>
                        <div class="rightMenu">
                            <p class="itensMenu">home</p>
                            <p class="itensMenu">social</p>
                            <p class="itensMenu">galeria</p>
                            <p class="itensMenu">comprar</p>
                        </div>
                    </div>

                    <div class="buy">
                        <div class="containerPrice">
                            <div class="price">${dados[i].price}</div>
                            <div class="platform">${dados[i].platform}</div>
                        </div>

                        <img src="${dados[i].capa}"/>
                    </div>

                    <div class="trailer">

                        <div class="video">
                            <div class="containerBtns">
                                <div class="number">${dados[i].id}</div>
                            </div>

                            <iframe src="${dados[i].url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                            
                        </div>

                        <div class="containerBtnPlayNow">
                            <div class="btnPlayNow">jogar agora</div>
                        </div>

                    </div>

                </div>
            </div>
        `;  
    }
}

// ============ variaveis e funções ============
const prev = document.getElementById('prev');
const next = document.getElementById('next');
var cont = 0;

prev.addEventListener('click', () =>{
    if(cont <= 0){
        cont = 3;
        createCard(dados, cont);        
    }else{
        createCard(dados, --cont);    }
})

next.addEventListener('click', () =>{
    if(cont < dados.length - 1){
        createCard(dados, ++cont);
    }else{
        cont = 0;
        createCard(dados, cont);
    }
})

createCard(dados, cont);