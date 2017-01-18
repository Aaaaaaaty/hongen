// pages/logs/logs.js
Page({
  data:{
    loadJson: [
      {name:'魔力之城', className:'card'},
      {name:'冒险岛', className:'card'},
      {name:'科学馆', className:'card'},
      {name:'英雄王国', className:'card'},
      {name:'成长的我', className:'card'},
      {name:'历史长廊', className:'card'},
      {name:'童话天地', className:'card'},
      {name:'动物乐园', className:'card'},
      {name:'认知', className:'card'},
      {name:'人格', className:'card'},
      {name:'习惯', className:'card'},
      {name:'情绪', className:'card'},
      {name:'习惯', className:'card'}
    ],
     ifOn: ''
  },
  changeImg: function(e) {
    var id = e.target.id
    this.setData({
      ifOn: 'on' + id
    })
  }
})