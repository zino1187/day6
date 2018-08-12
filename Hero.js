class Hero{
	constructor(){
		this.img; //멤버변수
		this.x=0;
		this.y=0;
		this.velX=0;//우주선의 x축의 움직임 정도값 즉 속도값 0이면 중지,10이면 움직임
		this.velY=0;
		this.width=100;//외부에서 접근할 수 있도록 멤버변수화 시킴
	}

	//객체의 초기생성작업
	init(){//객체지향언어에서는 함수의 소유권이 객체 자체에
		//있고, 이 함수의 역학을 해당 객체의 동작방법을 결정
		//해주로 메서드라 한다!
		this.img=document.createElement("img");
		this.img.src="./images/ship.png";
		this.img.style.width=100+"px";
		this.img.style.position="absolute";
		this.img.style.left=0+"px";
		this.img.style.top=0+"px";
		document.getElementById("stage").appendChild(this.img);
	}
	move(){//객체의 움직임 x, y
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
}