const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a forma de arte que você mais aprecia?",
        alternativas: [
            {
                texto: "Musica",
                afirmacao: "A música é uma arte que une pessoas e expressa sentimentos através de melodias e harmonias. . "
            },
            {
                texto: "Literatura",
                afirmacao: "A literatura é uma arte que explora ideias e evoca emoções através das palavras.. "
            },
            {
                texto: "dança",
                afirmacao: "A dança é uma arte que expressa emoções e histórias através do movimento do corpo."
            }
        ]
    },
    {
        enunciado: "Qual o tipo de culinária você prefere?",
        alternativas: [
            {
                texto: "Italiana",
                afirmacao:" A culinária italiana é celebrada por sua simplicidade elegante, ingredientes frescos e o uso habilidoso de ervas e azeites, criando pratos que encantam o paladar."
            }, {
                texto: "Brasileira",
                afirmacao: "A culinária brasileira é uma fusão vibrante de sabores, influências regionais e ingredientes tropicais, refletindo a diversidade cultural do país.."
            },
            {
                texto: "Japonesa",
                afirmacao: " A culinária japonesa é conhecida por sua delicadeza, frescor e pela habilidade em destacar os sabores naturais dos ingredientes."
            }
        ]
    },
    {
        enunciado: " Qual o gênero de música você prefere ?",
        alternativas: [
            {
                texto: "Sertanejo",
                afirmacao: "O sertanejo é um gênero musical que reflete a vida e as tradições do campo. "
            },
            
            
            {
                texto: "Rock",
                afirmacao: "c)O rock é um gênero musical que se destaca por sua energia vibrante, guitarras poderosas e letras muitas vezes rebeldes e introspectivas."
            },
            {
                texto: "Funk.",
             afirmacao: "O funk é um gênero musical caracterizado por ritmos contagiantes e batidas marcantes."
            }
        ]
    },
    {
        enunciado: "Qual o elemento cultural você prefere?",
        alternativas: [
            {
                texto: "Vestuário ",
                afirmacao: "O vestuário reflete tradições, identidades e modos de expressão cultural únicos. "
            },
            
            {
                texto: "Celebrações ",
                afirmacao: "As celebrações unem comunidades, transmitindo tradições, valores e sentimentos compartilhados por meio de rituais e festividades.",
            },
                texto: "Artesanato",
                afirmacao: "O artesanato valoriza habilidades tradicionais, materiais locais 
                e técnicas ancestrais, preservando a identidade e a história de uma comunidade."
            }
        ]
    },
    {
        enunciado: "Qual o estilo de dança você gostaria de aprender ? ",
        alternativas: [
            {
                texto: "Samba .",
                afirmacao: "O samba é um estilo de dança brasileiro conhecido por sua energia vibrante, movimentos rápidos e pela celebração alegre da cultura e música do Brasil."
            },{
                texto: "Tango.",
              
          afirmacao: " O tango é uma dança que entrelaça paixão e precisão em cada passo, capturando a alma em movimento."
            {
                texto: "Ballet.",
                afirmacao: "O balé é um estilo de dança caracterizado pela elegância, técnica refinada e expressão artística que combina movimentos graciosos e música clássica. "
            }
        ]
    },
    {
        enunciado: "Qual dessses eventos gostaria de participar? ",
        alternativas: [
            {
                texto: "Carnaval do Rio De Janeiro .",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },{
                texto: "Dia Dos Mortos no Mexico.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto:"Festival de Lanternas na Tailandia.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
    {
        enunciado: "Qual voce acredita ser o maior desafio da preservacao das linguas indigenas? ",
        alternativas: [
        {
                texto: "Falta de recursos.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },{
                texto: "Urbanizacao .",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto:"Globalizacao.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    }, {
        enunciado: "Qual é o papel mais importantes dos museus na sociedade atual? ",
        alternativas: [
        {
                texto: "Educação.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },{
                texto: "Preservação do patrimônio .",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto:"Entretenimento.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
    {
        enunciado: "Qual tradição cultural você considera mais importante? ",
        alternativas: [
        {
                texto: "Festival de música.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },{
                texto: "Cerimônias religiosas .",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto:"Desfiles tradicionais.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
    {
        enunciado: "Qual é a sua atividade cultural favorita em seu tempo livre? ",
        alternativas: [
        {
                texto: "Visitar museus.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },{
                texto: "Assistir a shows .",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto:"Ler livros.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
