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
    - 这个可以结合 rofi 来实现系统剪切板，然后后续还可以再自定义，然后实现多设备剪切板同步
    - 注意，如果启用这个可以添加到用户服务中；并且注意需要禁用 `fcitx5-clipboard`，否则会冲突
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
- wrk: A command-line tool for generating and managing workspaces.
    - `sudo apt install wrk`
    - `wrk --help` for usage
- duf: A disk usage utility that provides a more user-friendly output than the traditional `df` command.
    - `sudo apt install duf`
    - `duf --help` for usage
- bat: A cat clone with syntax highlighting and Git integration.
    - `sudo apt install bat`
    - `bat --help` for usage
- eza: A modern replacement for `ls` with more features and better defaults.
    - `sudo apt install eza`
    - `eza --help` for usage
- just: A command runner that helps you write and run commands in a more organized way.
    - `sudo apt install just`
    - `just --help` for usage
- caddy: Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS
    - https://github.com/caddyserver/caddy
- aria2: A lightweight and fast download utility that supports multiple protocols.
    - `sudo apt install aria2`
    - `aria2c --help` for usage
- network-tools:
    - wireshark
    - tshark
    - tcpdump
    - iftop
    - nethogs
    - nload
    - bmon
    - slurm
- lftp: A sophisticated file transfer program that supports a number of network protocols.
    - `sudo apt install lftp`
    - `lftp --help` for usage
- wmctrl: A command-line tool to interact with an X Window Manager.
    - `sudo apt install wmctrl`
    - `wmctrl --help` for usage
- iotop: A top utility for IO
- fpsync: To demonstrate fpart possibilities, a program called 'fpsync' is
  provided within the tools/ directory. This tool is a shell script that wraps
  fpart(1) and rsync(1), cpio(1), pax(1) or tar(1) to launch several
  synchronization jobs in parallel as presented in the previous section, but
  while the previous example used GNU Parallel to schedule transfers, fpsync
      provides its own -embedded- scheduler. It can execute several
      synchronization processes locally or launch them on several nodes
      (workers) through SSH.
    - `sudo apt install fpart`


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
- vegeta: `wget https://github.com/tsenart/vegeta/releases/download/v12.12.0/vegeta_12.12.0_linux_amd64.tar.gz;tar -xzf vegeta_12.12.0_linux_amd64.tar.gz;sudo mv vegeta /usr/local/bin/`
- mc: minio client
    - `wget https://dl.min.io/client/mc/release/linux-amd64/mc;sudo mv mc /usr/local/bin/`
    - `mc alias set myminio http://localhost:9000 YOUR_ACCESS_KEY YOUR_SECRET_KEY`
- xan: The CSV magician [https://github.com/medialab/xan]
    - install: `cargo install xan --locked`
- rclone: A command-line program to manage files on cloud storage.
    - `curl https://rclone.org/install.sh | sudo bash`
    - `rclone config` to configure
- duckdb: DuckDB is an analytical in-process SQL database management system
    - `curl https://install.duckdb.org | sh`
- dasel: Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package.
    - `go install github.com/tomwright/dasel/v2/cmd/dasel@master`
    - or
    - > `curl -sSLf "$(curl -sSLf https://api.github.com/repos/tomwright/dasel/releases/latest | grep browser_download_url | grep linux_amd64 | grep -v .gz | cut -d\" -f 4)" -L -o dasel && chmod +x dasel`
      > 
      > `mv ./dasel /usr/local/bin/dasel`
- zoxide: A smarter cd command that learns your habits and helps you navigate your filesystem faster.
    - `curl -sS https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh`
    - `sudo apt install zoxide`
    - set up for shell: 
      - for bash: `eval "$(zoxide init bash)"`
      - for zsh: `eval "$(zoxide init zsh)"`
      - for fish: `zoxide init fish | source`
- zed: A next-generation text editor for programmers.
    - `curl -f https://zed.dev/install.sh | sh`
- atom: A hackable text editor for the 21st Century.
    - `sudo snap install atom --classic`
- Sarasa Gothic: 更纱黑体, a beautiful open-source font that supports both Chinese and Latin characters.
    - `https://github.com/be5invis/Sarasa-Gothic`
- Moonbitlang:
    - `https://moonbitlang.org/`
    - `curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash`


## compiled myself

- youtube-dl: https://github.com/ytdl-org/youtube-dl
    - make yourself
- yazi: 💥 Blazing fast terminal file manager written in Rust, based on async I/O.
    - https://github.com/sxyazi/yazi
- st-flexipatch: An st build with preprocessor directives to decide which patches to include during build time
    - https://github.com/bakkeby/st-flexipatch


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
- gio: GIO is a library that provides a modern and easy-to-use API for file I/O, network communication, and other system services.


## Blogs

### DontBreakDebian

> https://wiki.debian.org/zh_CN/DontBreakDebian

