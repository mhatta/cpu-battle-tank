bt.addLevel({
	controller: bt.CONTROLLER_LITTLE_MAN_COMPUTER, 
	tank: {
		x:5, y:5, 
		name: "あなた", color:"rgba(0, 255,0,0.8)", 
		code:""
		}, 
	title: "レベル 2", 
	description:"Little Man Computer CPUをプログラムして地雷を破壊してください。",
	tasks:[
		[7, 5, bt.ITEM_TYPE_MINE, bt.ACTION_DESTROY],
		[3, 5, bt.ITEM_TYPE_MINE, bt.ACTION_DESTROY],
		[5, 7, bt.ITEM_TYPE_MINE, bt.ACTION_DESTROY],
		[5, 3, bt.ITEM_TYPE_MINE, bt.ACTION_DESTROY],
		[5, 1, bt.ITEM_TYPE_CHECKPOINT, bt.ACTION_COLLECT],
	]
});
