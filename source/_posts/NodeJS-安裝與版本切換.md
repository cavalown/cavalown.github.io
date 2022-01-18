# NodeJS: 安裝與版本切換
###### tags: `Node.js`


要安裝Node有兩種方式
- 官網下載，直接安裝。
[官網下載頁面](https://nodejs.org/zh-tw/download/)
- 透過nvm(Node的版本管理工具)來安裝。

:::info
建議使用nvm安裝，因為可以很輕鬆的轉換多個版本的node，會方便許多。
:::

## 安裝nvm
首先要先安裝nvm，再藉由nvm安裝需要的node版本。
[官方安裝教學](https://github.com/nvm-sh/nvm#installing-and-updating)

- 下載NVM
```bash=
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | b
```
- 設定NVM的環境變數
```bash=
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- 啟動(根據環境)
```bash=
# bash環境
source ~/.bashrc

# zsh環境
source ~/.zshrc
```

## 版本管理
- 列出可安裝的node版本
```bash.nvm=
nvm ls-remote
# 檢視有長期支援的版本
nvm ls-remote --lts
```
- 檢視現有環境已安裝的node版本
```bash.nvm=
nvm ls
```
![nvm ls 範例圖片](https://i.imgur.com/cZeJuhe.png =210x208)

- 安裝指定版本的node
```bash.nvm=
nvm install version-number

# 例如：
nvm install 12.22.9
```
- 快速使用特定版本node
```bash.nvm=
nvm use version-number
# 例如：
nvm use 12.22.9
```
:::danger
這是指定當下的shell使用版本，若關閉shell或是另外開啟其他的shell，將會使用預設版本的node。
:::
- 設定預設的node為特定版本
```bash.nvm=
nvm alias default version-number
# 例如：
num alias default 12.22.9
```
可以再次使用`nvm ls`檢查預設的版本是否設定完成。