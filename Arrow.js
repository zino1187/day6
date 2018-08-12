/*현실에 존재하는 사물를 표현하는 거푸집 클래스 작성
	주의) 지금 이 코드는 사물 자체가 아니라, 장차 사물을 생성해낼수
	있는 틀을 정의하는 것이다....객체지향 언어에서는 이러한 틀을
	클래스한다!!
*/
class Arrow{
	//생성자 함수:  추후 이 화살을 생성할때 호출되는 함수!!
	//즉 생성할때 호출된다고 하여 생성자 함수라 한다!!
	//이것은 누가 만들었나? 개발자가 아니라, js 문법을 창시한
	//밴더사에서 이미 정해놓은 함수이다!! 따라서 오타나지 말자..
	//생성자 함수는 객체가 태어날때 강제 호출되므로, 개발자는 개성 있는 물건을
	//생성하려면 이 기회를 놓치지 말아야 한다..
	constructor(left, top, velX){
		this.span;
		this.x=0; 
		this.velX=velX; //화살의 x 축방향의 속도를 결정하는 변수
		//화살의 위치 지정용 변수~!!
		this.left=left;
		this.top=top;
	}

	//화살 생성
	init(){
		this.span=document.createElement("span");
		this.span.innerText="→";
		this.span.style.position="absolute";
		this.span.style.left=this.left+"px";
		this.span.style.top=this.top+"px";

		document.body.appendChild(this.span);	
	}
	//화살 움직이기
	move(){
		this.x+=this.velX;	
		this.span.style.left=this.x+"px";
	}

}





