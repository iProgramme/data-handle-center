'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async rule() {
    const { ctx } = this;
    ctx.body = 'hi, egg 这个是rule 的数据';
  }
}

module.exports = HomeController;
