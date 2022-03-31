---
title: Python - Guess The Number
tags: Python
date: 2022 01 15
---
<!-- # Python : Guess The Number
###### tags: `Python` -->

## 不急著寫程式，我們先來思考一下
對於初學者來說，猜數字常常是學習判斷式(if...else...)和迴圈(while)很常遇到的題目。
我其實很建議在遇到題目的時候不要一股腦的去寫程式，而是先思考，這個遊戲的使用者面對的"狀況"和會有的"行為表現"，還有程式應該如何佈建好"場景"來應付使用者的行為。

講到這裡，對初學者來說應該還是非常的模糊！

不就是寫寫程式嗎，為什麼要思考這麼多呢？

因為不管是什麼程式，都是為了達成"特定目標"去設計的，然而這條路上往往是非常曲折，你預想是A，但有可能就是會出現B、C、D.....等層出不窮的可能性，這些可能性其實就和使用者的行為有很大的關聯性！

舉例來說，「我要去全聯買義美無糖豆漿。」這個任務，看起來很簡單就是要去全聯買豆漿而已啊，但就這句話就可以拆解出好多個可能性！像是：
>1. 我要怎麼去呢 -> 開車嗎？騎車？走路？還是？
>2. 要去哪一家呢 -> 可能我家附近有兩家，一家比較近但很難停車；一家比較遠但很多停車格。

到了全聯可能又會出現一些狀況，像是：
>3. 義美無糖豆漿沒了 -> 不買？買替代品？
>4. 替代品有 -> 義美低糖豆漿？統一無糖豆漿？

以上是有順利到達全聯的情況，萬一我中途出了車禍呢？



哇！有沒有發現～原來人腦真的比電腦厲害，可以處理這麼多情況呢！
感嘆完人類的腦，那現在我們就來拆解"猜數字"這個遊戲吧！

--- 

## 猜數字怎麼玩
簡單的說，就是讓使用者猜中預計的答案，不管猜得比答案大或小都會提示接下來猜的方向。
那我們就會需要
>A. 答案
>B. 使用者猜的數字

這裡我們要先思考該怎麼決定這個答案呢？只要是數字就可行了嗎？
理論上來說，只要是數字都是可以讓這個遊戲被執行的，但如果我們沒有讓數字有範圍的限制，
有可能會出現23456789087654321或是-22222222244444這樣的數字，這樣真的比中威力彩和大樂透頭獎還要困難啊！

所以我們來幫遊戲加一點限制吧！我們預計讓答案介於1~100之間。
>A. 答案：1~100

那使用者的答案呢？只要告訴他們`猜在1~100之間`就可以了吧？！
理想總是很性感，現實總是很骨感啊！
你應該曾經有輸入帳號密碼輸錯誤的經驗吧？
人就是會手殘啊！！！！！！！！！！！！！！

另外，有沒有可能有些人就是硬要輸入不符合範圍的數字呢？`我要輸入-100，你要打我嗎？`
有沒有可能有人更誇張，`老子就是硬要輸入英文，你奈何得了我嗎？`

所以！我們也必須幫使用者的輸入做一些限制！
>B. 使用者猜的數字：1~100, 只能數字不能是文字或其他符號！

太好了！我們有了基礎的條件，可以試著寫寫看程式了。

--- 

## 程式碼
### 指定變數給答案和使用者猜的數字
```python=
import random

# 指定答案為1~100之間的整數
answer = random.randint(1,100)

# input接到的東西都會轉成string，所以使用int()轉成數字。
userGuess = int(input("請輸入你的數字(1~100):"))
```
### 處理使用者輸入非數字的錯誤情形
試著執行程式並且輸入任意的文字(example: apple)，會出現類似下面的錯誤訊息：
`
ValueError: invalid literal for int() with base 10: 'apple'
`
這是因為'apple'是字串，沒辦法轉成數字形式！
這時候我們可以使用"try...except..."，來幫助我們處理這些例外的情況！

