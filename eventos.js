let btn = document.getElementById("btn")

btn.addEventListener("click",eventalerta)

function eventalerta(){
    let nameinput = document.getElementById("name").value
    let lastnameinput = document.getElementById("lastname").value
    let codeinput = document.getElementById("code").value

    mensssagesend = `Hola mi nombre es ${nameinput} ${lastnameinput} y mi codigo de estudiante es: ${codeinput}`
    alert(mensssagesend)
}


class etiqueta extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML= `<div>
            <h1>Titulo desde la etiqueta etiqueta-creada</h1>
            <p>Parrafo desde la etiqueta etiqueta-creada</p>
        </div>`
    }
}

customElements.define("etiqueta-creada",etiqueta)


let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")
let boton3 = document.getElementById("boton3")
let boton4 = document.getElementById("boton4")

    
        boton.addEventListener("click",suma)
    
    function suma(){
        var num1 = Number(document.getElementById("n1").value)
        var num2 = Number(document.getElementById("n2").value)
        var resultado = num1 +num2
    
        document.getElementById("total").value=resultado
        document.getElementById('n1').value=""
        document.getElementById('n2').value=""
        
        
    }
    
  
        boton2.addEventListener("click",resta)
    
        function resta(){
            var nm1 = Number(document.getElementById("n1").value)
            var nm2 = Number(document.getElementById("n2").value)
            var resultad = nm1 - nm2
        
            document.getElementById("total").value=resultad
            document.getElementById('n1').value=""
            document.getElementById('n2').value=""
        }
    
    
    
        boton3.addEventListener('click',multiplicacion)
    
        function multiplicacion(){
            var nu1 = Number(document.getElementById("n1").value)
            var nu2 = Number(document.getElementById("n2").value)
            var resulta = nu1 * nu2
        
            document.getElementById("total").value=resulta
            document.getElementById('n1').value=""
            document.getElementById('n2').value=""
        }
    
   
    
  
        boton4.addEventListener('click',division)
        function division(){
            var n1 = Number(document.getElementById("n1").value)
            var n2 = Number(document.getElementById("n2").value)
            var result = n1 /n2
        
            document.getElementById("total").value=result
            document.getElementById('n1').value=""
            document.getElementById('n2').value=""
        }

