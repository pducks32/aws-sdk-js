require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['appmesh'] = {};
AWS.AppMesh = Service.defineService('appmesh', ['2018-10-01']);
Object.defineProperty(apiLoader.services['appmesh'], '2018-10-01', {
  get: function get() {
    var model = require('../apis/appmesh-2018-10-01.min.json');
    model.paginators = require('../apis/appmesh-2018-10-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.AppMesh;
