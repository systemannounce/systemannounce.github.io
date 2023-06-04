---
title: 使用hexo和Pages服务搭建个人博客
date: 2023-05-12 14:11:15
pic: /images/Markdown/headimg/hexopages.png
toc: true
categories: 
 - 教程
tags:
 - hexo
 - blog
 - 初阶
---

## 一、前言

你是否想过以最低成本拥有一个属于自己的个人网站、一个可以记录一些东西的地方？

本教程可以做到让你不用买服务器，不必实名认证，尽可能简单地搭建一个博客网站。

<!-- more -->

相信你已经看到我的个人博客网站了，下面是一些其他的个人博客：

[Argvchs の小窝](https://argvchs.github.io/)

[糖羽仙 (tangyuxian.com)](https://www.tangyuxian.com/)

[岛 (gitee.io)](https://shen-yu.gitee.io/)

他们都是基于hexo来搭建的博客，虽然还有基于其他甚至是空气的，我们这里选用hexo来进行教程。

## 二、环境安装

### 1. 安装nodejs

> 下载地址：[https://nodejs.cn/download/](https://nodejs.cn/download/)

由于能来看我这篇教程大部分人的人最常用的系统都是Windows，所以本教程以及接下来的平台都是基于Windows。

这里选择Windows的msi安装包进行安装，版本选自己系统的版本。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20151206.png)

接下来我们运行安装包，默认安装在C盘。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/Snipaste_2020-02-29_08-49-21.png)

记得在这一步选择上Add  to PATH，然后接着下一步。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/Snipaste_2020-02-29_08-49-39.png)

### 2. 安装GIT

> 下载地址：https://git-scm.com/
>
> 备用下载地址(2.40.1)：https://wwox.lanzout.com/b028mcskd
> 密码 : fdww

官网点击这里即可下载最新版

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20152722.png)

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20152823.png)

接着运行下载到的安装包(安装位置可以选个自己喜欢的)

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/Snipaste_2020-02-29_09-01-49.png)

这里后面的步骤不需要过多配置，全部默认点next就行。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/jqTCDk6YSbwQOVz.png)

安装完后，打开PowerShell或者cmd，输入 `git -v` 回车，如果返回了安装的git的版本号没有报错那就是安装成功了。

或者，你可以在桌面右键，查看一下有没有Git Bash Here的选项，如果有那就应该是没有问题的。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20154619.png)

### 3. 检测安装

> 这里推荐如果你系统版本较新，有一个名为Terminal(终端)的应用安装在你电脑上面，最简单的检查办法还是桌面右键如图所示：在终端中打开。
>
> **如果你有，那么建议你直接用这个应用取代掉这以后所有需要用到Git Bash的地方。**
>
> ![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20154619.png)
>
> 如果你没有想要使用那也可以去Microsoft store下载一个，也可以直接用Git Bash的窗口。

**接下来继续正事**

打开桌面右键打开Git Bash窗口，分别执行以下命令：

```bash
node -v
npm -v
```

如果如图所示成功输出了版本号，那就证明以上安装步骤成功。如果没有则要再安装一次，记得勾选`Add  to PATH`，或者手动为nodejs添加环境变量，安装完后记得重启你的Git Bash窗口。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20160620.png)

### 4. 安装cnpm

> 这个操作是为了以后安装时避免国内安装速度过慢加上去的，如果你的网络环境"非常好"，可以考虑直接跳过该步骤。**并且下文所有命令最前面是cnpm的可以替换成npm。**

在上面窗口继续执行下面的命令：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装完后再输入一下 `cnpm -v` 验证一下安装是否成功，如果正常输出了cnpm的版本号那么恭喜你安装成功。

## 三、安装HEXO并成功启动本地博客网站

### 1. 安装HEXO

在Git Bash窗口输入下面的命令行直接安装HEXO：

```bash
cnpm install hexo-cli -g
```

没有报错即是成功。警告不算报错。

### 2. 初始化博客

新建一个文件夹，一定要是空的，这里面放你以后博客的工程文件，选个好点的位置，我这里选的是D盘下面一个blog的文件夹。在你选好的文件夹空白位置右键，打开Git Bash窗口

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20191011.png)

