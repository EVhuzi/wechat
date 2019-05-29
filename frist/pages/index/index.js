Page({
  //为页面提供数据
  //date就是界面和逻辑之间的桥梁
  data:{
    message:'Hello ',
    person : {
      name:'zhangsan',
      age:18
    },
    ViewClassName : 'hello',
    todo:[
      { name: 'javascript', completed:false},
      { name: 'HTML', completed: true },
      { name: 'CSS', completed: false },
    ]
  }
})