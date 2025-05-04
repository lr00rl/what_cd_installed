> you can check the tutorial [here](https://sspai.com/post/89281)
> 
> 参考: 
> - https://sspai.com/post/89281
> - https://github.com/rime/home/wiki
> - plum: https://github.com/rime/plum
> - https://dvel.me/posts/rime-ice/


> > BUGS:
> bad with google-chrome-stable Version 135.0.7049.114 (Official Build) (64-bit), 
  because of the chrome's bug, you can check the issue [here](https://github.com/fcitx/fcitx5/issues/1313)
> config dir: `$HOME/.local/share/fcitx5/rime`


各个主流发行版都在官方源收录了 RIME，以及 RIME 运行所需的输入法框架 IBus 或
Fcitx5。考虑到 Fcitx5 更为常用，这里仅介绍 RIME+Fcitx5 的安装。

首先，在你的发行版中安装 Fcitx5，可以参考官方教程。安装完成之后，用下面的命令安装 RIME：

`sudo apt update && sudo apt install fcitx5-rime  # Ubuntu / Debian`

安装完成后，在终端里运行fcitx5-configtool（或在应用程序启动器中检索「Fcitx」关键字），打开 Fcitx 设置工具。
然后，在右侧的「可用输入法」中找到 RIME，双击它，以将其添加到「当前输入法」列表。

最后，在系统托盘右击 Fcitx 图标（通常显示为键盘图案，或者是一只小企鹅），选择「RIME」，这样就成功激活了。



Linux 发行版用户可以使用 RIME 官方的「东风破（Plum）」工具来安装雾凇拼音。

首先，使用 Git 来下载东风破工具，假设把工具下载到当前用户的主目录下：

```shell
git clone --depth 1 https://github.com/rime/plum ~/plum
然后，运行以下命令安装雾凇拼音：

# 切换到东风破的目录
cd ~/plum

# 如果你使用Fcitx5，你需要加入参数，让东风破把配置文件写到正确的位置
rime_frontend=fcitx5-rime bash rime-install iDvel/rime-ice:others/recipes/full

# 如果你是用IBus，则不需加参数，因为东风破默认是为IBus版的RIME打造。
bash rime-install iDvel/rime-ice:others/recipes/full
```

稍等片刻，雾凇拼音输入方案就安装成功了。

激活雾凇拼音输入方案（中州韵/小狼毫/鼠须管）
现在雾凇拼音输入方案已经准备就绪，但还没有激活。此时输入文字，仍然还在使用原有的拼音方案。

接下来，只需要按「Ctrl+~」快捷键（其中，「~」键位于 Tab 键的正上方），打开 RIME 的输入方案选择菜单：

然后，按下相应的数字键（或直接点击），选择「雾凇拼音」，那么雾凇拼音将正式激活，你可以畅快地打字了！
