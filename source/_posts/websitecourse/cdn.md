---
title: 给你的网页用上CDN加速
date: 2023-05-28 16:40:23
pic: /images/Markdown/headimg/cdn.png
categories: 
 - 教程
toc: true
tags:
- cdn
- 域名
- 进阶
- 避坑
---

## 前言

经过之前几步，你已经拥有了一个自己的博客，但是由于GitHub Pages和netlify服务的提供商都在国外，所以可能你的网站就像这样：（[测试网站](https://ping.chinaz.com/)）

时不时连不上或者加载速度慢，数据包丢失等问题很烦。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-28%20164906.png)

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-28%20165054.png)

但是经过本篇CDN教程过后，你的网站可以快成这样：

> 取决于你的CDN提供商和源站选择

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-28%20165327.png)

## CDN介绍

CDN全称**C**ontent **D**elivery **N**etwork，**內容分发网络**。利用CDN最近的服务器响应你的请求再把数据发给你，这样子每次请求就可以不用跑到那么远的源站去请求然后再回来，路程少了自然快了，丢失风险也少了。

现在主要的CDN提供商大都有一套完整的CDN网络，基本上不用操心CDN性能，但是要担心一下你的流量会不会被恶意刷没。

现在中国大陆地区CDN提供商进行CDN加速需要网站域名备案，其他的加速不用，请根据需要选择。

> 域名备案请自行寻找方法，一般域名提供商就带有备案服务，而且备案过程十分繁琐且冗长。

## CDN使用

在CDN控制台界面选择添加一个域名加速，选择加速的区域是中国大陆地区还是其他还是全球(只要是包括中国大陆地区的加速都需要备案)。

加速类型选择的话，我们只需要加速一下网页的小文件就行，看着来选就行。

  {% colorpanel info Tips %}

源站配置的话，我们选择自有源，填写你的GitHub或者netlify网站域名。

回源HOST一定要配置你在GitHub或者netlify的自定义域名，否则会导致回源失败出现404界面。

> 比如，你填写了GitHub的自定义域名为`github.example.cn`，你选择的回源host却是`example.cn`这样会导致GitHub服务器接收到你的CDN服务器请求的数据时，返回数据时回源失败出现404界面。
>
> ![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-28%20192012.png)

{% endcolorpanel %}  

接下来该配置你的**网站缓存策略**，如果你是新手不想管那么多，可以直接缓存全部文件。

  {% colorpanel danger 注意 %}

前提是你的网页内容没有多少文件，如果你的网站动不动图片全部内置服务器请求，全部下载文件也全部放你网站里面，那恐怕你有多少CDN流量都不够你挥霍的。

{% endcolorpanel %}  

如果你是图片找图床，整个根目录全部文件加起来也没多大那种到是可以无脑，接下来的交给CDN就行。

接下来到**HTTPS**，一般CDN进行HTTPS请求都是要收费的，但是不用浏览器又给你报毒，很无语，都什么年代了，HTTP都标配了还搞这一套。如果开启了HTTPS记得去绑定一下证书给CDN，你也不希望你的网站因为CDN原因被报毒吧。

不过好在一般CDN都有免费请求次数，腾讯云是300万次。够一般人的使用需求了，不过还是建议把下面的请求限制做好。HTTP2.0可以根据自行需求配置，这一项可以显著加速网页加载速度，缓解网络堵车。

还有这个TLS版本配置，如果你开启了TLS1.0会导致PCI DSS检测不合规。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-28%20220103.png)

建议根据自行的需求**设置流量限制**，否则保不准哪个网上爬虫能一晚上把你的流量全部爬光，一般只需要配置一下瞬时流量就行，大多数轰炸都是短时间高请求耗光你的流量。

最后，把你的域名`CNAME`到他提供给你的CDN域名就行，你也可以根据你的CDN服务地域来选择解析结果，你可以给境内境外，各个运营商，各个不同地区配置不同的服务器，也可以解决某些地区访问慢的问题，不过，这些领域CDN可以专业对口，可以放心交给CDN

{% alertbox success "部署成功后打开控制台看看响应IP

如果是CDN节点那就是没问题了" %}

{% colorpanel info END %}

作为博客教程，到这一篇应该算是结束了

接下来的博客应该会转向其他的方向

比如python和C语言以及一些学习小结

敬请期待

{% endcolorpanel %}