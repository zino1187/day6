/*
사용자가 키보드를 누를때마다 총알을 생성하려면, 
사물을 대량으로 제한없이 만들수있는 클래스가 필요하다..
*/
class Bullet{
	constructor(x,y){
		this.x=x; //총알의 현재 x축위치
		this.y=y; //총알의 현재 y축위치
		this.img=document.createElement("img");
		this.img.src="./images/bullet.png";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px"; //우주선의 현재 x위치
		this.img.style.top=this.y+"px";//우주선의 현재 y위치
		this.img.style.width=25+"px";
		document.getElementById("stage").appendChild(this.img);			
	}

	tick(){ //객체의 물리적 변화를 정의하는 메서드
		this.x=this.x+15;
	}
	render(){//물리적 변화를 실제로 그래픽으로 표현하는 메서드
		this.img.style.left=this.x+"px";
	}
}





