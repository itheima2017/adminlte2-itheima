//localization example for daterang picker
//change moment.js language to French
//example taken from: http://momentjs.com/docs/#/i18n/changing-language/
 moment.lang('zh-cn', {
    months : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    weekdays : ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    weekdaysShort : ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    weekdaysMin : ["日", "一", "二", "三", "四", "五", "六", "日"],
    longDateFormat : {
        LT : "Ah点mm",
        L : "YYYY年MMMD日",
        LL : "YYYY年MMMD日",
        LLL : "YYYY年MMMD日LT",
        LLLL : "YYYY年MMMD日ddddLT"
    },
    calendar : {
        sameDay: "今天",
        nextDay: '明天',
        nextWeek: '下周',
        lastDay: '昨天',
        lastWeek: '上周',
        sameElse: 'L'
    },
    relativeTime : {
        future : "%s内",
        past : "%s前",
        s : "几秒",
        m : "1分钟",
        mm : "%d分钟",
        h : "1小时",
        hh : "%d小时",
        d : "1天",
        dd : "%d天",
        M : "1个月",
        MM : "%d个月",
        y : "1年",
        yy : "%d年"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
 });