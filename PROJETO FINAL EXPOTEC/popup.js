const content = {
    atletas: `O Canadá é renomado por ter formado alguns dos maiores atletas olímpicos da história, que se destacam em várias modalidades. Entre os mais icônicos estão Donovan Bailey, que conquistou ouro no atletismo em Atlanta 1996, e Clara Hughes, a medalhista versátil em ciclismo e patinação. Hayley Wickenheiser é uma lenda no hóquei no gelo, com quatro ouros e uma prata, enquanto Catriona Le May Doan brilhou na patinação de velocidade. Tessa Virtue e Scott Moir impressionaram nas competições de dança no gelo.

Atualmente, o Canadá continua a produzir estrelas olímpicas notáveis, como Penny Oleksiak, a nadadora mais condecorada do país, e Andre De Grasse e Damian Warner no atletismo. Maggie Mac Neil e Laurence Vincent-Lapointe se destacam na natação e na canoagem, respectivamente. Esses atletas mantêm viva a rica tradição olímpica canadense com suas performances inspiradoras.`,

    olimpiadas: `O Canadá tem uma rica história nos Jogos Olímpicos, sendo um dos poucos países a sediar tanto os Jogos de Verão quanto os de Inverno. A estreia como anfitrião ocorreu em Montreal, em 1976, embora o país não tenha conquistado medalhas de ouro. Este evento ficou marcado por momentos icônicos, como a performance de Nadia Comăneci, que fez história na ginástica.

Em 1988, Calgary sediou os Jogos Olímpicos de Inverno pela primeira vez, promovendo o curling e destacando a coragem de atletas como Eddie "The Eagle" Edwards no salto de esqui. Embora o Canadá não tenha conquistado ouro em casa, esses jogos ajudaram a popularizar os esportes de inverno.

O auge olímpico canadense aconteceu em Vancouver 2010, quando o país conquistou um recorde de 14 medalhas de ouro, incluindo vitórias memoráveis no hóquei no gelo masculino e feminino. Esses jogos são amplamente considerados um dos maiores sucessos olímpicos do Canadá em organização e desempenho atlético.`,

    esportes: `O Canadá possui uma rica cultura esportiva que é fundamental para sua identidade nacional. O hóquei no gelo é o esporte mais emblemático do país, sendo uma paixão nacional que atrai uma base de fãs fervorosa, especialmente na NHL, que revela talentos que brilham nas Olimpíadas. Além disso, o lacrosse, com raízes nas comunidades indígenas, é considerado o esporte nacional de verão e reflete a diversidade cultural do país.

Os esportes de inverno ocupam um lugar especial no coração dos canadenses, com destaque para modalidades como esqui alpino, patinação artística, biatlo e snowboard. O cenário montanhoso e os rigorosos invernos ajudam a desenvolver atletas de classe mundial que competem em eventos como os Jogos Olímpicos de Inverno.

Além disso, o rugby e o futebol estão crescendo em popularidade, especialmente entre os jovens. A Canadian Football League (CFL) atrai fãs com seu estilo de jogo único, enquanto a seleção nacional de futebol feminino tem se destacado em competições internacionais, promovendo o esporte em todo o país.`,

    estadios: `O Canadá possui uma rica variedade de estádios e arenas que refletem sua cultura esportiva e paixão por eventos ao vivo. O Rogers Centre em Toronto, anteriormente conhecido como SkyDome, é um dos mais icônicos, com teto retrátil, sendo a casa do time de beisebol Toronto Blue Jays e palco de grandes shows.

O BC Place em Vancouver, com capacidade para mais de 54.000 espectadores e um teto inflável, abriga o Vancouver Whitecaps FC e foi um local importante durante os Jogos Olímpicos de Inverno de 2010.

Em Montreal, o Stade Olympique, construído para os Jogos de 1976, é famoso por sua torre inclinada e serve para diversos eventos esportivos e culturais. O Scotiabank Saddledome em Calgary é conhecido por sua arquitetura única e pela vibrante atmosfera durante os jogos do Calgary Flames.`,

    eventos: `O Canadá abriga uma variedade de eventos icônicos que refletem sua diversidade cultural e paixão por esportes e festivais. Os Jogos Olímpicos de Inverno de Vancouver 2010 são memoráveis, com o país conquistando um recorde de 14 medalhas de ouro, especialmente nas vitórias emocionantes no hóquei no gelo.

O Calgary Stampede, um rodeio realizado em julho, celebra a cultura cowboy e atrai visitantes do mundo todo, com competições de montaria e apresentações musicais. No âmbito cinematográfico, o Toronto International Film Festival (TIFF) é um dos mais prestigiados, trazendo estreias de filmes e celebridades de Hollywood todos os anos.

Outro destaque é o Festival Internacional de Jazz de Montreal, que reúne músicos de jazz globalmente, proporcionando performances vibrantes ao ar livre. Por fim, a Copa do Mundo de Futebol Feminino de 2015 no Canadá deixou um legado importante, destacando o talento das jogadoras e promovendo o futebol feminino no país.`,

    torcida: `A torcida canadense é famosa por sua paixão e apoio incondicional às equipes e atletas, criando uma atmosfera vibrante em estádios e arenas. No hóquei no gelo, considerado o esporte nacional, os fãs do Toronto Maple Leafs, Montreal Canadiens e Vancouver Canucks se destacam por sua lealdade e energia, transformando os jogos em verdadeiros eventos emocionantes.

No futebol, as torcidas do Toronto FC e do Vancouver Whitecaps FC também mostram um espírito fervoroso, com coreografias, bandeiras e cânticos eletrizantes. O apoio à seleção nacional é evidente, especialmente nas competições internacionais, onde os fãs se reúnem em grande número.

Além disso, os torcedores do Toronto Raptors demonstraram sua paixão durante a corrida ao título da NBA em 2019, com celebrações memoráveis nas ruas. Durante os Jogos Olímpicos, a torcida canadense une-se em apoio aos atletas, frequentemente exibindo as cores da bandeira nacional, simbolizando o orgulho e a unidade do país.`
};
function showPopup(topic) {
    const popupText = document.getElementById("popup-text");
    const popupImage = document.querySelector(".popup-image");

    let imageSrc = "";
    let textContent = "";

    switch (topic) {
        case 'atletas':
            imageSrc = 'atletas.png'; // Caminho da imagem dos atletas
            textContent = content.atletas; // Texto sobre atletas
            break;
        case 'olimpiadas':
            imageSrc = 'olimpiadas.png'; // Caminho da imagem das olimpíadas
            textContent = content.olimpiadas; // Texto sobre olimpíadas
            break;
        case 'esportes':
            imageSrc = 'esportes.png'; // Caminho da imagem dos esportes
            textContent = content.esportes; // Texto sobre esportes
            break;
        case 'estadios':
            imageSrc = 'estadio.png'; // Caminho da imagem dos estádios
            textContent = content.estadios; // Texto sobre estádios
            break;
        case 'eventos':
            imageSrc = 'eventos.png'; // Caminho da imagem dos eventos
            textContent = content.eventos; // Texto sobre eventos
            break;
        case 'torcida':
            imageSrc = 'torcida.png'; // Caminho da imagem da torcida
            textContent = content.torcida; // Texto sobre torcida
            break;
    }

    popupText.innerHTML = textContent; // Atualiza o conteúdo do texto do popup
    popupImage.src = imageSrc; // Atualiza a imagem do popup
    document.getElementById("popup").style.display = "block"; // Mostra o popup
}

function hidePopup() {
    document.getElementById("popup").style.display = "none"; // Esconde o popup
}
const popupCarrossel = document.getElementById('popupCarrossel');
const fecharPopup = document.getElementById('fecharPopup');
const imagemCarrossel = document.getElementById('imagemCarrossel');

const imagens = [
    'niagara.png', // Use uma imagem de placeholder para testes
    'banff.png',
    'tower.png',
    'oldquebec.png',
    'stanley.png',
    'peggys-lighthouse.jpg',
    'capilano-bridge.jpg',
    'parliament-hill.jpg'
];

let indiceAtual = 0;

function abrirCarrossel(indice) {
    indiceAtual = indice;
    console.log("Abrindo imagem de índice:", indiceAtual); // Mensagem de depuração
    imagemCarrossel.src = imagens[indiceAtual];
    popupCarrossel.style.display = 'flex';
}

function mudarSlide(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    console.log("Mudando para imagem de índice:", indiceAtual); // Mensagem de depuração
    imagemCarrossel.src = imagens[indiceAtual];
}

fecharPopup.addEventListener('click', () => {
    popupCarrossel.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popupCarrossel) {
        popupCarrossel.style.display = 'none';
    }
});
