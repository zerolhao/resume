window.Model = function(options){
  return {
    init: function() {
      var APP_ID = 'gTetAbFKeg2VgSlMXf31bfH2-gzGzoHsz';
      var APP_KEY = 'd418rWCgfsIOWKuA7y1Tf41g';
      AV.init({appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function() {
      var query = new AV.Query(options.resourceName);
      return query.find()
    },
    save: function(obj) {
      // 创建表
      var MyTable = AV.Object.extend(options.resourceName);
      // 创建数据
      var  myData= new MyTable();
      return myData.save(obj)
    }
  }
}