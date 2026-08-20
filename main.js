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
                texto: "ELe deve lançar um saque viagem neles!!",
                afirmacao: "Artur mira o saque entre os ladrões, ricocheteando a bola entre eles até um monte de areia próximo, levantando a areia e cegando seus oponentes. "
            },
            {
                texto: "Entregar o seu troféu :(",
                afirmacao: "Os rebeldes DO MAL pegam seu troféu e exigem mais pertences."
            }



        ]
    },
    {
        enunciado: "Irritados, eles afirmam que não querem apenas o troféu, mas todas as suas habilidades de vôlei. Eles utilizam um aspirador para tentar roubar a energia de volei de Kazuki. O que Artur deve fazer?",
        alternativas: [
            {
                texto: "Quebrar o aspirador",
                afirmacao: "Kazuki acerta uma machete que isola o aspirador!!"
            },
            {
                texto: "Desviar",
                afirmacao: "Kazuki perde 5% de suas habilidades de vôlei, ficando mais fraco"
            }
        ]
    },
    {
        enunciado: "Observando a ineficácia do aspirador, os ladrões decidem jogar o jogo de Kazuki. Os 3 lançam um saque flutuante, unidos para derrotar Kazuki. Como ele deve reagir?",
        alternativas: [
            {
                texto: "Jogar um Saque viagem para combater o saque flutuante unido poderoso deles",
                afirmacao: "A bola de Kazuki gira contra a deles, durante um tempo. Porém, o saque de Kazuki se mostra mais poderoso, e atravessa a bola dos inimigos, voando em direção deles"
            },
            {
                texto: "Bloquear o Saque com as mãos",
                afirmacao: "Após muito esforço, Kazuki redireciona a bola para eles, somado com a sua força, a bola atinge todos eles."
            }
        ]
    },
    {
        enunciado: "A poeira levanta... os inimigos estão todos no chão, sem conseguir se mover, Kazuki se agarra ao seu troféu quase perdido. Os inimigos pedem misericórdia, e pedem para Kazuki ser o mestre deles.",
        alternativas: [
            {
                texto: "Aceitar",
                afirmacao: "Após 20 anos de treinando seus pupilos, Kazuki não possuia muito tempo para si, e não obtém sucesso no mundial, porém, todos seus pupilos(que não maltratam mais animais de rua), obtiveram o primeiro lugar no mundial, os 3 sendo considerados os melhores de suas equipes independente da posição. Eles indicam Kazuki mundialmente, que funda a 'Kazukinhos Do Volêi', a escola mais renomada escola de volêi, procurada mundialmente. Kazuki se aposenta com 32 anos, milionário, considerado o melhor professor de volêi do mundo. Kazuki considerado um sensei do volêi, atinge um estado de paz de espírito tão grande, que atinge o nirvana, vivendo por longos 250 anos."
            },
            {
                texto: "Negar",
                afirmacao: "Kazuki nega o pedido deles, e envia todos em direção ao sol com um saque chapado. 20 anos depois, Kazuki ainda jovem se torna o melhor atleta de volêi do mundo. Considerado pela sua técnica impecável, e jogadas quase impossíveis. Kazuki já foi colocado para jogar em um time com crianças de 2 anos contra atletas profissionais, e ainda assim, venceu. Infelizmente, aos 67 anos, Kazuki falece após se engasgar com água, pois tinha se engasgado com um amendoim, e foi beber água e se engasgou de novo. O mundo inteiro parou para enaltecer o rei do volêi, e nunca mais na história, nasceu alguém tão bom quanto o Kazuki."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
}

mostraPergunta()
