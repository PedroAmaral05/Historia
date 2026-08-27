const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Artur Kazuki estava voltando da escola para casa, quando um grupo de adolescentes rebeldes (que maltratavam animais em situação de rua😱 😱 😱, e o Artur odeia isso) o abordaram e anunciaram um assalto com o objetivo de roubar seu troféu de MVP da Liga de Vôlei. O que Kazuki deve fazer? ",
        alternativas: [
            {
                texto: "Lançar um saque viagem neles!!",
                afirmacao: "Kazuki estava voltando da escola para casa, quando um grupo de adolescentes rebeldes o abordaram e anunciaram um assalto, exigindo seu troféu de MVP da Liga. Para se defender Artur mira um saque viagem entre os ladrões, ricocheteando a bola entre eles até um monte de areia próximo, levantando a areia e cegando seus oponentes. "
            },
            {
                texto: "Entregar o seu troféu :(",
                afirmacao: "Kazuki estava voltando da escola para casa, quando um grupo de adolescentes rebeldes o abordaram e anunciaram um assalto, exigindo seu troféu de MVP da Liga. Acuado, Kazuki entrega o seu troféu, os rebeldes DO MAL o pegam e exigem mais pertences."
            }



        ]
    },
    {
        enunciado: "Irritados, eles afirmam que não querem apenas o troféu, mas todas as suas habilidades de vôlei. Eles utilizam um aspirador para tentar roubar a energia de volei de Kazuki. O que Artur deve fazer?",
        alternativas: [
            {
                texto: "Quebrar o aspirador",
                afirmacao: "
                Os ladrões afirmam que não querem apenas o troféu, mas todas as suas habilidades de vôlei, utilizando um aspirador para tentar roubar a energia de volei de Kazuki, que acerta uma machete no aspirador e o isola!!"
            },
            {
                texto: "Desviar",
                afirmacao: "
                Os ladrões afirmam que não querem apenas o troféu, mas todas as suas habilidades de vôlei, utilizando um aspirador para tentar roubar a energia de volei de Kazuki. Tentando desviar, ele perde 5% de suas habilidades de vôlei, ficando mais fraco"
            }
        ]
    },
    {
        enunciado: "Observando a ineficácia do aspirador, os ladrões decidem jogar o jogo de Kazuki. Os 3 lançam um saque flutuante, unidos para derrotar Kazuki. Como ele deve reagir?",
        alternativas: [
            {
                texto: "Jogar um Saque viagem para combater o saque flutuante unido poderoso deles",
                afirmacao: "
                Observando a ineficácia do aspirador, os ladrões decidem jogar o jogo de Kazuki. Os 3 lançam um saque flutuante, unidos para derrotar Kazuki. Artur se defende jogando um saque viajante para combater o saque flutuante unido poderoso deles. A bola de Kazuki gira contra a deles, durante um tempo, porém, o saque de Kazuki se mostra mais poderoso e atravessa a bola dos inimigos, voando em direção deles"
            },
            {
                texto: "Bloquear o Saque com as mãos",
                afirmacao: "
                Observando a ineficácia do aspirador, os ladrões decidem jogar o jogo de Kazuki. Os 3 lançam um saque flutuante, unidos para derrotar Kazuki. Artur se defende bloqueando o saque com as mãos. Após muito esforço, Kazuki redireciona a bola para eles, somado com a sua força, a bola atinge todos eles."
            }
        ]
    },
    {
        enunciado: "A poeira levanta... os inimigos estão todos no chão, sem conseguir se mover, Kazuki se agarra ao seu troféu quase perdido. Os inimigos pedem misericórdia, e pedem para Kazuki ser o mestre deles.",
        alternativas: [
            {
                texto: "Aceitar",
                afirmacao: "
                Os inimigos estão todos no chão...pedindo misericórdia e que Kazuki se torne o mestre de vôlei deles. Kazuki aceita o pedido. Após 20 anos de treinando seus pupilos, Kazuki não possuia muito tempo para si, e não obtém sucesso no mundial, porém, todos seus pupilos(que não maltratam mais animais de rua), obtiveram o primeiro lugar no mundial, os 3 sendo considerados os melhores de suas equipes independente da posição. Eles indicam Kazuki mundialmente, que funda a 'Kazukinhos Do Volêi', a escola mais renomada escola de volêi, procurada mundialmente. Kazuki se aposenta com 32 anos, milionário, considerado o melhor professor de volêi do mundo. Kazuki considerado um sensei do volêi, atinge um estado de paz de espírito tão grande, que atinge o nirvana, vivendo por longos 250 anos."
            },
            {
                texto: "Negar",
                afirmacao: "
                Os inimigos estão todos no chão...pedindo misericórdia e que Kazuki se torne o mestre de vôlei deles. Kazuki nega o pedido deles, e envia todos em direção ao sol com um saque chapado. 20 anos depois, Kazuki ainda jovem se torna o melhor atleta de volêi do mundo. Considerado pela sua técnica impecável, e jogadas quase impossíveis. Kazuki já foi colocado para jogar em um time com crianças de 2 anos contra atletas profissionais, e ainda assim, venceu. Infelizmente, aos 67 anos, Kazuki falece após se engasgar com água, pois tinha se engasgado com um amendoim, e foi beber água e se engasgou de novo. O mundo inteiro parou para enaltecer o rei do volêi, e nunca mais na história, nasceu alguém tão bom quanto o Kazuki."
            }
        ]
    },
    {
        enunciado: "No pós-vida, Kazuki se encontra no vôleihalla, conhecendo grandes nomes do esporte como Giba, Serginho, Ana Moser e Sheilla Castro. E possui duas opções, se concretizar naquela terra sendo mais um entre os melhores jogadores de vôlei que já existiram, ou pode tentar desafiar os deuses do vôlei.",
        alternativas: [
            {
                texto: "Descansar juntos dos melhores do vôlei",
                afirmacao: "
                No pós-vida, Kazuki se encontra no vôleihalla, conhecendo grandes nomes do esporte como Giba, Serginho, Ana Moser e Sheilla Castro. E possui duas opções, se concretizar naquela terra sendo mais um entre os melhores jogadores de vôlei que já existiram, ou pode tentar desafiar os deuses do vôlei. Kazuki decide descansar em paz entre os melhores do vôlei, porém, eles o consideram a maior lenda a pisar naquele reino, e Kazuki recebe o título de 'Monge do vôlei', operando os campeonatos daquela terra. Além disso, ele é considerado para futuramente ser o sucessor de Volnus, o senhor das bolas e das redes."
            },
            {
                texto: "Desafiar os Deuses do Vôlei",
                afirmacao: "
                No pós-vida, Kazuki se encontra no vôleihalla, conhecendo grandes nomes do esporte como Giba, Serginho, Ana Moser e Sheilla Castro. E possui duas opções, se concretizar naquela terra sendo mais um entre os melhores jogadores de vôlei que já existiram, ou pode tentar desafiar os deuses do vôlei. Kazuki decide desafiar os deuses do vôlei, enfrentando Volnus, o Senhor das bolas e das redes, porém esse Deus era muito poderoso. Em uma partida acirrada, a divindade percebe a ameaça que Kazuki representa, e o bane após sua derrota. Atualmente, Kazuki vaga como um fantasma pela terra, procurando um dia alguém que fosse melhor que ele, torcendo para que esse indivíduo seja capaz de derrotar Volnus, e removê-lo do exílio de vôleihalla",
            }
        ]
    },
];

let atual= 0
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado()
        return
    }
    perguntaAtual = perguntas [atual]
    caixaPerguntas.textContent =perguntaAtual.enunciado
    caixaAlternativas.textContent = "";
    mostraAlternativas()
}

function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent =alternativa.texto
        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao
    historiaFinal += afirmacoes + ""
    atual++
    mostraPergunta()
}
function mostraResultado(){
    caixaPerguntas.textContent = ""
    textoResultado.textContent= historiaFinal
    caixaAlternativas.textContent="";
}

mostraPergunta()
