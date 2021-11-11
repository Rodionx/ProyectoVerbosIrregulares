var verbos = [
    ["arise","arose","arisen","surgir"],
    ["awake","awoke","awoken","despertar(se)"],
    ["bear","bore","borne","soportar"],
    ["beat","beat","beaten","golpear"],
    ["become","became","become","convertirse en"],
    ["begin","began","begun","empezar"],
    ["bend","bent","bent","doblar(se)"],
    ["bet","bet","bet","apostar"],
    ["bid","bid","bid","pujar"],
    ["bind","bound","bound","encuadernar"],
    ["bite","bit","bitten","morder"],
    ["bleed","bled","bled","sangrar"],
    ["blow","blew","blown","soplar"],
    ["break","broke","broken","romper"],
    ["breed","bred","bred","criar"],
    ["bring","brought","brought","traer"],
    ["build","built","built","construir"],
    ["burn","burnt","burnt","quemar(se)"],
    ["burst","burst","burst","estallar"],
    ["buy","bought","bought","comprar"],
    ["cast","cast","cast","tirar"],
    ["catch","caught","caught","coger"],
    ["choose","chose","chosen","elegir"],
    ["cling","clung","clung","aferrarse"],
    ["come","came","come","venir"],
    ["cost","cost","cost","costar"],
    ["creep","crept","crept","arrastrar"],
    ["cut","cut","cut","cortar"],
    ["deal","dealt","dealt","tratar"],
    ["dig","dug","dug","cavar"],
    ["do","did","done","hacer"],
    ["draw","drew","drawn","dibujar"],
    ["dream","dreamt","dreamt","soñar"],
    ["drink","drank","drunk","beber"],
    ["drive","drove","driven","conducir"],
    ["eat","ate","eaten","comer"],
    ["fall","fell","fallen","caer(se)"],
    ["feed","fed","fed","alimentar"],
    ["feel","felt","felt","sentirse"],
    ["fight","fought","fought","pelearse"],
    ["find","found","found","encontrar"],
    ["flee","fled","fled","huir"],
    ["fly","flew","flown","volar"],
    ["forbid","forbade","forbidden","prohibir"],
    ["forget","forgot","forgotten","olvidar(se)"],
    ["forgive","forgave","forgiven","perdonar"],
    ["freeze","froze","frozen","helar(se)"],
    ["get","got","got","conseguir"],
    ["give","gave","given","dar"],
    ["go","went","gone","irse"],
    ["grind","ground","ground","moler"],
    ["grow","grew","grown","crecer"],
    ["hang","hung","hung","colgar"],
    ["have","had","had","haber, tener"],
    ["hear","heard","heard","escuchar"],
    ["hide","hid","hidden","esconder(se)"],
    ["hit","hit","hit","golpear"],
    ["hold","held","held","agarrar(se)"],
    ["hurt","hurt","hurt","hacer daño"],
    ["keep","kept","kept","guardar"],
    ["kneel","knelt","knelt","arrodillarse"],
    ["know","knew","known","saber, conocer"],
    ["lay","laid","laid","poner"],
    ["lead","led","led","llevar"],
    ["lean","leant","leant","apoyarse"],
    ["leap","leapt","leapt","brincar"],
    ["learn","learnt","learnt","aprender"],
    ["leave","left","left","dejar"],
    ["lend","lent","lent","prestar"],
    ["let","let","let","permitir"],
    ["lie","lay","lain","echarse"],
    ["light","lit","lit","encender(se)"],
    ["lose","lost","lost","perder"],
    ["make","made","made","hacer"],
    ["mean","meant","meant","significar"],
    ["meet","met","met","encontrar(se)"],
    ["overcome","overcame","overcome","vencer"],
    ["pay","paid","paid","pagar"],
    ["put","put","put","poner"],
    ["read","read","read","leer"],
    ["ride","rode","ridden","montar"],
    ["ring","rang","rung","sonar"],
    ["rise","rose","risen","levantarse"],
    ["run","ran","run","correr"],
    ["saw","sawed","sawn","serrar"],
    ["say","said","said","decir"],
    ["see","saw","seen","ver"],
    ["seek","sought","sought","buscar"],
    ["sell","sold","sold","vender(se)"],
    ["send","sent","sent","enviar"],
    ["set","set","set","poner"],
    ["sew","sewed","sewn","coser"],
    ["shake","shook","shaken","agitar"],
    ["shear","sheared","shorn","esquilar"],
    ["shine","shone","shone","brillar"],
    ["shoot","shot","shot","disparar"],
    ["show","showed","shown","mostrar"],
    ["shrink","shrank","shrunk","encoger(se)"],
    ["shut","shut","shut","cerrar(se)"],
    ["sing","sang","sung","cantar"],
    ["sink","sank","sunk","hundir(se)"],
    ["sit","sat","sat","sentar(se)"],
    ["sleep","slept","slept","dormir"],
    ["slide","slid","slid","resbalar"],
    ["smell","smelt","smelt","oler"],
    ["sow","sowed","sown","sembrar"],
    ["speak","spoke","spoken","hablar"],
    ["speed","sped","sped","acelerar"],
    ["spell","spelt","spelt","deletrear"],
    ["spend","spent","spent","pasar, gastar"],
    ["spill","spilt","spilt","derramar"],
    ["spit","spat","spat","escupir"],
    ["split","split","split","hender"],
    ["spoil","spoilt","spoilt","estropear(se)"],
    ["spread","spread","spread","extender(se)"],
    ["stand","stood","stood","estar de pie"],
    ["steal","stole","stolen","robar"],
    ["stick","stuck","stuck","pegar(se)"],
    ["sting","stung","stung","picar"],
    ["stink","stank","stunk","apestar"],
    ["strike","struck","struck","golpear"],
    ["strive","strove","striven","esforzarse"],
    ["swear","swore","sworn","jurar"],
    ["sweep","swept","swept","barrer"],
    ["swim","swam","swum","nadar"],
    ["swing","swung","swung","balancear(se)"],
    ["take","took","taken","tomar(se)"],
    ["teach","taught","taught","enseñar"],
    ["tear","tore","torn","romper(se)"],
    ["tell","told","told","contar, decir"],
    ["think","thought","thought","pensar"],
    ["throw","threw","thrown","lanzar"],
    ["tread","trod","trodden","pisar"],
    ["undergo","underwent","undergone","sufrir"],
    ["understand","understood","understood","entender"],
    ["upset","upset","upset","afligir"],
    ["wake","woke","woken","despertar(se)"],
    ["wear","wore","worn","llevar (puesto)"],
    ["weave","wove","woven","tejer"],
    ["weep","wept","wept","llorar"],
    ["win","won","won","ganar"],
    ["wind","wound","wound","enrollar"],
    ["withdraw","withdrew","withdrawn","retirar(se)"],
    ["wring","wrung","wrung","torcer"],
    ["write","wrote","written","escribir"]
    ];


