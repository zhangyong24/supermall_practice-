import request from "./request.js"
export function getDetailData(iid) {
  return request({
    url:"/detail/",
    params:{
      iid
    }
  })
} 
export function getRecommend(){
  return request({
    url:"/recommend",
  })
} 
export class detailData {
  constructor(itemInfo,columns,service){
    this.title = itemInfo.title
    this.oldPrice = itemInfo.lowPrice
    this.newPrice = itemInfo.highNowPrice
    this.discount = itemInfo.discountDesc
    this.desc = itemInfo.desc
    this.columns = columns
    this.services = service
  }
  
}
export class shopData{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.shopFans = shopInfo.cFans;
    this.shopSells = shopInfo.cSells;
    this.shopScore = shopInfo.score;
    this.shopGoodsCount = shopInfo.cGoods;
  }
}
