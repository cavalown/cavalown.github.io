---
title: Python版本管理-pyenv和virtualenv
tags: Python
date: 2022 08 03
---
MAC原生就有python2，為了使用python3，需要在電腦另外安裝。
安裝方式兩有兩種：
1. 直接電腦本地安裝python3-需指定版本。
2. 透過版本管理套件安裝 - **`pyenv`**

## 安裝 pyenv
```bash=
brew install pyenv
```
要設定安裝相關環境變數，先看shell使用的是bash還是zsh，
將下面貼入`.bashrc`或是`.zshrc`
```bash=
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```
接著執行.bashrc或.zshrc
```bash=
source ~/.bashrc
source ~/.zshrc
```

## 安裝不同版本python

### 查看可以安裝的python版本號
```bash=
pyenv install -l
```
### 安裝指定版本的python
```bash=
pyenv install 3.6.19
```

### 查看使用pyenv安裝的python版本
```bash=
pyenv versions
```

## Python版本指定
### 當前shell指定版本
```bash=
pyenv shell <version>
# 檢查shell版本
pyenv shell
```
### 個別專案指定版本
```bash=
cd <專案夾>
pyenv local <version>
# 檢查專案版本
pyenv local
```
### 全域版本
```bash=
pyenv global <version>
# 檢查全域版本
pyenv global
```

## 虛擬環境建立
在這裡使用`vertualenv`管理。
### 安裝virtualenv
```
pip install virtualenv
```
> 這裡的安裝是全域的。

### 建立虛擬環境
```bash=
cd <專案夾>
virtualenv venv
```
> 在這裡`.venv`是虛擬環境的檔案夾名稱，可以自訂。


### 使用python原生的方式建立虛擬環境
```bash=
python -m venv venv
```
> 這裡第二個venv是虛擬環境的檔案夾名稱，可以自訂。


## 啟動專案
```bash=
cd <專案夾>
source venv/bin/activate
```
> terminal進入python環境，這時候就可以透過pip進行套件安裝。
>這裡的安裝是在專案裡面的

## 套件版本紀錄
### 在啟動的python環境中
```bash=
pip freeze > requirement.txt
```
