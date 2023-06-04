---
title: Python爬虫基础1
date: 2023-06-03 23:34:26
pic:
toc:
categories:
tags:
- python
- 数据解析
- 爬虫
---

## 前言

这篇属于是兴趣学习之余摸出来的。

注意：我不是专业学Python的，也不是专门学爬虫。只是生活中有个自动签到和获取信息解析的需求就去了解了一下爬虫，顺便学的Python。

本质上还是自己的学习记录，不是专业教程，如果需要专业指导请另寻方法。

**默认你已经会了Python语言基础**

{% alertbox primary "如果其中有描述错误或者不明确的地方恳请指出，轻喷。谢谢！" %}

## requests模块

requests模块作为一个优雅而简单的 Python HTTP 库，被广泛使用。

只需要在使用前用下面语句导入requests模块直接可以使用

```python
import requests
```

使用下面的语句可以让你的爬虫程序获取到一个网页

```python
r = requests.get('https://systemannounce.cn')
```

现在`r`这个对象里面存储了我们请求到的网页的所有信息，包括标头等一系列你之前都不会在意的信息。

使用下面的语句可以让你的爬虫程序发起一个`POST`请求，主要使用范围是给服务器发送数据，比如登录数据。

```python
r = requests.post('https://systemannounce.cn' , data = {'key':'value'})
```

> 使用`requests.get`获取一个网页，使用`requests.post`可以给服务器发送数据，除此之外，requests模块还有其他的请求类型，还有`PUT`，`DELETE`，`HEAD`和`OPTIONS`

但是由于现在许多网站都不欢迎爬虫的爬取，所以大多数网站都有一定的反爬策略，由于requests模块没有内置反爬措施，所以得你自己配置。

最简单的反反爬策略就是UA伪装，先简单介绍一下UA是什么，UA在浏览器里面一般是指`User-Agent`，一般的作用是把你浏览器和系统的信息发送给服务器，让服务器知道你的设备类型，从而更好地展示他们网站的显示内容。

  {% collapse **如何查看自己浏览器自动发送的UA** %}

使用大多数浏览器按下`F12`，都会在你的页面左边，右边或者下面弹出一个窗口，在标题栏选择网络(NETWORK)标签，进入里面，应该能看到许多由你浏览器发送或者接收到的数据，如果你没有，那就刷新一次。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-06-04%20002654.png)

在这里能很清楚看到你的浏览器发送的UA为：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36

{% endcollapse %}  

因为requests模块没有内置UA，所以发送的`get`请求的UA都是和一般设备有很大区别甚至没有导致目标服务器拒绝了你的连接请求。

改进的方法也很简单，只需要把我们请求的UA伪造成这个浏览器的UA就行了。

```python
r = requests.get('https://systemannounce.cn' , headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'})
```

进行这一个简单的改动，你的爬虫程序应该可以访问正常大部分的基础网页了。

## 数据解析

