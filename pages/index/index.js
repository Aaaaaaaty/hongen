Page({
   data: {
    musicList: { 
      name: '稻草人',
      author: '暗杠',
      src: 'http://10.2.44.254/daocaoren.mp3'
    },
    musicsrc:"",
    isPlay: false,
    change: 'play',
    currentTimeHTML: '',
    durationTimeHTML: '',
    currentDeg: 0,
  },
  onReady: function(e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    var musicurl="http://10.2.44.254/daocaoren.mp3"
      this.audioCtx.setSrc(musicurl)
  },
  musicBtnPlay: function() {
    if(this.data.isPlay) {
      this.audioCtx.pause()
      this.setData({
        change: 'play'
      })
    } else {
      this.audioCtx.play()
      this.setData({
        change: ''
      })
    }
    this.setData({
        isPlay: !this.data.isPlay
    })
  },
  timeUpdate: function(e) {
    var currentTime = e.detail.currentTime
    var duration = e.detail.duration
    var durationTimeHTML = this.changeToTime(duration)
    var currentTimeHTML = this.changeToTime(currentTime)
    var currentDeg = Math.ceil((currentTime/duration)*360)
    this.setData({
      durationTimeHTML: '/' + durationTimeHTML,
      currentTimeHTML: currentTimeHTML,
      currentDeg: currentDeg
    })
  },
  changeToTime: function(num) {
    num = Math.floor(num);
    //var iH = toZero(Math.floor(num/3600));
    var iM = this.toZero(Math.floor(num/60));
    var iS = this.toZero(Math.floor(num%60));
    return iM + ":" + iS;
  },
  toZero: function(num) {
    if(num < 10){
        return "0" + num;
    }else{
        return "" + num
    }
  },
  musicChange: function() {
    console.log("CLICI")
    var musicurl='http://10.2.44.254/daocaoren.mp3'
    this.audioCtx.setSrc(musicurl)
    this.setData({
      musicList: {
        name: '白河',
        author: '暗杠',
      },
      musicsrc:musicurl
    })
    if(!this.data.isPlay) {
     this.setData({
        change: '',
        isPlay: !this.data.isPlay,
      })
    } 
     this.audioCtx.play()
  },
  testPlay: function() {
    console.log('play')
  },
  testerror: function() {
    this.audioCtx.setSrc(this.data.musicsrc)
    this.audioCtx.play()
    console.log('error')
  }
})
