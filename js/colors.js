var Body = {
    setActiveColor:function(color){
        // active.style.color = color; // id=active 색상 변환
        $('#active').css('color', color);
    },
    setColor:function(color){
        // document.querySelector('body').style.color= color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a'); //반복문, 조건문을 통한 링크 태그 색 변환
        // var i = 0;
        // while(i < alist.length){
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i = i + 1;
        //     }
        $('a').css('color', color);
        }
    }
function nightDayHandler(self){
    //var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day'
        Links.setColor('powderblue');
        Body.setActiveColor('yellow');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night' 
        Links.setColor('darkblue');
        Body.setActiveColor('red');
        }
}