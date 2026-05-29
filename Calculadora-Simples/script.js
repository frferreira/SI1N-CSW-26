function calculaIdade()
{
    let anoNascimento = document.getElementById("anoNascimento").value
    let idade = 0;
    let anoAtual = new Date().getFullYear();
  

    idade =  anoAtual - anoNascimento


    if (anoNascimento <= 0){
        alert("Digite uma ano valido")
        return
    }
    document.getElementById("resultador").innerHTML = "Sua Idade é : " + idade 

}

function calcularNumerica(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let op = document.getElementById("operacao").value
    
    let resultado = 0

    switch (op) {
        case "+" : resultado = Number(n1) + Number(n2); break;

        case "*" : resultado = n1 * n2; break;

        case "-" : resultado = n1 - n2; break;

        default: resultado = n1 / n2; break;
    }


    document.getElementById("resultador").innerHTML = "O Resultado da Operação é : " + resultado 

}

function calcularIdadeCompleta()
{
    
    let dia = document.getElementById("dia").value
    
    let mes = document.getElementById("mes").value
    
    let ano = document.getElementById("ano").value

    let hoje = new Date()

    hoje = DataBrasil(hoje)
    console.log(hoje)

    if (dia <= 0 || dia > 31 || ano <= 0) {
            alert("Digite uma data de nascimento valida")
            return
        }


    let nascimento = new Date(`${ano}/${mes}/${dia}`)
    
  
   
    let idade = hoje.getFullYear() - nascimento.getFullYear()
 

    let aniversario = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())

    

    if (aniversario > hoje) 
        idade--

    document.getElementById("resultador").innerHTML = "Sua Idade é : " + idade 
}

const DataBrasil = (dtUTC) =>{


     let dtfrm = dtUTC.toLocaleDateString('pt-BR');
   
     return new Date(FormataStringData(dtfrm))

} 

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}