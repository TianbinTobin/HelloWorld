function playPause(img)
{
	var player = document.getElementById("musicPlayer");
	var image = document.getElementById("musicbtn");
//	paused 过去时 如果在暂停状态
	if(player.paused)
	{
//		播放音乐  播放的方法 audio自带的方法
		player.play();
		img.src = "image/musicBtn.png";
	}
	else
	{
//		暂停方法
		player.pause();
		img.src = "image/musicBtnOff.png";

	}
}