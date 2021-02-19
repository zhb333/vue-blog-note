# 环境准备

**注意:** 如果你是 macOs 系统，需要先安装 xcode, 在 App store 中可以找到

## 一、安装 nvm

使用 [nvm] 作为 [Node.js] 的版本管理工具

[nvm] 没有提供 Windows 版本, Windows 系统的朋友可以使用 [nvm-windows]

### 1.1 macOs 或 Linux 安装 [nvm]

第一步：要安装或更新 [nvm]，可以使用以下 cURL 或 Wget 命令下载并运行脚本

**注意:** 下面命令中的`v0.37.2`是本人安装[nvm]时的最新版本，你在安装时，可以点击[Releases](https://github.com/nvm-sh/nvm/releases "nvm releases") 查看可用的 [nvm]版本

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

或

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

运行以上任一命令后。该脚本会将 [nvm] 存储库克隆到 `〜/.nvm`

第二步：添加 `Shell` 配置文件

我的 macOs 使用的`Shell` 终端是 `zsh`, 因此配置文件为 `~/.zshrc`  
CentOs 默认使用的 `Shell` 终端是 `bash`, 因此配置文件为 `~/.bashrc`

将以下源代码添加到正确的配置文件中

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

**注意:** 完成以上配置后需要重启终端

第三步: 验证是否安装成功

```sh
nvm --version
```

如果安装成功，将输出 [nvm] 的版本号 `0.37.2`

### 1.2 Windows 安装 [nvm-windows]

Windows 安装 [nvm-windows]的步骤比较简单，[nvm-windows] 提供了可以直接运行的可执行程序。

点击 [Releases](https://github.com/coreybutler/nvm-windows/releases "nvm-windows Release"), 查看可用的 [nvm-windows] 版本, 选择 `nvm-setup.zip` 进行下载，下载完毕并解压后双击`nvm-setup.exe`进行安装即可

## 二、nvm 的使用

安装 [Node.js]

```sh
nvm install <版本号>
```

如： 安装 `14.15.5` 的版本

```sh
nvm install 14.15.5
```

切换版本

```sh
nvm use <版本号>
```

罗列下载的版本

```sh
nvm ls
```

罗列远程版本

```ls
nvm ls-remote
```

## 三、 nrm 的安装与使用

> [nrm] 可以帮助您在不同的 npm 注册表之间轻松快捷地切换，现在包括：npm，cnpm，taobao，nj（nodejitsu）。

### 3.1 使用 npm 淘宝镜像源安装 [nrm]

复制并执行以下命令，全局安装 [nrm]

```sh
npm install -g nrm --registry=https://registry.npm.taobao.org
```

查看是否安装成功

```sh
nrm --version
```

如果安装成功，执行以上命令，将会输出[nrm]的版本号 `1.2.1`

### 3.2 [nrm] 的使用

查看所有可用的镜像源

```ls
nrm ls
```

切换镜像源, 本人实测国内"淘宝"的镜像源最快

```ls
nrm use taobao
```

**注意:** [nrm] 同时也管理着 [yarn] 的镜像源

## 四、安装 yarn

[nvm]: https://github.com/nvm-sh/nvm "nvm"
[node.js]: https://nodejs.org/zh-cn/ "Node.js"
[nvm-windows]: https://github.com/coreybutler/nvm-windows "nvm-windows"
[nrm]: https://github.com/nvm-sh/nvm "nrm"
[yarn]: https://yarn.bootcss.com/ "yarn"
