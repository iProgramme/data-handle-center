'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors',
    domainWhiteList: ['http://127.0.0.1:8080'], //配置白名单

}
};