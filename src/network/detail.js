import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;  //标题
    this.desc = itemInfo.desc;   //描述
    this.newPrice = itemInfo.price;   //新的价格
    this.lowNowPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice;   //旧的价格
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class itemParams {
  constructor(info,rule) {
    this.disclaimer = rule.disclaimer;
    this.tables = rule.tables[0]
    this.key = info.key
    this.set = info.set
  }
}

export class Rate {
  constructor(content,extraInfo,images,style,user,created) {
    this.content = content;
    this.extraInfo = extraInfo;
    this.images = images;
    this.style = style;
    this.user = user
    this.created = created;
  }
}