>
> for the config, you can check the repo: [lr00rl/cdxx0-dotfiles](https://github.com/lr00rl/cdxx0-dotfile)
>

## for dev tools,lang

- python3
- cargo;rust
- lua

## from apt

- git
    - git-lfs
    - git-delta
- tmux
- btop
    - `curl -L https://github.com/aristocratos/btop/releases/download/v1.4.3/btop-x86_64-linux-musl.tbz | sudo tar -xjC /tmp && sudo cp /tmp/btop/bin/btop /usr/local/bin/ && sudo chmod +x /usr/local/bin/btop`
- kitty: `curl -L https://sw.kovidgoyal.net/kitty/installer.sh | sh /dev/stdin`
- wezterm: https://github.com/wezterm/wezterm?tab=readme-ov-file
    - give it up for now[2025-05-01], it is so much slow and not smooth than kitty, not even ghostty
- neovim: better build from source
- vim: better build from source
    - `./configure --with-features=huge \
    --enable-terminal \
    --enable-cscope \
    --enable-multibyte \
    --with-x \
    --enable-xim \
    --enable-fontset \
    --enable-gui=no`
- ripgrep
- fcitx5: for fcitx5 input method
- fcitx5-rime: for fcitx5 input method
- net-tools
- tree
- telnet
- typora: and yes, you know the crack for it
- nvitop
- nvtop
- flameshot: use Snipaste instead
- copyq: used for clipboard manager, but it is sucks, use fcitx5-rime instead
- cloc
- ffmpeg
- vlc
- mpv: mpv is nice!
- alacritty: A cross-platform, OpenGL terminal emulator.
    - github pages: https://github.com/alacritty/alacritty
    - official website: https://alacritty.org/
- cadaver: command line WebDAV client
- mednafen: https://mednafen.github.io/
    > Mednafen是一个多系统游戏模拟器，让你能在现代电脑上运行经典游戏机的游戏。
    > 多平台支持：可以模拟17个不同的游戏系统，从任天堂的Game Boy、NES、SNES，到世嘉的Genesis、Saturn，再到索尼的PlayStation等
    > 跨平台：使用OpenGL和SDL技术，可以在不同操作系统上运行
    > 命令行驱动：通过命令行参数来配置和使用
    > 灵活控制：支持键盘和手柄操作，可以自定义按键映射
    > 实用功能：
    >   - 即时存档（Save States）
    >   - 实时倒带功能
    >   - PNG格式截图
    >   - QuickTime格式录像
    > 
    > 需要注意的是，虽然模拟器本身是合法的，但你需要合法获得游戏ROM文件才能玩游戏。
    - [mednaffe](https://github.com/AmatCoder/mednaffe): Mednaffe 是Mednafen的图形界面frontend.
    - you can directly install them by `sudo apt install mednafen mednaffe`
    - > for the ROM game files, you can check: https://www.retrowan.com/
- viu: A command-line image viewer written in Rust.
    - `sudo apt install viu`
    - `viu --help` for usage
- chafa: A command-line image to ASCII converter.: https://github.com/hpjansson/chafa
    - `sudo apt install chafa`
    - `chafa --help` for usage


## Play Games
- VVVVVV
    - https://github.com/TerryCavanagh/VVVVVV.git



## from npm

- js-beautify
- picgo-core

## from web official

- Clash-verge: https://github.com/clash-verge-rev/clash-verge-rev
- Google-chrome: https://www.google.com/chrome/;https://chromestatus.com/roadmap
- Wechat: https://weixin.qq.com/
- QQ: https://im.qq.com/linuxqq/index.shtml
- ghostty: not stable for now
- Mysql-shell
- Nutstore
- Feishu
- snipaste: https://www.snipaste.com/
    - In cd-laptop:xiaoxin `sudo ln -s /opt/Snipaste/Snipaste-2.10.6-x86_64.AppImage /usr/local/bin/snipaste`
- NerdFont:
    - `Iosevka Nerd Font`
- picgo: https://github.com/Molunerfinn/PicGo/
    - ` sudo ln -s /opt/Picgo/PicGo-2.3.1.AppImage /usr/local/bin/picgo_app`
    - default config path: `~/.config/picgo`
    - huawei-obs-plugin: https://github.com/lr00rl/picgo-plugin-huawei-uploader
        - https://github.com/YunfengGao/picgo-plugin-huawei-uploader
> better directly use picgo-core: https://github.com/PicGo/PicGo-Core
> default config path: `~/.picgo`
- iriun webcam: https://iriun.net/
- pan.baidu: https://pan.baidu.com/download#linux
    - 没办法，不下载这个没法下载文件（悲
- croc: `curl https://getcroc.schollz.com | bash`
- Neovide: https://github.com/neovide/neovide
    - `sudo ln -s /opt/Neovide/neovide.AppImage /usr/local/bin/neovide`
- zed: `curl -f https://zed.dev/install.sh | sh`


## compiled myself

- youtube-dl: https://github.com/ytdl-org/youtube-dl
    - make yourself


## equipped by default (mostly)

### ubuntu/debian

> you can list them by `sudo apt list --installed` for all installed and `sudo apt list | grep automatic` for all auto installed

- awk
- bc: An arbitrary precision calculator language
- crontab
- curl
- dash
- dc
- dex: DesktopEntry Execution
- dkms: Dynamic Kernel Module Support
- dunst: A customizable and lightweight notification-daemon
- ed
- fakeroot: run a command in an environment faking root privileges for file manipulation
- iw: show / manipulate wireless devices and their configuration
- jq: Command-line JSON processor
- grep
- m4: macro processor
- nc: TCP/IP swiss army knife
- lzop: lzop is a file compressor very similar to gzip.  lzop favors speed over compression ratio.
- sed
- sh


## Blogs

### DontBreakDebian

> https://wiki.debian.org/zh_CN/DontBreakDebian

