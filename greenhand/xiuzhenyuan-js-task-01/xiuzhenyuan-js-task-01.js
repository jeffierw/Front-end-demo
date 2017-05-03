//创建改变颜色的函数
function change(){
			var arr = random();
			var boxes = document.getElementsByClassName("box");
			var boxColor = ["#FFEC8B","#FF1493","#E0FFFF","#CAFF70","#CD0000","#B0C4DE","#C71585","#8B814C","#7FFF00","#54FF9F"];
			for (var i = 0; i < boxes.length; i++)
			{
				boxes[i].style.backgroundColor = "#ffa600";
			}
			for (var i = 0; i < arr.length; i++)
			{
				boxes[arr[i]].style.backgroundColor = boxColor[Math.floor(Math.random()*boxColor.length)]; 
			}
		}
//创建随机数函数
       function random()
       {
       	var randoms=[];
       	while (true)
       	{
       		var isExists = false;
                     //随机数生成
       		var random = Math.round(Math.random()*8);
                     //将生成的随机数存入函数
       		for (var i = 0; i<randoms.length; i++){
       			if (random === randoms[i]){
	       			isExists = true;
	       			break;
       		}
       	}
                     
       		if(!isExists)
       			randoms.push(random);
       		if(randoms.length === 3)
       			break;
       }
       	return randoms;
       }
       var timer = setInterval(function(){

       		change();

       },1000);
       clearInterval(timer);
       function begin(){
       	clearInterval(timer);
       		timer = setInterval(function(){
       			change();
       		},1000);
       }
       function finish(){
       	clearInterval(timer);
       	var boxes = document.getElementsByClassName("box");
       	for (var i = 0; i < boxes.length; i++)
			{
				boxes[i].style.backgroundColor = "#ffa600";
			}
       }