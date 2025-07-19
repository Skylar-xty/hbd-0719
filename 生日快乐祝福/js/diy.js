$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],

    });
});


// ======== 音乐播放器控制代码 ========
$(document).ready(function() {
    const audioPlayer = $('#main-audio-player')[0]; // 获取audio元素
    const playButtons = $('.play-btn');
  
    playButtons.on('click', function() {
      const clickedBtn = $(this);
      const songSrc = clickedBtn.data('src');
  
      // 检查是否点击的是当前正在播放的歌曲
      if (audioPlayer.src.endsWith(songSrc) && !audioPlayer.paused) {
        // 如果是，则暂停播放
        audioPlayer.pause();
        clickedBtn.removeClass('playing');
      } else {
        // 否则，播放新歌曲
        // 移除所有按钮的 'playing' 状态
        playButtons.removeClass('playing');
        
        // 设置新歌并播放
        audioPlayer.src = songSrc;
        audioPlayer.play();
  
        // 给当前点击的按钮添加 'playing' 状态
        clickedBtn.addClass('playing');
      }
    });
  
    // 当一首歌自然播放结束后，移除按钮的 'playing' 状态
    $(audioPlayer).on('ended', function() {
      $('.play-btn.playing').removeClass('playing');
    });
  });