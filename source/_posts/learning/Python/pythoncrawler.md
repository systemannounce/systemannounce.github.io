---
title: Python爬虫基础①
date: 2023-06-03 23:34:26
pic: 
toc: 
categories: 
- Python
tags:
- python
- 数据解析
- 爬虫
---

## 前言

这篇属于是兴趣学习之余摸出来的。

顺便把bangumi网站排行榜抓取了下来，有需要可以下载过目→[ANIME](/download/anime317.xlsx)

> 在页面按下Ctrl＋F可以快速查找

**注意：我不是专业学Python的，也不是专门学爬虫。只是生活中有个自动签到和获取信息解析的需求就去了解了一下爬虫，顺便学的Python。**

本质上还是自己的学习记录，不是专业教程，如果需要专业指导请另寻方法。

**默认你已经会了Python语言基础**

{% alertbox primary "如果其中有描述错误或者不明确的地方恳请指出，轻喷。谢谢！" %}

{% colorpanel danger 往下阅读的前置条件 %}

## 注意事项

#### 1. 重新访问策略

网站的属性之一就是经常动态变化，而爬取网站的一小部分往往需要花费几个星期或者几个月。等到网站爬虫完成它的爬取，很多事件也已经发生了，包括增加、更新和删除。 这时候又需要重新获取，十分浪费。做好计划才是重中之重。

#### 2. 平衡礼貌策略

爬虫相比于人，可以有更快的检索速度和更深的层次，所以，他们可能使一个站点瘫痪。不需要说一个单独的爬虫一秒钟要执行多条请求，下载大的文件。一个服务器也会很难响应多线程爬虫的请求。 

- 不要设置过高访问速率
- 不要利用网站漏洞
- 不要访问禁止的资源
- 不要设置死循环

对这些问题的局部解决方法是漫游器排除协议（Robots exclusion protocol），也被称为robots.txt议定书，这份协议是让管理员指明网络服务器的不应该爬取的约定。这个标准没有包括重新访问一台服务器的间隔的建议，虽然设置访问间隔是避免服务器超载的最有效办法。在主域名后面接robots.txt就可以访问到服务器不希望爬虫访问的内容。例如：[https://www.bilibili.com/robots.txt](https://www.bilibili.com/robots.txt)和[本博客的](/robots.txt)。

{% endcolorpanel %}

## requests

requests作为一个优雅而简单的 Python HTTP 库，被广泛使用。

**由于你的电脑并没有内置这个模块，所以使用前清先安装。**

控制台输入以下命令即可安装。

```python
pip install requests
```

现在只需要在使用前用下面语句导入requests模块直接可以使用

```python
import requests
```

接下来使用下面的语句可以让你的爬虫程序获取到一个网页↓

```python
r = requests.get('https://systemannounce.cn')
```

现在 `r` 这个对象里面存储了我们请求到的网页的所有信息，包括标头等一系列你之前都不会在意的信息。

不过你如果直接打印出来或者存在文件里面，会发现只打印了一个response对象，并没有网页的HTML代码，这个时候，只需要在上面稍微改进以下，在末尾加个`.text`就可以了，比如上面例子里面使用就可以把网页HTML代码存在 `r` 这个变量里了。↓

```python
r = requests.get('https://systemannounce.cn').text
```

或者不用上面的这行代码，直接使用`r.text`也可以看到网页的HTML代码。

**接下来到数据的发送**

使用下面的语句可以让你的爬虫程序发起一个`POST`请求，主要使用范围是给服务器发送数据，比如登录，抢购，抢课，签到等等。

```python
r = requests.post('https://systemannounce.cn' , data = {'key':'value'})
```

这里的data字典主要是用来发送你的数据的，如何看你需要发送什么数据呢？

只要按下`F12`，在选项卡里面选到网络(NETWORK)，然后做出POST请求，这时浏览器就会有一条POST记录。这里面的载荷或者叫表单，就是你要做到相同请求需要发送的数据。

{% alertbox info "记得把控制台的保存日志选项勾上" %}

一般的服务器都会在你做出POST请求时返回给你数据，这些数据全部存储在`r`这个变量里。一般返回的是JSON数据，有时会返回文本或者网页。

> 使用`requests.get`获取一个网页，使用`requests.post`可以给服务器发送数据，除此之外，requests模块还有其他的请求类型，还有`PUT`，`DELETE`，`HEAD`和`OPTIONS`

### 反反爬策略

2023年了，由于现在许多网站都不欢迎爬虫的爬取(毕竟要消耗大量服务器资源)，所以大多数网站都有一定的反爬策略，由于requests模块没有内置反爬措施，所以得你自己配置。

最简单的反反爬策略就是UA伪装，先简单介绍一下UA是什么，UA在浏览器里面一般是指`User-Agent`，一般的作用是把你浏览器和系统的信息发送给服务器，让服务器知道你的设备类型，从而更好地展示他们网站的显示内容。

  {% collapse 如何查看自己浏览器自动发送的UA %}

使用大多数浏览器按下`F12`，都会在你的页面左边，右边或者下面弹出一个窗口，在标题栏选择网络(NETWORK)标签，进入里面，应该能看到许多由你浏览器发送或者接收到的数据，如果你没有，那就刷新一次。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-06-04%20002654.png)

