let cash = 50;
let hp = 100.0;
let conta = 200;
let respeito = 0;
var passName = "";
function getPlayerName()
{
    passName = document.getElementById("nomejogador").value;
    console.log(`NOME: ${passName}`);
    passName = passName.replace(/^\s+/, '').replace(/\s+$/, '');
    if (passName === '')
    {
        document.getElementById("id-texto-principal").innerHTML = `Olá. Para iniciar essa jornada, digite seu nome`;
        document.getElementById("id-texto-principal").innerHTML += `<input type="text" name="nome" id="nomejogador">`
        document.getElementById("id-texto-principal").innerHTML += `<input type="submit" value="Jogar" onclick='getPlayerName()';'>`
        document.getElementById("id-texto-principal").innerHTML += `<br> Digite um nome válido.`;
    } 
    else
    {
        startGame();
    }
}
function startGame()
{
    document.getElementById("id-texto-principal").innerHTML = `Seu nome é ${passName}, você acaba de voltar de Nova Iorque para sua cidade natal para uma "negócio" que ocorrerá dentro de dias.<br> A facção na qual você pertence já não tem mais tanta influência na cidade quanto há 5 anos atrás. Portanto, fique sempre alerta.<br>. Levando em conta que você acabou de chegar no aeroporto com bagagem e precisa ir pra casa, escolha uma das ações.`;
    document.getElementById("id-texto-principal").innerHTML += `<br><button onclick="ramoUmUm()">Pegar um táxi</button><button onclick="ramoUmDois()">Alugar um carro</button><button onclick="ramoUmTres()">Sacar um dinheiro</button><button onclick="ramoUmQuatro()">Ir a pé</button>`;
    document.getElementById("local").innerText = "Aeroporto";
    document.getElementById("dia").innerText = "1";
    atualizarStatus();
}
function ramoUmUm()
{
    document.getElementById("id-texto-principal").innerHTML = "Você pegou um táxi e custou $50";
    cash -=50;
    document.getElementById("local").innerText = "Casa";
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="ramoDoisUm()">Avançar</button>`;
    atualizarStatus();
    //ramoDoisUm();
}
function ramoUmDois()
{
    if(cash < 100)
    {
        document.getElementById("id-texto-principal").innerHTML = `Alugar um veículo custa $100 e você só tem ${cash}. Saque um dinheiro antes.`;
        document.getElementById("id-texto-principal").innerHTML += `<br><button onclick="startGame()">Voltar ao menu anterior</button>`;
    }
    else
    {
        document.getElementById("id-texto-principal").innerHTML = `Você alugou um veículo e conseguiu chegar na sua residência`;
        cash -= 100;
        atualizarStatus();
        document.getElementById("local").innerHTML = `Casa`;
    }
}
function ramoUmQuatro()
{
    document.getElementById("id-texto-principal").innerHTML = `Depois de 2 horas e meia de caminhada você chegou na sua casa em South L.A`;
    document.getElementById("local").innerHTML = `Casa`;
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="ramoDoisUm()">Avançar</button>`;
}
function ramoUmTres()
{
    document.getElementById("id-texto-principal").innerHTML = `Digite a quantia que deseja sacar. Dinheiro em conta:$${conta}`;
    document.getElementById("id-texto-principal").innerHTML += `<input type="text" id="sacargrana">`;
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="sacarDinheiro(parseInt(document.getElementById('sacargrana').value))">Sacar</button>`;
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="startGame()">Voltar</button>`;
}
function ramoDoisUm()
{
    document.getElementById("id-texto-principal").innerHTML = "Você chega em casa, descansa e no dia seguinte recebe uma ligação de um amigo da sua facção pedindo reforço em um tiroteio.<br>"
    document.getElementById("id-texto-principal").innerHTML += `Pegue um "ferro" e vá para o combate<br>`;
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="ramoTresUm()">Ok</button>`;
    document.getElementById("dia").innerHTML = `2`;
}
function ramoTresUm()
{
    document.getElementById("id-texto-principal").innerHTML = `Escolha uma arma:<br>`;
    document.getElementById("id-texto-principal").innerHTML += `<input type="radio" id="beretta" name="gun" value="1">`;
    document.getElementById("id-texto-principal").innerHTML += `<label for="beretta">Beretta</label>`;
    document.getElementById("id-texto-principal").innerHTML += `<input type="radio" id="colt" name="gun" value="2">`;
    document.getElementById("id-texto-principal").innerHTML +=  `<label for="colt">Colt</label>`;
    document.getElementById("id-texto-principal").innerHTML += `<input type="radio" id="deagle" name="gun" value="2">`;
    document.getElementById("id-texto-principal").innerHTML +=  `<label for="deagle">Desert Eagle</label>`;
    document.getElementById("id-texto-principal").innerHTML +=  `<button onclick="ramoQuatroUm()">Escolher</button>`;

}
function ramoQuatroUm()
{
    let x = document.getElementById('beretta');
    let y = document.getElementById('colt');
    let z =document.getElementById('deagle');
    if(x.checked || y.checked||z.checked)
    {
        document.getElementById("local").innerHTML = `South L.A`;
        let randomico = Math.round(Math.random()*100);
        console.log("[DEBUG] O sistema gerou o número "+randomico);
        if(randomico <= 20)
        {
            document.getElementById("id-texto-principal").innerHTML = "A polícia chegou no local, isolou o perímetro e prendeu todos presentes.<br>";
            document.getElementById("id-texto-principal").innerHTML += "Fim de Jogo.<br>";
            document.getElementById("id-texto-principal").innerHTML += `<button onclick="window.location.reload()">Jogar Novamente</button>`;
            document.getElementById("id-texto-principal").innerHTML += `<button onclick="gameFinalStatus()">Encerrar jogo</button>`;
            hp -= 60;
            cash = 0;
            atualizarStatus();
        }
        else if(randomico > 20 && randomico <= 40)
        {
            document.getElementById("id-texto-principal").innerHTML = "Você acabou gravemente ferido no combate e morreu.<br>";
            document.getElementById("id-texto-principal").innerHTML += "Fim de Jogo.<br>";
            document.getElementById("id-texto-principal").innerHTML += `<button onclick="window.location.reload()">Jogar Novamente</button>`;
            document.getElementById("id-texto-principal").innerHTML += `<button onclick="gameFinalStatus()">Encerrar jogo</button>`;
            hp, cash, conta = 0;
            atualizarStatus();
        }
        else
        {
            document.getElementById("id-texto-principal").innerHTML = "Vocês conseguiram, por sorte, escapar dos disparos e de um cerco feito pela polícia.<br>";
            document.getElementById("id-texto-principal").innerHTML += `<button onclick="ramoCincoUm()">Voltar para casa com seu amigo</button>`;
            respeito += 50;
        }
    }
    else
    {
        document.getElementById("id-texto-principal").innerHTML += `<br>Escolha uma opção para prosseguir.`;
    }
}
function ramoCincoUm()
{
    document.getElementById("local").innerHTML = "Casa";
    document.getElementById("id-texto-principal").innerHTML = "Vocês voltaram para casa e receberam uma mensagem informando que a negociação acontecerá amanhã.<br>";
    document.getElementById("id-texto-principal").innerHTML += `<br><button onclick="ramoSeisUm()">Avançar</button>`;
}
function ramoSeisUm()
{
    document.getElementById("dia").innerHTML = "3";
    let randomico = Math.round(Math.random()*100);
    if(randomico <= 30)
    {
        document.getElementById("id-texto-principal").innerHTML = `Era uma emboscada da DEA! Você e todos envolvidos na negociação morreram.`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="window.location.reload()">Jogar Novamente</button>`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="gameFinalStatus()">Encerrar jogo</button>`;
        hp = 0;
        cash = 0;
    }
    else 
    {
        document.getElementById("id-texto-principal").innerHTML = `Vocês conseguiram fechar negócio e lucraram $100.000 dólares.<br>`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="gameFinalStatus()">Encerrar Jogo</button>`;
        document.getElementById("passed").play();
        cash +=100000;
        respeito += 50;
    }
    atualizarStatus();
}
function sacarDinheiro(grana)
{
    if(grana < 0 || grana > conta) // tratar o erro caso o usuário digite em branco ou com espaçamento.
    {
        document.getElementById("id-texto-principal").innerHTML = `Digite uma quantia válida`;
        document.getElementById("id-texto-principal").innerHTML += `Digite a quantia que deseja sacar. Dinheiro em conta:$${conta}`;
        document.getElementById("id-texto-principal").innerHTML += `<input type="text" id="sacargrana">`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="sacarDinheiro(parseInt(document.getElementById('sacargrana').value))">Sacar</button>`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="startGame()">Voltar</button>`;
    }
    else
    {
        cash += grana;
        conta -=grana;
        document.getElementById("id-texto-principal").innerHTML = `Digite a quantia que deseja sacar. Dinheiro em conta:$${conta}`;
        document.getElementById("id-texto-principal").innerHTML += `<input type="text" id="sacargrana">`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="sacarDinheiro(parseInt(document.getElementById('sacargrana').value))">Sacar</button>`;
        document.getElementById("id-texto-principal").innerHTML += `<button onclick="startGame()">Voltar</button>`;
        atualizarStatus();
    }

}
function atualizarStatus()
{
    document.getElementById("hp").style.width = hp.toString()+'%';
    document.getElementById("cash").innerText = cash;   
}
function gameFinalStatus()
{
    document.getElementById("id-texto-principal").innerHTML = `Você encerrou o jogo com:<br>`;
    document.getElementById("id-texto-principal").innerHTML += `$${cash} em dinheiro vivo e $${conta} na conta bancária<br>`;
    document.getElementById("id-texto-principal").innerHTML += `${respeito}/100 pontos de respeito<br>`;
    document.getElementById("id-texto-principal").innerHTML += `<button onclick="window.location.reload()">Jogar Novamente</button>`;
    // x% de health points
}
/*    document.getElementById("content").innerHTML = `Você foi deixado longe do seu bairro e com ${cash} USD`
    document.getElementById("content").innerHTML += '<input type="radio" id="male" name="gender" value="male">'
    document.getElementById("content").innerHTML += `<div class="content" style="width:25%">25%</div>`; 
Para acessar seu inventário basta digitar /inventario na linha de comando.*/
/*function ramoUmUm() //40% de chance de sucesso e 60% de chance de fracasso...
{
    let randomico = Math.random()*100;
    if(randomico >= 60)
    {
        document.getElementById("id-texto-principal").innerText = `Você partiu pra briga com seu inimigo, porém perdeu 70% de hp. Você pode recuperar health points através de comidas e lanches. O que deseja fazer?`;
        document.getElementById("id-texto-principal").innerHTML += `<br><button onclick="ramoDoisUm()">Pegar um rango no fastfood</button> <button onclick="ramoDoisDois()">Furtar um veículo e ir pra casa</button>`;
        hp = 30.0;
    }
    else
    {
        document.getElementById("id-texto-principal").innerText="Um policial avistou a briga e vocês dois foram presos. Fim de jogo."
        cash = 0;
    }
    atualizarStatus();
}*/