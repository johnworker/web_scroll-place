# web_scroll-place
網頁 捲動到指定地點

# 範例
https://johnworker.github.io/web_scroll-place/

# 使用方式
## 連結CDN
將 CDN 放在 body 結束標籤前
https://johnworker.github.io/web_scroll-place/main.js

範例：
```
<script src="https://johnworker.github.io/web_scroll-place/main.js"></script>
```

## 捲動說明
屬性名稱 | 屬性說明
-------------- | --------------
data-st-target | 要前往元素的ID名稱
data-st-duration | 捲動所花的時間(毫秒)
data-st-offset | 位移的大小

範例：

```
<a href=""data-st-target="area3" data-st-duration="900" data-st-offset="100">
```

## 箭頭說明
返回頂端的箭頭必須添加 ID arrow
屬性名稱 | 屬性說明
-------------- | --------------
 data-st-top | 箭頭要出現的高度 
 data-st-time | 特效的持續時間 

 範例：
 
 ```
 <a id="arrow" data-st-target="top" data-st-duration="800" data-st-top="300" data-st-time="1000"></a>
 ```