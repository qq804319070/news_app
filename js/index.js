$(function () {
    let news = {
        init(){
            function refreshRem() {
                let curWin = document.documentElement.clientWidth || document.body.clientWidth;
                let design = 750;
                document.documentElement.style.fontSize = 100 * curWin / 750 + 'px'
            }

            refreshRem();
            //监听窗口大小发生改变
            window.addEventListener('resize', refreshRem);

            $.ajax({
                url: 'http://api.iclient.ifeng.com/ClientNews?id=SYLB10,SYDT10&gv=5.4.0&os=ios&uid=8jWzrXDWQeep2Nw4AZYzmHxkbneHy4Fj',
                async: true,
                dataType: 'jsonp',
                success: function (result) {
                    console.log(result);
                    news.bindFocus(result);
                    news.bindList(result);

                }
            })
        },
        bindFocus(data){
          let str = document.getElementById('focus').innerHTML;
           let result = ejs.render(str,{data:data[1].item});
           $('.swiper-wrapper').html(result);
            let swiper = new Swiper('.swiper-container', {
                autoplay: 3000,
                loop:true,
                pagination : '.swiper-pagination',
                paginationType:'fraction',
            });
        },
        bindList(data){
            let str = document.getElementById('list').innerHTML;
            let result = ejs.render(str,{data:data[0].item})
            $('.list').html(result)
        }

    };

    news.init()


});