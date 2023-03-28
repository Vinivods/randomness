//Scrolls
function scrollMusic() {
    window.scrollTo(0, 650)
}
function scrollQuote() {
    window.scrollTo(0, 1350)
}
function scrollConselho() {
    window.scrollTo(0, 1950)
}

//Funções para mudança de tema
const setTheme = theme => document.documentElement.className = theme;

// Funções para as músicas

function malzao() {
    let musicMalzao = ['Fake Plastic Tree - Radiohead', 'To Build a Home - The Cinematic Orchestra', 'Nice Dream - Radiohead', 'How to Disappear Completely - Radiohead', 'As Canções Que Você Fez Pra Mim - Maria Bethânia', 'Quando Bate Aquela Saudade - Rubel', 'Exit Music - Radiohead', 'True Love Waits - Radiohead', 'Como 2 e 2 - Gal Costa', 'Creep - Radiohead', 'No Surprises - Radiohead', 'The Ghost of You - My Chemical Romance', 'The Light Behind Your Eyes - My Chemical Romance', 'The World Is Ugly - My Chemical Romance', 'Cancer - My Chemical Romance', 'Disenchanted - My Chemical Romance', 'I Dont Love You - My Chemical Romance', 'Romantic Homicide - D4VD', 'Chamber of Reflection - Your Anxiety Buddy', 'Sentimental - Los Hermanos', 'The Night We Met - Lord Huron', 'Sparks - Coldplay', 'All I Want - Kodaline', 'The Wisp Sings - Winter Aid', 'Roslyn - St. Vincent']

    let randomMalzao = musicMalzao[Math.floor(Math.random() * musicMalzao.length)]

    document.querySelector('#musicResultado').innerHTML = randomMalzao
}

function mal() {
    let musicMal = ['You and Whose Army? - Radiohead', 'Street Spirit - Radiohead', 'Love Love Love - Of Monsters And Men', 'House of Cards = Radiohead', 'Redbone - Childish Gambino', 'The Kids from Yesterday - My Chemical Romance', 'Creep - Cover by Haley Reinhart', 'Summertime - My Chemical Romance', 'This Is How I Disappear - My Chemical Romance', 'Welcome to the Black Parade - My Chemical Romance', 'Bulletproof Heart - My Chemical Romance', '']

    let randomMal = musicMal[Math.floor(Math.random() * musicMal.length)]

    document.querySelector('#musicResultado').innerHTML = randomMal
    
}

function normal() {
    let musicNormal = ['West Side - 2Pac Pop Smoke', 'A Lot - 21 Savage', 'Welcome to the Black Parade - My Chemical Romance', 'Habits - Tove Lo Cover by Hailey Reihart', 'It Has Been A Long Time - Luther Allison', 'Stay With Me - Miki Matsubara', 'Cemetery Drive - My Chemical Romance', 'Do I Wanna Know? - Artic Monkeys', 'Knives Out - Radiohead', 'Walk A Mile In My Shoes - Big Daddy Wilson', 'Creep - Cover by Haley Reinhart']

    let randomNormal = musicNormal[Math.floor(Math.random() * musicNormal.length)]

    document.querySelector('#musicResultado').innerHTML = randomNormal
}

