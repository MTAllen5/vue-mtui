/**
 * 映射表-工具类
 */

/**
 * 获取辣度
 * @param {*辣度等级} type
 */
export function getHotLever (type) {
  switch (type) {
    case 'AWFUL': return 3
    case 'MEDIUM': return 2
    case 'SLIGHT': return 1
    default: return 0
  }
}

/**
 * 支付状态
 * @param {*} status
 */
export function getPayStatus (status) {
  switch (status) {
    case 'UN_PAY': return '未支付'
    case 'PAYING': return '支付进行中'
    case 'PAY_SUCCESS': return '支付成功'
    case 'PAY_FAIL': return '支付失败'
    default: return '未知状态'
  }
}

/**
 * 订单状态
 * @param {*} status
 */
export function getOrderStatus (status) {
  switch (status) {
    case 'WAIT_REC': return '待接单'
    case 'WAIT_PAY': return '待结账'
    case 'FINISHED': return '已完成'
    case 'REFUND': return '已退款'
    case 'CANCEL': return '已取消'
    case 'AUTO_CANCEL': return '自动取消'
    default: return '未知状态'
  }
}

/**
 * 预订单状态
 * @param {*} status
 */
export function getPendingOrderStatus (status) {
  switch (status) {
    case 'PENDING': return '待下单'
    case 'ORDER': return '已下单'
    case 'CANCEL': return '已取消'
    default: return '未知状态'
  }
}