```python=
import random

answer = random.randint(1,100)

try:
    userGuess = int(input("請輸入你的數字(1~100):"))
# 把錯誤情況抓出來，並指示在這樣的情況如何因應。這裡是提示使用者要輸入數字。
except ValueError as err:
    print("請輸入數字！")
```
### 判斷是否猜中數字
```python=
import random

answer = random.randint(1,100)
print("答案是", answer)

try:
    userGuess = int(input("請輸入你的數字(1~100):"))
    if userGuess == answer:
        print("恭喜～猜對了！")
    elif userGuess > answer:
        print("猜太大了！")
    else:
        print("猜太小了！")
except ValueError as err:
    print("請輸入數字！")
```
這裡使用了if...elif...else來做為判斷猜的數字和答案的大小關係。
另外加入了`print("答案是", answer)`，來觀察是不是有正確判斷，可以在確認後刪除。

### 使用迴圈讓使用者可以多次輸入數字
沒錯，現在可以正確判斷使用者是不是輸入數字了！那我們加上迴圈，讓使用者可以不斷的輸入數字吧！
```python=
import random

answer = random.randint(1,100)

while True:
    try:
        userGuess = int(input("請輸入你的數字(1~100):"))
        if userGuess == answer:
            print("恭喜～猜對了！")
            break
        elif userGuess>100 or userGuess<1:
            print("請輸入介於1~100的數字")
        elif userGuess > answer:
            print("猜太大了！")
        else:
            print("猜太小了！")
    except ValueError as err:
        print("請輸入數字！")
```
在這裡有幾個需要注意的地方:
1. 為避免使用者輸入的數字超過我們設定的範圍，所以才需要設定 `elif userGuess >100 or userGuess<1`
2. 請注意，if 判斷是都是從上而下作判斷，在這裡`elif userGuess >100 or userGuess<1`必定要擺在`elif userGuess > answer`之前。不然會出現因為**userGuess同時大於answer和100的狀況時**，因為先判斷了userGuess>answer，而只提示`"猜太大了！"`，卻沒有發現使用者輸入的數字根本不符合規定的數字區間。
3. 在猜對的地方加入了`break`，可以終止迴圈，也就是 ~~蓋上一張牌~~ 結束這回合。


### 給使用者更加具體的提示
如果你已經學會並且可以完成上面的步驟，你已經有基本的判斷式和迴圈概念，接下來要準備進階一點點了！
我們希望能在使用者猜出比答案大或是小的數字同時，給予使用者新的猜測區間。
也就是說，我們要讓猜測的結果去改變(取代)原本的數字區間上限100和下限1。
```python=
import random

answer = random.randint(1,100)

# 假定最大數字為100，最小數字為1
bottomNumber = 1
topNumber = 100

while True:
    try:
        userGuess = int(input(f"請輸入你的數字{bottomNumber}~{topNumber}:"))
        if userGuess == answer:
            print("恭喜～猜對了！")
            break
        elif userGuess>topNumber or userGuess<bottomNumber:
            print(f"請輸入介於{bottomNumber}~{topNumber}的數字")
        elif userGuess > answer:
            print("猜太大了！")
            topNumber = userGuess - 1
            print(f"請輸入你的數字{bottomNumber}~{topNumber}:")
        else:
            print("猜太小了！")
            bottomNumber = userGuess + 1
            print(f"請輸入你的數字{bottomNumber}~{topNumber}:")
    except ValueError as err:
        print("請輸入數字！")
```
這樣，就完成了不斷更新topNumber和bottomNumber！

恭喜，你完成一個很棒的遊戲喔！

--- 

最後再補上個小東西，鬧一下！不加上也是沒關係的唷！
```python=
import random

answer = random.randint(1,100)

# 假定最大數字為100，最小數字為1
bottomNumber = 1
topNumber = 100

while True:
    try:
        if bottomNumber == topNumber:
            print(f"別鬧了，答案只剩下：{topNumber}")
            break
        userGuess = int(input(f"請輸入你的數字{bottomNumber}~{topNumber}:"))
        if userGuess == answer:
            print("恭喜～猜對了！")
            break
        elif userGuess>topNumber or userGuess<bottomNumber:
            print(f"請輸入介於{bottomNumber}~{topNumber}的數字")
        elif userGuess > answer:
            print("猜太大了！")
            topNumber = userGuess - 1
            print(f"請輸入你的數字{bottomNumber}~{topNumber}:")
        else:
            print("猜太小了！")
            bottomNumber = userGuess + 1
            print(f"請輸入你的數字{bottomNumber}~{topNumber}:")
    except ValueError as err:
        print("請輸入數字！")
```