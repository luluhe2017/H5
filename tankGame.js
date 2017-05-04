// JavaScript Document
  var heroColor=new Array('#BA9658','#FEF26E');
  var enemyColor=new Array('#00A2B5','#00FEFE');

	//坦克基类
	function Tank(x,y,direct,color){
		this.x=x;
		this.y=y;
		this.direct=direct;
		this.speed=5;
		this.color=color;
		this.moveUp=function(){
		    this.y-=this.speed;
			this.direct=0;
			}
			
		this.moveRight=function(){
			this.x+=this.speed;
			this.direct=1;
			}
			
		this.moveDown=function(){
			this.y+=this.speed;
			this.direct=2;
			}
			
		this.moveLeft=function(){
			this.x-=this.speed;
			this.direct=3;
			}
	};
	
	//坦克类
	function Hero(x,y,direct,color){
		//冒充对象，实现多态
		this.tank=Tank;
		this.tank(x,y,direct,color);
		
		//射击敌人
		this.shotEnemy=function(){
			switch(this.direct){
				case 0:
				       heroBullet=new Bullet(this.x+10,this.y,this.direct);
				       break;
			    case 1:
				       heroBullet=new Bullet(this.x+30,this.y+10,this.direct);
				       break;
			    case 2:
				       heroBullet=new Bullet(this.x+10,this.y+30,this.direct);
				       break;
			    case 3:
				       heroBullet=new Bullet(this.x,this.y+10,this.direct);
				       break;
				}
				herobullets.push(heroBullet);
				var timer=window.setInterval('herobullets['+(herobullets.length-1)+'].run()',50);
				herobullets[herobullets.length-1].timer=timer;
			}
		}
		
	//敌人坦克类	
	function EnemyTank(x,y,direct,color){
		this.tank=Tank;
		this.tank(x,y,direct,color);
		}
		
    //子弹类
	function Bullet(x,y,direct){
		this.x=x;
		this.y=y;
		this.timer=null;
		this.direct=direct;
		this.speed=5;
		this.run=function(){
			switch(this.direct){
				case 0:
				       this.y-=this.speed;
				       break;
				case 1:
				       this.x+=this.speed;
				       break;
			    case 2:
				       this.y+=this.speed;
				       break;
				case 3:
				       this.x-=this.speed;
				       break;    
				}
			}
		}
		
		
		
	function drawTank(tank){
		switch(tank.direct){
			case 0:
			case 2:
			       //机身颜色
			       cxt.fillStyle=tank.color[0];
				   
				   //机身绘制
			       cxt.fillRect(tank.x,tank.y,5,30);
				   cxt.fillRect(tank.x+6,tank.y+5,10,20);
				   cxt.fillRect(tank.x+17,tank.y,5,30);
				   
				   //盖子
				   cxt.fillStyle=tank.color[1];
				   cxt.beginPath();
				   cxt.arc(tank.x+11,tank.y+15,5,0,2*Math.PI,true);
				   cxt.closePath();
				   cxt.fill();
				  
				  //炮筒
		           cxt.strokeStyle=tank.color[1];
				   cxt.lineWidth=1.5;
				   cxt.beginPath();
				   cxt.moveTo(tank.x+11,tank.y+15);
				   if(tank.direct==0){
				           cxt.lineTo(tank.x+11,tank.y);
					   }else{
				           cxt.lineTo(tank.x+11,tank.y+30);
					   }
				   cxt.closePath();
				   cxt.stroke();
				   break;   
		   case 1:
		   case 3: cxt.fillStyle=tank.color[0];
			       cxt.fillRect(tank.x,tank.y,30,5);
				   cxt.fillRect(tank.x+5,tank.y+6,20,10);
				   cxt.fillRect(tank.x,tank.y+17,30,5);
				   
				   cxt.fillStyle=tank.color[1];
				   cxt.beginPath();
				   cxt.arc(tank.x+15,tank.y+11,5,0,2*Math.PI,true);
				   cxt.closePath();
				   cxt.fill();
				  
		           cxt.strokeStyle=tank.color[1];
				   cxt.lineWidth=1.5;
				   cxt.beginPath();
				   cxt.moveTo(tank.x+10,tank.y+11);
				   if(tank.direct==1){
				      cxt.lineTo(tank.x+30,tank.y+11);
					   }else{
				      cxt.lineTo(tank.x,tank.y+11);
					   }
				   cxt.closePath();
				   cxt.stroke();
				   break;
			}
			       
		}
	