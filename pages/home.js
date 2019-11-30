// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'shenz',
    players: [
      {id: 0, name: "James", age: 34, position: "PG"},
      { id: 1, name: "KCP", age: 36, position: "SG" },
      { id: 2, name: "Green", age: 32, position: "SF" },
      { id: 3, name: "Davis", age: 26, position: "PF" },
      ],
      counter: 0,
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})