一定要确认一下是不是在当前目录下面，不然后续执行的命令难搞。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20191116.png)

确认好之后执行 `hexo init` 。

> 如果你网络好，可以直接成功，那么这一点下面操作你就不需要做了。
>
> **不过如果你卡在Install dependencies这一步的话，那就得手动Ctrl＋C结束命令。继续本点教程。**

![迟迟未能结束](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20191717.png)

使用 `cnpm install` 命令可以帮你把剩下没做完的操作做完。

  {% colorpanel warning 注意 %}

大部分情况下这样子就已经可以完美完成了。

但是有些地方网络条件实在不好，以下分几种情况：

1. 卡在cloning这一步没有后续的响应了。
2. 用 `cnpm install` 也还是卡住动不了。
3. 其他情况

对应点的解决方案如下：

1. 手动clone仓库，前往https://github.com/hexojs/hexo-starter 点击右上角的code然后下载zip包解压到你的目录下面(可以用点魔法)。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20193129.png)

![你复制完项目文件夹应该长这样](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20193732.png)

然后接着下一步使用 `cnpm install` 来帮助你安装依赖文件。

2. 这个是在没辙了，cnpm都救不了你我也没法子，建议看运气网络好的时候试试吧。
3. 请邮箱或者下方评论区说明情况。

{% endcolorpanel %}  

### 3. 本地运行博客网站

如果上面都没有问题的话，恭喜你，你可以看到你的网站了，在你的本地博客目录下面打开Git Bash窗口然后输入 `hexo s` 来运行hexo服务器，然后在浏览器输入这里的网址就可以看到界面了。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20194445.png)

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/Snipaste_2020-02-29_09-33-55.tyszma65r9.png)

如果成功出现了上面的网页，那证明你已经成功在本地运行了一个默认的HEXO博客网站。

## 四、更换博客主题

### 1. 寻找一个合适的主题

> {% blur 如果你觉得默认主题还行，那就没有下面这些的事了。 %}
>
> hexo主题网址：https://hexo.io/themes/ ，基本所有主题都会收录到这个网页里面，根据需要查找下载即可。

每一个主题一般都有三个部分，即预览界面，项目地址，配置教程。

新手最好得找一个三部分齐全的主题进行采用。

一般从主题网址进入的网页一般都是预览界面，

项目地址就放在某个文章或者某个按钮下面，这个得找找。

### 2. 主题安装

打开项目地址后，点击右上角的code，选择clone网址或者选择下载zip包。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20205346.png)

在刚刚的博客本地目录下面打开Git Bash窗口，根据你拿到的方法进行下面操作：

{% alertbox info "点击↓↓对应的方法即可" %}

  {% collapse 方法①%}

在本地博客文件夹下面打开Git Bash窗口，执行下面的命令

```bash
git clone 复制的网址 themes/在这里自己起一个主题名字
```

例如：

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20210037.png)

上面命令表示把你刚刚复制的网址对应的项目，拷贝到你的本地博客文件夹下面themes/T1文件夹里。

{% endcollapse %}  

  {% collapse 方法② %}

你下载的zip包自行解压缩，把文件全部解压到本地博客文件夹的/themes/文件夹下面的子文件夹里

子文件夹的名字可以自己起一个喜欢的。

举个例子：/themes/T1 在T1文件夹里面有刚刚GitHub主页的全部的项目文件。

**文件夹大概长这样：**

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20210613.png)

{% endcollapse %}  

### 3. 修改HEXO配置文件(blog/_config.yml)

> 配置文件初始应该是这样的：
>
> ![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20211058.png)

{% colorpanel info 配置文件部分对应值意思 %}

author值对应的是作者名

title对应的是博客名

language是网站语言

**theme是在本地博客目录下面的文件夹的名称，你写哪个文件夹用的就是哪个文件夹里面的主题项目文件，不可以写不存在的文件夹。**

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20212437.png)

{% endcolorpanel %}

