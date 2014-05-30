/**
 * Dotdotanim.
 * 
 * Copyright 2014 Nickolas Whiting <prggmr@gmail.com>
 */
$.fn.dotdotanim = function(string, interval) {
    if (typeof interval === 'undefined') interval = 50;
    var dots = '.'
    var ele = $(this);
    ele.html(string)
    var check = [string, string + '.', string + '..', string + '...'];
    var replace_interval = setInterval(function(){
        if (check.indexOf(ele.html()) < 0 || ele.is(':hidden')) {
            clearInterval(replace_interval);
            return false;
        }
        dots = ((dots == '...') ? '' : (dots + '.'));
        ele.html(string + dots)
    }, interval)
    return $(this);
}
