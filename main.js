// 搜尋a元素
// 取得每個a元素資料
$("a").each(function (index, element) {
   
    //console.log("編號 : " + index);

    var target = $(this).attr("data-st-target");

    var duration = $(this).attr("data-st-duration");

    var offsetTop = $(this).attr("data-st-offset");

    //console.log("目標 : " + target);
    //console.log("時間 : " + duration);
    //console.log("位移 : " + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;
    var left = offset.left;

    // 上方 扣除 上方位移
    // top = top - offsetTop; //原始寫法
    if (offsetTop) top -= offsetTop          //簡寫
    
    //console.log("上方 : " + top );

    $(this).click(function (e) { 
        e.preventDefault();
        $("html").stop().animate({
            scrollTop: top
        },parseInt(duration))
    });
    
});



// 使用者滑鼠滾動時 停止所有動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow")
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () { 
   var windowTop = $(this).scrollTop();
   console.log("視窗的上方:" + windowTop)

   var arrowTop = arrow.attr("data-st-top");
   var arrowTime = arrow.attr("data-st-time");
   var arrowTimeInt = parseInt(arrowTime); //將時間轉為數字(整數)

   //console.log(arrowTop)
   //console.log(arrowTime)


   //如果 視窗位置 大於等於 箭頭上方 就 淡入
   if(windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
   //否則就淡出
   else arrow.stop().fadeOut(arrowTimeInt)
});