{% alertbox danger "你填的值和前面的名称冒号之间至少得有一个空格

而且你不能在你填的值里面加上英文的冒号" %}

将theme的值改成你下载到themes目录里面的项目文件夹的名称

然后在本地博客文件夹运行下面的命令：

```bash
hexo s
```

按照之前的方法前往他提示你的网址就可以预览到效果了。

{% alertbox info "有的主题还需要安装它需要的依赖，所以在你更换之后是暂时无法预览的，这一般都会在主题的文档里面提到，只有安装它的依赖之后才可以正常预览。" %}

### 4. 修改主题配置文件(blog/themes/xxx/_config.yml)

{% alertbox warning "注意别和上面的HEXO配置文件弄混" %}

{% alertbox primary "这部分请参照上方讲过的主题三部分其中之一的配置教程

一般主题都带有配置教程，请自行移步观看" %}

一般都会详细讲解每一个配置项对应的作用，**活用 `hexo s` 命令可以在本地预览每一个配置项被修改后的实施效果。**

建议新手挑一个比较简单的进行配置练手，这样子一步一步上升不至于开头放弃。

## 五、接下来该写点东西了吧？

在博客本地文件夹下面执行

```bash
hexo new "文章文件名"
```

文章文件名一般写英文，这个不是文章的标题，仅用作区分每个文章，而且文章和文章之间一般不能同名。

在博客本地文件夹下面的source/_posts文件夹里面找到你刚刚新建的文章，后缀名是 `.md` 

你可以用各种文本编辑器来打开这个文件，不过最好用专门的文本编辑器进行编辑，因为各种语法结构普通编辑器不能很好预览效果。

这里给各位推荐Gridea和Typora(需要付费)，下载方式请自行寻找。

实在不济用vscode弄个插件也凑合用着。

---

使用Markdown编辑器打开你上面创建的文件，里面会有几样信息

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20215916.png)

  {% colorpanel info 头信息 %}

* title 文章标题
* date 创建日期
* tag 文章标签

{% endcolorpanel %}  

我猜你眼力应该比我好，看到了title上面和tags下面区域颜色和中间的不一样

你需要在灰色框里面填写文章的头信息，白色区域里面写你的正文。

这里和上面一样，利用 `hexo s` 可以在本地实时预览你写的东西。

{% alertbox info "我的下一篇博客会说明如何写Markdown文章" %}

## 六、部署你的博客

现在你看到的博客，全部只能在本地查看，如何将其上传到网络里面让互联网朋友们看到这篇文章呢？

下面有两个方法

> **GitHub**
>
> 国内访问速度一般
>
> 不需要花钱
>
> 域名可自定义
>
> 可绑定域名
>
> 全面支持HTTPS

> **Netlify**
>
> 国内访问速度不稳定
>
> 不需要花钱
>
> 域名可自定义
>
> 可绑定域名
>
> 绑定域名后开启HTTPS操作繁琐



### 1. GitHub部署

首先就是注册账号，创建仓库

仓库名必须为你的github用户名＋github.io

  {% colorpanel success Netlify部署提示(如果你正在GitHub部署请忽略本提示)： %}

如果你只是想在Netlify上面部署页面而不想再GitHub上面部署页面的话

这里的仓库名称你可以随便写。

{% endcolorpanel %}  

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20222058.png)

仓库详细设置如下，必须为公共仓库。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20222152.png)

由于HEXO上传项目利用的是deploy，还得创建一个git秘钥

{% alertbox danger "申请该秘钥的电脑得和你上传博客的电脑是同一台电脑" %}

在任意一个目录打开Git Bash，执行下面的命令，一路回车就完事了。

```bash
ssh-keygen -t rsa -C “xxx@example.com“
```

{% alertbox info "把上面的`xxx@example.com`替换为你自己的GitHub邮箱" %}

然后执行下面的命令

```bash
cat ~/.ssh/id_rsa.pub
```

他会输出一串你的秘钥，复制输出的所有信息。

进入你的GitHub网站，点击头像，settings，SSH and GPG keys，点击New SSH key

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20223245.png)

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20223053.png)

title用来给你提示这个key用来干什么的，key type就选图中这个

