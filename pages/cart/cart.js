// pages/shop/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "selectedAllStatus":false,
    "total": 0,
    "carts": [
      {
        "goods": {
          "avatar"
            :
            "http://img14.360buyimg.com/n7/jfs/t2494/324/1615617468/268135/1677b798/56cd80c5N06181c58.jpg",
          "title": "this",
          "price": 656,

        },
        "quantity": 12,
        "selected": true,
        "id": 1,
        "selected": true
      },
      {
        "goods": {
          "avatar"
            :
            "http://img14.360buyimg.com/n7/jfs/t2494/324/1615617468/268135/1677b798/56cd80c5N06181c58.jpg",
          "title": "this",
          "price": 656,

        },
        "quantity": 12,
        "selected": true,
        "id": 2,
        "selected": false
      }
    ]
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      "total": countTotal(this.data.carts)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindMinus: function (e) {
    //console.log(e);
    var id = e.currentTarget.dataset.id;
    //console.log(id);
    var cats = this.data.carts;
    //console.log(cats);
    for (var i = 0; i < cats.length; i++) {
      if (cats[i].id == id) {
        cats[i].quantity--;
        if (cats[i].quantity < 0) cats[i].quantity = 0;
        break;
      }
    }
    this.setData({
      "carts": cats,
      "total": countTotal(this.data.carts)
    })
  },
  bindCheckbox: function (e) {
    var id = e.currentTarget.dataset.id;
    var cats = this.data.carts;
    for (var i = 0; i < cats.length; i++) {
      if (cats[i].id == id) {
        cats[i].selected = !cats[i].selected;
      }
    }
    this.setData({
      "carts": cats,
      "selectedAllStatus":isALlChecked(cats),
      "total": countTotal(this.data.carts)
    });

  },
  bindPlus: function (e) {
    //console.log(e);
    var id = e.currentTarget.dataset.id;
    //console.log(id);
    var cats = this.data.carts;
    //console.log(cats);
    for (var i = 0; i < cats.length; i++) {
      if (cats[i].id == id) {
        cats[i].quantity++;
        break;
      }
    }
    this.setData({
      "carts": cats,
      "total": countTotal(this.data.carts)

    })
  },
  selectAll: function () {
    var cats = this.data.carts;
    for (var i = 0; i < cats.length; i++){
      cats[i].selected=true;
    }
    
    this.setData({
      "carts": cats,
      "selectedAllStatus":isALlChecked(cats),
      "total": countTotal(this.data.carts)
    })
  }
})

function countTotal(cats) {
  var p = 0;
  for (var i = 0; i < cats.length; i++) {
    if (cats[i].selected) {
      p += cats[i].goods.price * cats[i].quantity;
    }
  }
  return p;
}

function isALlChecked(cats){
  var flag = true;
  for (var i = 0; i < cats.length; i++) {
    if (!cats[i].selected) {
      flag=false;
      break;
    }
  }
  return flag;
}