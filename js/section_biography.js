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


var bio1PT = 'Em 2018, seguem-se mais concertos e as gravações do EP de estreia, tendo a banda participado no já mencionado Festival da Liberdade - onde são também entrevistados num breve segmento do podcast Maluco Beleza, de Rui Unas - assim como no XXIII Festival de Música Moderna de Corroios, e finalmente no concurso de bandas do Vagos Metal Fest. Concluídas as gravações do EP, é lançado o single de estreia "Breaking The Dogma", em Agosto de 2018. No final desse ano, Filipe e Daniel saem da banda, e é recrutado Henrique Simas como guitarrista lead. Renato passa a desempenhar o papel de guitarrista ritmo, assim como voz principal da banda, com Bernardo Rebelo no apoio de algumas das tarefas vocais.';

var bio2PT = 'Em Maio de 2019 é lançado o EP e é feita a divulgação desse trabalho, ao mesmo tempo que é escrito e composto o álbum de estreia. Em Dezembro de 2019, num concerto que junta várias bandas de metal portuguesas no Cine Incrível, em Almada, partilha-se o palco com os estreantes (mas não menos formidáveis) The Darkest Fall, assim como bandas míticas do underground português como Decayed e Sacred Sin, onde, juntamente com o EP de estreia, são tocadas algumas das músicas que integram o álbum de estreia.';
    
var bio3PT = 'No ano de 2020, começa o planeamento da gravação do álbum em que, com a pandemia, o processo é atrasado com a incerteza de quando seria possível ser iniciado. Finalmente em Agosto de 2020, a banda embarca nessas gravações, estando neste momento a finalizar o processo. Em Maio de 2021, é lançado o primeiro single deste trabalho, entitulado de "Apostasy", uma explosão de som onde o moderno se alia ao antigo. Em Julho, é lançado o segundo single, "Tragedy Befalls", com um som mais abordável, mas não menos progressivo.';

var bio4PT = 'Em suma, os Crimson Bridge procuram uma mistura de sonoridades, onde se inclui de tudo um pouco: desde sons mais pesados, passagens mais melódicas ou até algo completamente diferente. Resumidamente, tudo aquilo que nos soa bem - quer por um motivo ou por outro - é válido. O nosso objectivo é, no fundo, retribuir o que nos foi "dado" pela música ao longo das nossas vidas, esperando que esta banda e a sua música, signifique para vocês, o que significa para nós.';


var bio1EN = 'The year of 2018 was followed by more concerts and the recording/production of their first debut EP. With the band participating in the aforementioned Festival da Liberdade, they also had the privilege to be interviewed by Rui Unas (a popular portuguese comedian, actor and TV host), on the podcast “Maluco Beleza” - as well as in the “XXIII Festival de Música Moderna de Corroios” (Corroios’ Festival of Modern Music), and finally in the “Vagos Metal Fest” band contest. With the recordings of the EP concluded, the debut single "Breaking The Dogma" was released in August 2018. At the end of that year, Filipe and Daniel left the band. Not long after, Henrique Simas was recruited to fill in as lead guitarist. Now with both guitarists taking on more concise roles performance wise and the lack of a main vocalist, Renato decided to focus on rhythm guitar, as well as the lead vocals. Bernardo Rebelo also decided to become the band’s backing vocalist.'

var bio2EN = 'In May of 2019, the self-titled debut EP was finally released. At this point, a great part of the debut album was already being written and composed. In December of that same year, the band debuted their new lineup in a concert at Cine Incrivel, in Almada. They got to share the stage with their peers over at “The Darkest Fall”, and two well known Portuguese underground bands, Decayed and Sacred Sin. Along with the debut EP, some of the songs that make up the debut album were played.'

var bio3EN = 'In 2020, the plans were laid out for the recording of the album. Unfortunately, due to the COVID-19 pandemic, the process was heavily delayed and left the group uncertain as to when they could get back to work. But after a long waiting period, the band finally resumed the recording of the album in August 2020. In May of 2021, with the production process already well on it’s tracks, the first single was released, entitled "Apostasy": an explosion of sound where the modern meets the old. In July, the second single "Tragedy Befalls" was released, with a more approachable feel yet without dropping their progressive nature. Finally, in August, the third and final single is released, with a more rhythmic and heavier sound put on display. The full record is aimed for release in September 2021.'

var bio4EN = 'In short, Crimson Bridge are looking for a mix of sonorities, which includes a little bit of everything: from blast beats to hyper melodic passages or even something completely different and technical. In sum, anything that sounds good to us - whether for one reason or another - is valid. Our goal is, deep down, to give back what was "given" to us by music throughout our lives, hoping that this band and its music, mean to you, what it means to us.'


function loadBio() {
    //loads up bio
    if(isClosed){
        document.getElementById("btnReadMore").innerHTML = "Show Less";
        document.getElementById("bio1").innerHTML = bio1EN;
        document.getElementById("bio2").innerHTML = bio2EN;
        document.getElementById("bio3").innerHTML = bio3EN;
        document.getElementById("bio4").innerHTML = bio4EN;
        
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


                        