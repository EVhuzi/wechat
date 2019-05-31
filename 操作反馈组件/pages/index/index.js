
Page({
  data:{

  },

   btnToDo: function(){
  //   //当点击按钮触发
  //   //console.log(3343)
  //   //交互操作组件，必须通过调用API方式使用
  //   wx.showActionSheet({
  //     //显示出来的项目列表
  //     itemList: ['高', '陈', '白'],
  //     //点击其中任一项的回调
  //     success: function(res){
  //       //res.cancel 指的是是否点击了取消
  //       if (!res.cancel){
  //         //tapIndex指的是点击的下标
  //         console.log(res.tapIndex)
  //       }
  //     }
  //   })
      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success: function(res){
      //     if (res.confirm){
      //       console.log('用户点击确定')
      //     }
      //   }
      // })

      wx:wx.showToast({
        title: '成功',
        icon: 'loading',
        image: '',
        duration: 2000,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  }
})