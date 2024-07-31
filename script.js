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
            {
                texto: "Artesanato",
                afirmacao: "O artesanato valoriza habilidades tradicionais, materiais locais e técnicas ancestrais, preservando a identidade e a história de uma comunidade."
            }
        ]
    },
    {
        enunciado: "Qual o estilo de dança você gostaria de aprender ? ",
        alternativas: [
            {
                texto: "Samba .",
                afirmacao: "O samba é um estilo de dança brasileiro conhecido por sua energia vibrante, movimentos rápidos e pela celebração alegre da cultura e música do Brasil."
            },
            {
                texto: "Tango.",
              
          afirmacao: " O tango é uma dança que entrelaça paixão e precisão em cada passo, capturando a alma em movimento."
            },
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
                afirmacao: "Carnaval do Rio de Janeiro é um espetáculo de cores, ritmos e celebração que contagia todos os corações com sua energia vibrante e sua mistura única de música, dança e cultura brasileira."
            },{
                texto: "Dia Dos Mortos no Mexico.",
                afirmacao: "No Dia dos Mortos no México, celebra-se a vida dos entes queridos que já partiram, com festividades coloridas e rituais cheios de significado."
            },
            {
                texto:"Festival de Lanternas na Tailandia.",
                afirmacao: "O festival de lanternas na Tailândia ilumina o céu noturno com cores vibrantes, simbolizando desejos de boa sorte e renovação espiritual. "
            }
        ]
    },
    {
        enunciado: "Qual voce acredita ser o maior desafio da preservacão das linguas indigenas? ",
        alternativas: [
        {
                texto: "Falta de recursos.",
                afirmacao: "A falta de recursos refere-se à insuficiência de meios financeiros, materiais ou humanos necessários para realizar determinadas atividades ou alcançar objetivos específicos."
            },{
                texto: "Urbanizacao .",
                afirmacao: "Urbanização é o processo pelo qual áreas rurais são transformadas em centros urbanos, caracterizado pelo crescimento de população, infraestrutura urbana e desenvolvimento econômico."
            },
            {
                texto:"Globalizacao.",
                afirmacao: " A globalização promove a disseminação de línguas majoritárias e culturas dominantes, frequentemente em detrimento das línguas indígenas, que acabam sendo menos valorizadas e menos transmitidas."
            }
        ]
    }, {
        enunciado: "Qual é o papel mais importantes dos museus na sociedade atual? ",
        alternativas: [
        {
                texto: "Educação.",
                afirmacao: "1. Os museus são centros de aprendizado onde visitantes de todas as idades podem adquirir conhecimentos sobre história, arte, ciência e cultura. Eles oferecem exposições educativas, programas para escolas e atividades interativas que promovem a curiosidade e a compreensão."
            },{
                texto: "Preservação do patrimônio .",
                afirmacao: "Preservar e proteger objetos e artefatos históricos é crucial para manter a memória cultural e a identidade de uma sociedade. Os museus cuidam de coleções que documentam a história e a cultura, garantindo que futuras gerações possam aprender com o passado. "
            },
            {
                texto:"Entretenimento.",
                afirmacao: " 3. Os museus também são locais de entretenimento e lazer. Exposições interativas, eventos especiais e atividades culturais atraem visitantes e proporcionam experiências enriquecedoras que podem ser tanto educativas quanto divertidas."
            }
        ]
    },
    
    {
        enunciado: "Qual é a sua atividade cultural favorita em seu tempo livre? ",
        alternativas: [
        {
                texto: "Visitar museus.",
                afirmacao:"Visitar museus oferece aprendizado sobre arte, história e ciência, além de proporcionar uma experiência educativa e inspiradora para todas as idades. "
            },{
                texto: "Assistir a shows .",
                afirmacao: "Assistir a shows oferece entretenimento ao vivo, conecta o público com artistas e cria memórias duradouras, promovendo cultura e arte. "
            },
            {
                texto:"Ler livros.",
                afirmacao: " Ler livros amplia o conhecimento, estimula a imaginação, e melhora habilidades cognitivas e linguísticas. Além disso, proporciona entretenimento e desenvolvimento pessoal. "
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
