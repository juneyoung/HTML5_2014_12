window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded(){
	canvasApp();
}

//window.onload = canvasApp;

function canvasApp(){
	var canvas = document.getElementById("canvas1");

	if(!canvas || !canvas.getContext){
		return;
	}
	var context = canvas.getContext("2d");

	function drawScreen(){
		alert('draw');
		//fillStyle 은 아래에 실행될 모든 함수에 영향을 미친다.
		//아래 라인에서 색이 다른 객체를 표현하고 싶다면 반드시 표현 전에 값을 변경해 주어야 한다.
		context.fillStyle = "#ffffaa";
		context.fillRect(0, 0, 500, 300);

		//문자열을 출력합니다.
		context.fillStyle = "#000000";
		context.font = "20px Sans-Serif";
		context.textBaseline = "top";
		context.fillText("Hello, HTML5 study", 195, 80);

		//라인을 그립니다. stroke
	}

	drawScreen();
}




//  유효성 검사 

//혹은 아래와 같은 함수를 canvasApp 안에서 사용해서 return 하는 방식이 있음 
//느낌표를 두개 찍는 방식은 true 일 때도 true 라는 boolean 값을 반환하기 위해서 사용하는 방식 
//function canvasSupport() {
//	return !!document.createElement('canvas').getContext;
//}

// canvas.getContext 이외에 Modernizr 라이브러리를 사용해 
// Modernizr.canvas 로 유효검사하는 방법이 있음 

// 2D 콘텍스트 받아오기 