var r = null;
var q = null;
var columna = null;

function empezar(){
    document.getElementById("botones1").style.display = "none";
    document.getElementById("botones2").style.display = "flex"
    r = Math.floor(Math.random() * 139);
    q = Math.floor(Math.random() * 3);
    columna = "col" +q;
    document.getElementById("col0").innerHTML = verbos[r][0];
    document.getElementById("col1").innerHTML = verbos[r][1];
    document.getElementById("col2").innerHTML = verbos[r][2];
    document.getElementById("col3").innerHTML = verbos[r][3];
    document.getElementById("imgdinamica").src = "img/" + verbos[r][0] + ".jpg";
    document.getElementById(columna).innerHTML = "";
    if(document.getElementById(columna).textContent == ""){
        var input = document.createElement("input");
        input.type = "text";
        input.id = "casillaVerbo"
        input.className = "casilla";
        document.getElementById(columna).appendChild(input);
    }
};

function siguiente(){
    //----------------------------------------------------------------------------------------------//

    if(document.getElementById("casillaVerbo").value  == verbos[r][q]){
        r = Math.floor(Math.random() * 139);
        q = Math.floor(Math.random() * 3);
        columna = "col" +q;
        document.getElementById("col0").innerHTML = verbos[r][0];
        document.getElementById("col1").innerHTML = verbos[r][1];
        document.getElementById("col2").innerHTML = verbos[r][2];
        document.getElementById("col3").innerHTML = verbos[r][3];
        document.getElementById(columna).innerHTML = "";
        if(document.getElementById(columna).textContent == ""){
            var input = document.createElement("input");
            input.type = "text";
            input.id = "casillaVerbo"
            input.className = "casilla";
            document.getElementById(columna).appendChild(input);
        }
    }
    
};



