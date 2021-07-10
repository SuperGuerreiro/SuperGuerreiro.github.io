var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

var isClosed = true;

var bio1 = 'Em 2018, seguem-se mais concertos e as gravações do EP de estreia, tendo a banda participado no já mencionado Festival da Liberdade - onde são também entrevistados num breve segmento do podcast Maluco Beleza, de Rui Unas - assim como no XXIII Festival de Música Moderna de Corroios, e finalmente no concurso de bandas do Vagos Metal Fest. Concluídas as gravações do EP, é lançado o single de estreia "Breaking The Dogma", em Agosto de 2018. No final desse ano, Filipe e Daniel saem da banda, e é recrutado Henrique Simas como guitarrista lead. Renato passa a desempenhar o papel de guitarrista ritmo, assim como voz principal da banda, com Bernardo Rebelo no apoio de algumas das tarefas vocais.';

var bio2 = 'Em Maio de 2019 é lançado o EP e é feita a divulgação desse trabalho, ao mesmo tempo que é escrito e composto o álbum de estreia. Em Dezembro de 2019, num concerto que junta várias bandas de metal portuguesas no Cine Incrível, em Almada, partilha-se o palco com os estreantes (mas não menos formidáveis) The Darkest Fall, assim como bandas míticas do underground português como Decayed e Sacred Sin, onde, juntamente com o EP de estreia, são tocadas algumas das músicas que integram o álbum de estreia.';
    
var bio3 = 'No ano de 2020, começa o planeamento da gravação do álbum em que, com a pandemia, o processo é atrasado com a incerteza de quando seria possível ser iniciado. Finalmente em Agosto de 2020, a banda embarca nessas gravações, estando neste momento a finalizar o processo. Em Maio de 2021, é lançado o primeiro single deste trabalho, entitulado de "Apostasy", uma explosão de som onde o moderno se alia ao antigo. Em Julho, é lançado o segundo single, "Tragedy Befalls", com um som mais abordável, mas não menos progressivo.';

var bio4 = 'Em suma, os Crimson Bridge procuram uma mistura de sonoridades, onde se inclui de tudo um pouco: desde sons mais pesados, passagens mais melódicas ou até algo completamente diferente. Resumidamente, tudo aquilo que nos soa bem - quer por um motivo ou por outro - é válido. O nosso objectivo é, no fundo, retribuir o que nos foi "dado" pela música ao longo das nossas vidas, esperando que esta banda e a sua música, signifique para vocês, o que significa para nós.';



function loadBio() {
    //loads up bio
    if(isClosed){
        document.getElementById("btnReadMore").innerHTML = "Show Less";
        document.getElementById("bio1").innerHTML = bio1;
        document.getElementById("bio2").innerHTML = bio2;
        document.getElementById("bio3").innerHTML = bio3;
        document.getElementById("bio4").innerHTML = bio4;
        
    }
    
    //collapses bio
    if(!isClosed){
        document.getElementById("btnReadMore").innerHTML = "Read More";
        document.getElementById("bio1").innerHTML = "";
        document.getElementById("bio2").innerHTML = "";
        document.getElementById("bio3").innerHTML = "";
        document.getElementById("bio4").innerHTML = "";      
    }
    
    isClosed = !isClosed;
}


                        