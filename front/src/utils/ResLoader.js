//构造器函数
export default class ResLoader {
  constructor(config) {
    this.option = {
      resources: [],
      onStart: null,
      onProgress: null,
      onComplete: null //加载完毕回调函数，传入参数total
    };
    if (config) {
      for (let i in config) {
        this.option[i] = config[i];
      }
    }
    else {
      alert('参数错误！');
      return;
    }
    this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
    this.total = this.option.resources.length || 0; //资源总数
    this.currentIndex = 0; //当前正在加载的资源索引
  }
  isFunc(f) {
    return typeof f === 'function';
  }
  start() {
    this.status = 1;
    var _this = this;
    for (var i = 0, l = this.option.resources.length; i < l; i++) {
      var r = this.option.resources[i], url = '';
      url = r;

      var image = new Image();
      image.onload = function () { _this.loaded(); };
      image.onerror = function () { _this.loaded(); };
      image.src = url;
    }
    if (this.isFunc(this.option.onStart)) {
      this.option.onStart(this.total);
    }
  }
  loaded() {
    this.currentIndex++
    if (this.isFunc(this.option.onProgress)) {
      this.option.onProgress(this.currentIndex, this.total);
    }
    //加载完毕
    if (this.currentIndex === this.total) {
      if (this.isFunc(this.option.onComplete)) {
        this.option.onComplete(this.total);
      }
    }
  }
};



