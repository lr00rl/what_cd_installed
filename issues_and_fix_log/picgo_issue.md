https://github.com/Molunerfinn/PicGo/issues/467

## Linux安装AppImage文件出错

### 问题重现

打开AppImage文件时，提示`/tmp/.mount_PicGo-s7aX7M/chrome-sandbox`权限不正确，但是似乎因为没有安装成功`/tmp/.mount_PicGo-s7aX7M`会被自动删除，无法为`chrome-sandbox`给予4755权限
以前安装linux版网易云音乐时也出现了同样的问题，但是安装失败`chrome-sandbox`文件夹会被保留，可以赋予正常权限之后重新安装

```shell
[8898:0420/011642.495795:FATAL:setuid_sandbox_host.cc(157)] The SUID sandbox helper binary was 
found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You
 need to make sure that /tmp/.mount_PicGo-s7aX7M/chrome-sandbox is owned by root and has 
mode 4755.
```


今天在谷歌上找到问题了，这是Linux内核的问题，解决方法四种，推荐第四种，一劳永逸

1. 启用用户名称空间： `sudo sysctl kernel.unprivileged_userns_clone=1`，但每次开机都要运行该命令。
2. 给报错信息给出的文件授权：`sudo chown root <path_to_marktext_dir>/chrome-sandbox && sudo chmod 4755 <path_to_marktext_dir>/chrome-sandbox`，但不适用于picgo，因为会自动删除。
3. 运行的时候加上免沙箱命令：`--no-sandbox`
4. 开机时自启动用户名称空间：`echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/userns.conf`

只适用于Debian/Ubuntu系列Linux发行版。

---

启用命令空间对我好像没用 （桌面版 ubuntu 24.04.2 LTS），但是找到了一个其他的参考：

https://askubuntu.com/questions/1512287/obsidian-appimage-the-suid-sandbox-helper-binary-was-found-but-is-not-configu

解决办法：
添加文件（/etc/apparmor.d/picgoappimage）并编辑：

```
abi <abi/4.0>,
include <tunables/global>

profile picgoappimage /opt/Picgo/PicGo-2.3.1.AppImage flags=(default_allow) {
  userns,

  # Site-specific additions and overrides
  include if exists <local/picgoappimage>
}
```

保存之后重启一下 AppArmor 服务

```
sudo systemctl reload apparmor.service
```

然后就可以顺利打开了


## What's happening with your AppImage applications

When you try to run Electron-based AppImage applications like Obsidian or PicGo
on Ubuntu 24.04, you encounter a sandbox helper error because the system is
trying to create a secure sandbox environment, but the temporary mount point it
creates isn't configured with the proper permissions.

The approach suggested in your message creates an AppArmor profile to allow the
application to use "unprivileged user namespaces" instead of requiring the SUID
sandbox. This is essentially a more modern and secure approach to application
isolation.

Let me break down what each part of the AppArmor profile means:

1. `abi <abi/4.0>` - Specifies the Application Binary Interface version for compatibility

2. `include <tunables/global>` - Includes global AppArmor settings

3. `profile obsidianappimage /path/to/Obsidian-1.6.7.AppImage flags=(default_allow)` - Defines an AppArmor profile:
   - `obsidianappimage` is the name of the profile
   - `/path/to/Obsidian-1.6.7.AppImage` is the path to the application
   - `flags=(default_allow)` sets the default policy to allow operations unless specifically restricted

4. `userns` - Grants permission to use user namespaces, which is the key permission needed

5. `include if exists <local/obsidianappimage>` - Allows for additional local configuration


## Final setup:

Install(soft link) Picgo AppImage:

```bash
sudo ln -s /opt/Picgo/PicGo-2.3.1.AppImage /usr/local/bin/picgo
```


## To use in Typora:

Because Typora will install the picgo binary to its own directory, and used the `/bin/sh` to run the command, 
so it will not find the `picgo` command in your system path.

So if you want to use your own system picgo, you need to set the path in Typora.

```bash
Finial exec custom command in typora for upload image:

```bash
export NVM_DIR="/home/cdcd/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" ; picgo upload
```
