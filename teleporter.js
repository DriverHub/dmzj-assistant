function teleport_start(){
    var prev = $('#prev_chapter');
    if(prev){
        var result = prev;
        var target = result.attr('href');
        var prev_target;
        var rollover = function(){
            $.get(target).done( function( data ){
                prev_target = target;
                result = $(data).find('#prev_chapter');
                target = result.attr('href');
                if(target){
                    console.log(result.text()+' found');
                    rollover();
                }else{
                    console.log('It has reached the end.');
                    setTimeout(function(){
                        location.assign(prev_target);
                    }, 1000);
                }
            });
        };
        rollover();
    }
}

teleport_start();
