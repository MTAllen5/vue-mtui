/**
 * 接口地址通用类
 */
import baseUrl from './env'

const apiName = {

  // 授权
  alipayOauth: baseUrl.thirdUrl + '/alipay/open/oauth2/2', // 支付宝授权 1:静默授权 2:用户手动同意授权   固定是2 别改 别改 别改
  wechatOauth: baseUrl.thirdUrl + '/wechat/public/oauth2/2', // 微信授权 1:静默授权 2:用户手动同意授权   固定是2 别改 别改 别改

  // 美食
  advertingList: baseUrl.apiUrl + '/marketing/adverting/list', // 获取促销美食列表
  listBargainGoods: baseUrl.apiUrl + '/merchandise/h5goods/listBargainGoods', // 获取砍价商品
  listGoodsByPackageType: baseUrl.apiUrl + '/merchandise/h5goods/listGoodsByPackageType', // 获取套餐列表 *根据状态值
  getGoodsById: baseUrl.apiUrl + '/merchandise/h5goods/getGoodsById', // 店铺美食详情
  listAllCategoriesAndGoods: baseUrl.apiUrl + '/merchandise/h5goods/listAllCategoriesAndGoods', // 店铺所有美食
  listAllGoods: baseUrl.apiUrl + '/merchandise/h5goods/listAll', // 店铺下所有套餐美食包括砍价，没有包括热销美食

  // 订单
  getStatusByOrderNo: baseUrl.apiUrl + '/order/getStatusByOrderNo', // 获取订单状态
  calculatePrice: baseUrl.apiUrl + '/order/calculatePrice', // 订单计价
  addOrder: baseUrl.apiUrl + '/order/addOrder', // 下单
  appendOrder: baseUrl.apiUrl + '/order/appendOrder', // 追加订单
  listOrderInfo: baseUrl.apiUrl + '/order/listOrderInfo', // 桌子订单列表
  getOrderInfoByOrderNo: baseUrl.apiUrl + '/order/getOrderInfoByOrderNo', // 订单详情
  getOrderByDeskId: baseUrl.apiUrl + '/order/h5/getOrderByDeskId', // 获取订单Id
  payOrder: baseUrl.apiUrl + '/order/pay/payOrder', // h5下单获取支付参数
  payFail: baseUrl.apiUrl + '/payment/cancelPayFlow', //  h5下单支付取消或者失败，取消券和红包的冻结状态
  quickPay: baseUrl.apiUrl + '/order/pay/quickPay', // 快捷支付(商户收款)
  cancelOrder: baseUrl.apiUrl + '/order/cancelOrder', // 取消订单
  listOrder: baseUrl.apiUrl + '/order/h5/listOrderInfo', // 历史订单
  listOrder4Detail: baseUrl.apiUrl + '/order/listOrderInfo4Detail', // 我的订单
  // 店铺
  findAreaDeskById: baseUrl.apiUrl + '/shop/desk/findAreaDeskById', // 根据桌台id获取详情
  listShopCallServiceWords: baseUrl.apiUrl + '/shop/call/service/words/listShopCallServiceWords', // 获取店铺呼叫服务员指令
  changeCallService: baseUrl.apiUrl + '/shop/desk/changeCallService', // 呼叫服务
  listShopSettings: baseUrl.apiUrl + '/shop/setting/listShopSettings', // 获取店铺配置
  listShopMerchandiseFlavor: baseUrl.apiUrl + '/shop/merchandise/flavor/listShopMerchandiseFlavor', // 获取店铺口味偏好
  getShopSettingByBizType: baseUrl.apiUrl + '/shop/setting/getShopSettingByBizType/SHOP', // 获取店铺下所属业务设置
  discount: baseUrl.apiUrl + '/marketing/discount/list', // 获取店铺活动列表
  getShopSetting: baseUrl.apiUrl + '/shop/setting/getShopSetting/1026',
  getShopNotice: baseUrl.apiUrl + '/shop/notice/getShopNotice', // 获取店铺公告
  findMerchantMember: baseUrl.apiUrl + '/member/findMerchantMember', // 验证会员
  getShopDet: baseUrl.apiUrl + '/merchants/shops', // 商户详情
  getMerchantMemberDiscountSetting: baseUrl.apiUrl + '/member/setting/getMerchantMemberDiscountSetting', // 获取商户会员优惠方式
  getShopTeaFee: baseUrl.apiUrl + '/shop/setting/getShopTeaFeeV2',

  // 砍价
  jsConfig: baseUrl.thirdUrl + '/wechat/public/get/jsConfig', // 获取config
  startPage: baseUrl.apiUrl + '/marketing/cutPrice/startPage', // 砍价初始化页面信息
  helpCutPage: baseUrl.apiUrl + '/marketing/cutPrice/helpCutPage', // 好友砍价页面
  helpCut: baseUrl.thirdUrl + '/marketing/cutPrice/helpCut', // 砍一刀

  // 排队取号
  getShopInfo4H5: baseUrl.apiUrl + '/merchants/shops/getShopInfo4H5', // 店铺信息
  insertScheduleQueue4H5: baseUrl.apiUrl + '/schedule/queue/insertScheduleQueue4H5', // 取号
  findByScheduleQueueId4H5: baseUrl.apiUrl + '/schedule/queue/findByScheduleQueueId4H5', // 排队详情
  updateScheduleQueue4H5: baseUrl.apiUrl + '/schedule/queue/updateScheduleQueue4H5', // 取消排队

  // 卡券
  listUserCouponOnPay: baseUrl.apiUrl + '/marketing/coupon/listUserCouponOnPay', // 付款是展示商家代金券
  getCardDesc: baseUrl.apiUrl + '/marketing/coupon/detail', // 券详情
  takeCard: baseUrl.apiUrl + '/marketing/coupon/takeCouponOnBargain', // 砍价时领取代金券
  savePhone: baseUrl.apiUrl + '/marketing/coupon/recordMobile', // 保存手机号

  // 会员
  memberRecord: baseUrl.apiUrl + '/member/account/v2/queryMemberConsumeFlowRecords', // 会员消费列表
  userInfo: baseUrl.apiUrl + '/user/client/userInfo', // 微信用户信息
  accountStatistics: baseUrl.apiUrl + '/member/getAccountStatistics', // 获取会员信息

  // 个人中心
  bindmobile: baseUrl.thirdUrl + '/wechat/mini/h5bindmobile/', // 绑定手机号
  sendValidCode: baseUrl.apiUrl + '/message/code/sendValidCode/', // 获取验证码
  listRechargeAmount: baseUrl.apiUrl + '/marketing/member/recharge/listUsables/', // 获取优惠信息
  quickBuy: baseUrl.apiUrl + '/order/pay/quickBuy', // 支付
  getInvoiceSetting: baseUrl.apiUrl + '/merchants/invoice/getInvoiceSetting', // 获取发票许可
  toInvoice: baseUrl.apiUrl + '/merchants/invoice/h5InvoiceUrl', // 开发票
  pdfDownloadUrl: baseUrl.apiUrl + '/merchants/invoice/pdfDownloadUrl', // 获取发票url
  loginByMobile: baseUrl.apiUrl + '/wechat/mini/auth/loginByMobile', // 手机号登录接口

  // 营销活动
  listUserCouponStatic: baseUrl.apiUrl + '/marketing/user/coupon/listUserCouponStatics', // 查询卡券汇总
  listUserCoupons: baseUrl.apiUrl + '/marketing/user/coupon/listUserCoupons', // 查询卡券
  listOnPay: baseUrl.apiUrl + '/marketing/user/coupon/listOnPay', // 支付前出示
  listCommon: baseUrl.apiUrl + '/marketing/user/statics/listCommon', // 个人中心汇总
  listUserPackets: baseUrl.apiUrl + '/marketing/user/packet/listUserPackets', // 查询红包
  listAreaAndDesk: baseUrl.apiUrl + '/shop/area/listAreaAndDesk', // 获取店铺桌台资源
  listOrderUsableCoupons: baseUrl.apiUrl + '/marketing/user/coupon/listOrderUsableCoupons', // 获取订单可用卡券
  listOrderUsablePackets: baseUrl.apiUrl + '/marketing/user/packet/listOrderUsablePackets', // 获取订单可用红包
  listOrderUsableCpsAndPks: baseUrl.apiUrl + '/marketing/user/prize/listOrderUsablePrizes', // 获取订单可用卡券和红包

  // 优惠商家
  getTradeArea: baseUrl.apiUrl + '/merchants/shops/marketingSetting/tradeAreaTree', // 商圈树
  getNearbyShop: baseUrl.apiUrl + '/merchants/shops/marketingSetting/shopsNearQuery', // 搜索附近推荐门店
  getKeywordList: baseUrl.apiUrl + '/merchants/shops/marketingSetting/shopsByKeyword', // 根据关键字获得门店列表
  getShopDetail: baseUrl.apiUrl + '/merchants/shops/marketingSetting/getShopDetail', // 搜索门店详情
  getQrcodeUrl: baseUrl.apiUrl + '/marketing/user/invited/getQrcodeUrl', // 获取邀请二维码
  giveQrcodeUrl: baseUrl.apiUrl + '/marketing/user/give/getQrcodeUrl', // 赠送券二维码

  // 红包
  getdrawRemaining: baseUrl.apiUrl + '/marketing/user/packet/drawRemaining', // 获取红包列表
  getdrawByPlayCode: baseUrl.apiUrl + '/marketing/user/packet/drawByPlayCode', // 邀请码领取红包

  // 分享领红包
  saveTempOrderPrice: baseUrl.apiUrl + '/order/saveTempOrderPrice', // 保存结账前的计价结果
  shareOrder: baseUrl.apiUrl + '/marketing/user/redPacket/listUserShareOrderRedPacket', // 分享订单详情
  getRedPacketNo: baseUrl.apiUrl + '/marketing/user/packet/drawRemaining', // 今日领取红包剩余次数
  getRedPacket: baseUrl.apiUrl + '/marketing/user/packet/drawByPlayCode', // 分享订单领取红包
  getMemberFans: baseUrl.apiUrl + '/member/getMemberFans', // 获取撩美味会员信息
  getShareKey: baseUrl.apiUrl + '/marketing/user/packet/getShareKey', // 分享订单

  // 设置用户信息
  getSetting: baseUrl.thirdUrl + '/wechat/lmw/getSetting', // 获取会员设置
  setSex: baseUrl.thirdUrl + '/wechat/lmw/setSex', // 设置性别
  setBirthday: baseUrl.thirdUrl + '/wechat/lmw/setBirthday', // 设置生日
  bindPhone: baseUrl.thirdUrl + '/wechat/lmw/bindmobile', // 绑定手机号码

  // 分享卡券
  marketingCoupon: baseUrl.apiUrl + '/marketing/coupon/', // 获取用户分享过来的现金券详情
  marketingCouponitem: baseUrl.apiUrl + '/marketing/coupon/item/', // 获取用户分享卡券实体
  marketingDonate: baseUrl.apiUrl + '/marketing/user/coupon/donate/', // 用户领取分享的券

  // 预订单
  getPendingOrderInfo: baseUrl.apiUrl + '/order/findPendingOrderById', // 根据ID查询待下订单信息
  cancelPendingOrderInfo: baseUrl.apiUrl + '/order/cancelPendingOrder', // 根据ID取消待下订单信息
  pdOrder2addOrder: baseUrl.apiUrl + '/order/pendingOrderToAddOrder', // 预订单转真订单
  savePendingOrder: baseUrl.apiUrl + '/order/savePendingOrder', // 新增或者更新待下订单信息
  listPendingOrderSimple: baseUrl.apiUrl + '/order/listPendingOrderSimple', // 查询待下订单的简易信息：至少需要传入待下单状态(用于在首页是否显示待处理订单)
  listPendingOrder: baseUrl.apiUrl + '/order/listPendingOrder', // 查询待下订单信息
  getDeskIdByUrl: baseUrl.apiUrl + '/shop/desk/getDeskIdByPublicUrl' // 通url获取桌号id
}

export default apiName
