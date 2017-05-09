function generate(){
			var location = $("location");
			var companyType = $("companyType");
			var companyName = $("companyName");
			var bossName = $("bossName");
			var money = $("money");
			var product = $("product");
			var price = $("price");

			var result  = location +"最大"+companyType+companyName+"倒闭了，王八蛋老板"+bossName+"吃喝嫖赌，欠下了"+money+"个亿，"
                            + "带着他的小姨子跑了!我们没有办法，拿着"+product+"抵工资!原价都是一"+price+"多、两"+price+"多、三"+price+"多的"+product+"，"
                            + "现在全部只卖二十块，统统只要二十块!"+bossName+"王八蛋，你不是人!我们辛辛苦苦给你干了大半年，"
                            + "你不发工资，你还我血汗钱，还我血汗钱!";    
			document.getElementById("result").value=result;
	}
	 	function $(id){
	 		var value = document.getElementById(id).value;
	 		return value;
	 	}