key里面就写你刚刚复制到的内容。

保存后在你的电脑上面打开Git Bash，执行下面命令

```bash
ssh -T git@github.com
```

会提示一行你要继续连接吗？输入yes就行了。

打开你的xxx.github.io项目仓库，拷贝项目的SSH地址。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20223655.png)

打开你的HEXO配置文件，修改deploy参数

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20223943.png)

在博客根目录下打开git bash

如果你是第一次使用git，请分别执行下面的命令：

yourname是你的名字

youremail是你的邮箱

```bash
git config --global user.name "yourname"
git config --global user.email "youremail"
```

然后执行下面的命令来安装上传插件

```bash
cnpm install hexo-deployer-git --save
```

然后在博客本地文件夹下打开Git Bash，输入以下命令就可以上传了

```bash
hexo g -d
```

{% alertbox success "请返回继续观看部署教程" %}

以下是一些常用的HEXO命令，请根据情况使用：

  {% collapse HEXO基础命令 %}

`hexo server`        #Hexo 会监视文件变动并自动更新，除修改**站点配置文件**外,无须重启服务器,直接刷新网页即可生效。
 `hexo server -s` #以静态模式启动
 `hexo server -p 5000` #更改访问端口   (默认端口为4000，'ctrl + c'关闭server)
 `hexo server -i IP地址` #自定义 IP
 `hexo clean` #清除缓存  ,网页正常情况下可以忽略此条命令,执行该指令后,会删掉站点根目录下的public文件夹
 `hexo g` #生成静态网页  (执行 `$ hexo g`后会在站点根目录下生成public文件夹, hexo会将"/blog/source/"   下面的.md后缀的文件编译为.html后缀的文件,存放在"/blog/public/ "   路径下)
 `hexo d` #将本地数据部署到远端服务器(如github)
 `hexo init 文件夹名称` #初始化XX文件夹名称
 `npm update hexo -g`#升级
 `npm install hexo -g`#安装
 `node-v`          #查看node.js版本号
 `npm -v`        #查看npm版本号
 `git --version`  #查看git版本号
 `hexo -v`      #查看hexo版本号

{% endcollapse %}  

上传成功后，打开你的GitHub项目，点击settings，在下面找到GitHub Pages

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20225427.png)

**这里的branch如果你上面和我配置的一样是master就选这个，否则选你填的那个。**

如果你的上传成功，分支又选对了的话，在这里头部应该就能看到类似于这种的提示，点击这个网址就可以看到你的博客网站了。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20225740.png)

### 2. Netlify部署

**请先阅读 1. GitHub部署教程，直到看到以下提示。**

{% alertbox success "请返回继续观看部署教程" %}

或者你也可以把上面全部做完，再做这个，这样子你的博客就同时在两个网站上面部署了。

> 官网链接：https://app.netlify.com/

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20232910.png)

建议直接登录你刚刚的GitHub进行仓库快捷导入，然后授权给Netlify访问你的GitHub仓库，选择你刚刚上传代码的GitHub仓库进行部署。

如果你刚刚按照我的步骤来上传的代码的话，下面的框都不用填，选择好分支就行，每次向GitHub更新博客，这里会自动部署，完全不用操心，很舒适。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20233436.png)

点击Deploy site就自动进行部署了。

回到主页看到网站部署成功就可以用它给的网址访问你的网站了。

感觉他自动分配的网址不好记？点击site settings，然后点击Domain management，就可以看到刚刚不舒服的网址了， 右边的options可以进行网址自定义。

![](https://cdn.jsdelivr.net/gh/systemannounce/piceeimg/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-12%20234007.png)

  {% colorpanel success 恭喜你走到这一步 %}

{% alertbox success "成功啦o(*￣▽￣*)ブ" %}

你已经完成了本教程所有内容

成功搭建了一个可以阅读的个人网站

进阶教程在未来我的博客更新

{% endcolorpanel %}  

## 七、未完之事

### 1. Markdown语法教程(下一篇博客安排)

### 2. 域名注册

### 3. CDN加速(让你的博客本来一般的网速直接起飞)