function bem() {
    let musicBem = ['SING - My Chemical Romance', 'House of Wolves - My Chemical Romance', 'The Sharpest Lives - My Chemical Romance', 'Famous Last Words - My Chemical Romance', 'Cemetery Drive - My Chemical Romance', 'Do I Wanna Know? - Artic Monkeys', 'I Write Sins Not Tragedies - Panic! At The Disco', 'Dance, Dance - Fall Out Boy', 'Last Nite - The Strokes', 'It Has Been A Long Time - Luther Allison', 'Walk A Mile In My Shoes - Big Daddy Wilson', 'Pagando Mal com Mal - Menos é Mais', 'Todo Amor do Mundo - Menos é Mais', 'Habits - Tove Lo Cover by Hailey Reihart', 'Stay With Me - Miki Matsubara', 'Somebody That I Used To Know - Gotye', 'A Raposa e As Uvas - Reginaldo Rossi', 'Meu Ex-Amor - Amado Batista', 'Seresteiro das Noites - Amado Batista', 'Garçon - Reginaldo Rossi', 'Princesa - Amado Batista', 'HIP - MAMMAMOO', 'Jigsaw Falling Into Place - Radiohead', 'Knives Out - Radiohead', 'West Side - 2Pac Pop Smoke']

    let randomBem = musicBem[Math.floor(Math.random() * musicBem.length)]

    document.querySelector('#musicResultado').innerHTML = randomBem
}

function maravilhoso() {
    let musicMaravilhoso = ['Teenagers - My Chemical Romance', 'Planetary(GO!) - My Chemical Romance', 'Na Na Na - My Chemical Romance', 'Mama - My Chemical Romance', 'House of Wolves - My Chemical Romance', 'The Sharpest Lives - My Chemical Romance', 'Dead! - My Chemical Romance', 'You Know What They Do to Guys Like Us in Prison - My Chemical Romance', 'Pagando Mal com Mal - Menos é Mais', 'Todo Amor do Mundo', 'Antifragile - Le Sserafim', 'Põe um Menos é Mais aí', 'A Raposa e As Uvas - Reginaldo Rossi', 'Meu Ex-Amor - Amado Batista', 'Seresteiro das Noites - Amado Batista', 'Garçon - Reginaldo Rossi', 'Princesa - Amado Batista', 'HIP - MAMMAMOO', 'Jigsaw Falling Into Place - Radiohead', 'Knives Out - Radiohead', 'West Side - 2Pac Pop Smoke']

    let randomMaravilhoso = musicMaravilhoso[Math.floor(Math.random() * musicMaravilhoso.length)]

    document.querySelector('#musicResultado').innerHTML = randomMaravilhoso
}

//Funções para as frases
setInterval(function quotes() {
    let myQuotes = ['"Amar é o melhor que fazemos - Ted Mosby"', '"Para uma mente bem estruturada, a morte é apenas a aventura seguinte - Alvo Dumbledore"', '"É preciso dizer a verdade apenas a quem está disposto a ouvi-la - Sêneca"', '"O homem sempre está disposto a negar aquilo que não compreende - Blaise Pascal"', '"Sábio é aquele que conhece os limites da própria ignorância - Sócrates"', '"Nada é tão lamentável e nocivo quanto antecipar desgraças - Sêneca"', '"É parte da cura o desejo de ser curado - Sêneca"']

    let randomQuotes = myQuotes[Math.floor(Math.random() * myQuotes.length)]

    document.querySelector('#fraseResultado').innerHTML = randomQuotes

}, 10000);

//Funções para os conselhos
function perguntar() {
    let meusConselhos = ['Sim', 'Não', 'É claro', 'Honestamente falando, nem você acredita nisso', 'Você pode dizer que não, mas lá no fundo você sabe que sim', 'Você pode dizer que sim, mas lá no fundo você sabe que não', 'Sim, mas não force','Sim, mas vá com calma', 'Não, e forçar não vai adiantar', 'Se é tão difícil, talvez não devesse acontecer', 'Sim, se você acreditar mesmo', 'O resultado será ótimo', 'Talvez','Absolutamente sim!', 'Não, e nem você acredita', 'Você não vai se arrepender', 'Sim, e todos sabem disso', 'É certo que sim', 'Não agora, mas vai acontecer', 'Você só precisa esperar mais um pouco', 'Sim sim sim absolutamente!'];

    let randomConselhos = meusConselhos[Math.floor(Math.random() * meusConselhos.length)]

    document.querySelector('#conselhoResultado').innerHTML = randomConselhos
}