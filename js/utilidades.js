document.addEventListener("DOMContentLoaded", function () {
    var imagenFondo = document.createElement("img")
    imagenFondo.src = "recursos/imagen de fondo.jpg"
    Object.assign(imagenFondo.style, {
        width: "100%",
        height: "100%",
    });
    document.body.appendChild(imagenFondo)

    var headerArriba = document.createElement("header")
    headerArriba.innerHTML = `
        <div class="contenidoIzquierdo">
            <img src="recursos/logo web.png" alt="" height="80px" width="105px">
        </div>
        <div class="contenidoDerecha">
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">EVENTS</a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT</a>
        </div>
    `;
    Object.assign(headerArriba.style, {

        display: "flex",
        position: "absolute",
        top: "45px",
        left: "50%",
        transform: "translateX(-50%)",
        height: "90px",
        width: "80%",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: "1"


    });
    document.body.appendChild(headerArriba)

    var divTargetInfo = document.createElement("div")
    divTargetInfo.innerHTML = `
        <div> 
            <span>$8,450</span>
            <h2 style="color: black;">Venice Italy</h2>
            <p>Travel is free responsive template by templatemo<br>
               all images use in this template are from Unisplash</p>
            <a href="" style="background-color: #9fd133; color:
             white; padding: 15px 25px; text-decoration: none;">PRE-BOOKING</a>
        </div>
    `;
    Object.assign(divTargetInfo.style, {

        display: "flex",
        position: "absolute",
        top: "30%",
        left: "10%",
        height: "250px",
        width: "350px",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: "1",
        textAlign: "center",
        borderRadius: "7px"


    });
    document.body.appendChild(divTargetInfo)

    var divTargetViajes = document.createElement("div")
    divTargetViajes.innerHTML = `
        <div class="divBuyFly">
            <h3 >ITALY </h3>
            <img src="recursos/Italy.jpg" alt="Iatly">
            <p style="color: #9fd133;">Rome, Milan, Naples</p>
            <p style="color: #eb4245;">SILVER HOTEL, 4 NIGHTS, 5 STARS</p>
            <button>$1,400 BOOK NOW</button>
        </div>

        <div class="divBuyFly">
            <h3 >FRANCE </h3>
            <img src="recursos/France.jpg" alt="France">
            <p style="color: #9fd133;">Paris, Marseille, Lyon</p>
            <p style="color: #eb4245;">NEW PLACE, 5 NIGHTS, 5 STARS</p>
            <button>$2,900 BOOK NOW</button>
        </div>

        <div class="divBuyFly">
            <h3 >GERMANY </h3>
            <img src="recursos/Germany.jpg" alt="Germani">
            <p style="color: #9fd133;">Berlin, Hamburg, Munich</p>
            <p style="color: #eb4245;">LUXE HOTEL, 5 NIGHTS, 6 STARS</p>
            <button>$3,800 BOOK NOW</button>
        </div>
        
        <div class="divBuyFly">
            <h3 >SPAIN </h3>
            <img src="recursos/Spain.jpg" alt="Spain">
            <p style="color: #9fd133;">Madrid, Barcelona, Valencia</p>
            <p style="color: #eb4245;">GOOD HOTEL, 4 NIGHTS, 6 STARS</p>
            <button>$4,500 BOOK NOW</button>
        </div>
    `;
    Object.assign(divTargetViajes.style, {
    
            display: "flex",
            gap: "90px",
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
            top: "90%",
            zIndex: "1"
    });
    document.body.appendChild(divTargetViajes)

    var targetasEle = document.createElement("div")
    Object.assign(targetasEle.style, {
        width: "100%",
        height: "160px",
        background: "url('recursos/footerInicio.jpg') no-repeat center center/cover",
        marginTop: "500px",
        position: "absolute"
    })
    document.body.appendChild(targetasEle)

    var footer = document.createElement("div");
    Object.assign(footer.style, {
        width: "100%",
        height: "150px",
        background: "url('recursos/footerFinal.png') no-repeat center center/cover",
        marginTop: "680px",
        position: "absolute"
    })
    document.body.appendChild(footer);
})