在这里能很清楚看到你的浏览器发送的UA为：`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36`

{% endcollapse %}  

因为requests模块没有内置UA，所以发送的`get`请求的UA都是和一般设备有很大区别甚至没有导致目标服务器拒绝了你的连接请求。

改进的方法也很简单，只需要把我们GET或者POST请求的UA伪造成这个浏览器的UA就行了。

```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}
r = requests.get('https://systemannounce.cn' , headers = headers)
```

进行这一个简单的改动，你的爬虫程序应该可以访问正常大部分的基础网页了。

## 数据解析

你的爬虫程序拿到数据后，进行响应的数据解析才能把我们需要的数据从一大堆HTML代码中提取出来。

我最开始学习的是BeautifulSoup来进行数据解析，直到我发现了lxml，才发现lxml是多么简单且方便。

首先得先安装对应的库。

```python
pip install lxml
```

只需要在使用前导入响应的库就行，我们这里使用的是lxml里面的etree。

```python
from lxml import etree
```

使用时，只需要我们将完整的HTML代码交给etree，剩下要做的就是提取信息。

使用下面代码可以把你的HTML文本使用etree解析。而解析后的对象被放在了`tree`里面

```python
tree = etree.HTML(r)
```

{% alertbox info "这里的`r`里面存储的应该是HTML代码，而不是一个response响应。" %}

**接下来我们得知道你需要提取的数据存放在代码中哪个位置**

你可以直接在浏览器里面打开你需要进行提取的网址，在你需要的数据的地方点击右键，选择检查

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-06-04%20105253.png)

他会把你鼠标当前指向的HTML标签给定位到，你可能需要展开标签，才能看到你需要的内容。

在你需要提取的内容点击右键，有个复制xpath的按钮，按下去就可以直接复制让etree定位你所选内容的标记。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-06-04%20105542.png)

接上面的代码，你成功复制到了xpath，你只需要输入下面的代码，把括号里面的内容写入你刚刚复制到的xpath，就可以让`source`变量提取到你当前所选内容的**列表**。

```python
source = tree.xpath('//*[@id="post-like-donate"]/a/text()')
```

{% alertbox warning "因为HTML的问题，你有时候并不能每次都提取到文本标签，所以这里做一个说明。

xpath最后的`/text()`的意思是提取当前标签内的所有文本。" %}

如果你不是只想提取一个内容，而是想提取同类型内容，比如下面的标签。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-06-04%20110359.png)

按照上面的步骤，复制其中一个标签的xpath，会得到以下内容

`//*[@id="krw-tags"]/div/a[1]/text()`

我猜聪明的你已经发现如何提取所有标签了，正如上面所说的，上面那行代码提取的是一个列表，只需要将xpath改成下面这样，即可提取当前页面所有标签。

`//*[@id="krw-tags"]/div/a/text()`

## 接下来的计划

Ajax数据获取

正则表达式

JSON数据解析

爬虫登录网页

cookie持续登录

加密

......