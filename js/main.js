function playPause(img)
{
	var player = document.getElementById("musicPlayer");
	var image = document.getElementById("musicbtn");
//	paused ��ȥʱ �������ͣ״̬
	if(player.paused)
	{
//		��������  ���ŵķ��� audio�Դ��ķ���
		player.play();
		img.src = "image/musicBtn.png";
	}
	else
	{
//		��ͣ����
		player.pause();
		img.src = "image/musicBtnOff.png";

	}
}