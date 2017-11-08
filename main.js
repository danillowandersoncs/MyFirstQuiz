var start = 0;
correct = 0;
var questions = [
    [ "Quais dessas palavras não é um falso cognato", "Actually","Fabric", "Borrow","Comic" ,"D"],
	[ "Qual desses verbos não estão ligados ao olhar",
	"Bring","Blink","Wink","Glare","A"],

	[ "Qual phrasal verb pode substituir o verbo encontrar na frase: “Encontrei velhos amigos num bar por acaso”",
	"Run Into","Make Do","Get Up","Chill Out","A"],
	["Qual dessas palavras tem sentido totalmente diferente em inglês dependendo do contexto:",
	"Computer","Tear", "Window","Iron","B"],
	["Qual palavra abaixo significa: “Dar um jeito”",
	"Get It Over","Make Do","Get Up","Chill Out", "B"],
	["É o pronome neutro do inglês:", 
	"Them","You", "It","Mine","C"],
	["Qual terminação também dá a impressão de diminutivo:",
	"Zin","Self", "Ish", "Ship","C"],
	["Palavra que não é comum entre amigos próximos:",
	"Fellow","Dude","Buddy","Dear","D"],
	["Phrasal verb que significa cancelar:",
	"Call Off","Go Ahead", "Get In", "Hold up","A"],
	["Qual grupo de palavras não têm o mesmo sentido:",
	"Abstract - Summary","Answer - Reply","Assure - Guarantee","Run - Movie","D"]

];

var name=[prompt("What is your name?")];
while (name=="null" || name == ""){
	var name=[prompt("What is your name?")];
}
	

function Id(x){
	return document.getElementById(x);
}


function renderQuestion(){
		Id("name").innerHTML=name;
		text1 = Id("text1");
		if(start >= questions.length){
			text1.innerHTML = '<h2> Você acertou '+correct+' de '+questions.length+' perguntas</h2>';
			Id("player").innerHTML = name;
			Id("btn").style.display = 'none';
			$(document).ready(function(){
				$("a").css({
					"text-decoration":"none",
					"background": "green",
					"border": "none",
					"border-radius": "0.31em",
					"padding": "0.62em",
					"color": "white",
					"font-size": "1em",
				});
			});

			$(document).ready(function(){
				$("a").mouseenter(function(){
					$(this).fadeTo("slow",0.4);
				});
				$("a").mouseleave(function(){
					$(this).fadeTo("slow",1);
				});
			});		
			
			if (correct>=questions.length*0.7){
 			var mensagem = ["Excelente!"];
 			Id("mensagem").innerHTML=mensagem;

 			} 
 		
 			else if (correct<questions.length*0.7 && correct>=questions.length*0.4){
 			var mensagem = ["Você pode melhorar! <br>"];
 			Id("mensagem").innerHTML=mensagem;

 			} 

 			else if (correct<questions.length*0.4){
 			var mensagem = ["Você precisa praticar mais!<br>"];
			Id("mensagem").innerHTML=mensagem;
 			}		
			
			Id("question").innerHTML = "Test finished! ";
			Id("again").innerHTML='Clique aqui e teste de novo!<br>';
 			start = 0;
			correct = 0; 	
			return false;
		}


		Id("question").innerHTML = "Pergunta "+(start+1)+" de "+questions.length;
		question = questions[start][0];
		chA = questions[start][1];
		chB = questions[start][2];
		chC = questions[start][3];
		chD = questions[start][4];
		text1.innerHTML = "<h3>"+question+"</h3>";
		text1.innerHTML += "<input type='radio' id= 'choice1' name='choices' value='A'> "+chA+"<br>";
		text1.innerHTML += "<input type='radio' id= 'choice2' name='choices' value='B'> "+chB+"<br>";
		text1.innerHTML += "<input type='radio' id= 'choice3' name='choices' value='C'> "+chC+"<br>";
		text1.innerHTML += "<input type='radio' id= 'choice4' name='choices' value='D'> "+chD+"<br><br>";	
		
}


	
function check(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}	
	if(choice == questions[start][5]){
		correct++;
		
	}
	start++;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
