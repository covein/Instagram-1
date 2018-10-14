
// 扩展一些框架便利的方法
module.exports = {
  /**
   * 返回客户端内容
   * @param status // 返回状态
   * @param message // 返回内容
   */
  returnBody (status, message) {
    this.status = status
    this.body = {
      message: message,
      success: true
    }
  }
};