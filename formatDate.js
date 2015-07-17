// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五 
// 输入例子:
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
// 输出例子:2014-09-05 13:14:20 星期五


function formatDate(oDate, sFormation) {
	
	var dayList = ['日', '一', '二', '三', '四', '五', '六'];

    sFormation = /y/.test(sFormation)&&sFormation.match(/y/g).length>2?
    	sFormation.replace(/y+/g,oDate.getFullYear()):
    	sFormation.replace(/y+/g,oDate.getFullYear().toString().slice(2));

    sFormation = /M/.test(sFormation)&&sFormation.match(/M/g).length>1&& oDate.getMonth()<9?
    	sFormation.replace(/M+/g,'0'+(oDate.getMonth()+1)):
    	sFormation.replace(/M+/g,oDate.getMonth()+1);


    sFormation = /d/.test(sFormation)&&sFormation.match(/d/g).length>1&& oDate.getDate()<9?
    	sFormation.replace(/d+/g,'0'+oDate.getDate()):
    	sFormation.replace(/d+/g,oDate.getDate());

    sFormation = /h/i.test(sFormation)&&/H/g.test(sFormation)?
		(sFormation.match(/H/g).length>1 && oDate.getHours()<9?
			sFormation.replace(/H+/g,'0'+oDate.getHours()):
    		sFormation.replace(/H+/g,oDate.getHours())):
		(sFormation.match(/h/g).length>1?
			(oDate.getHours()<9||oDate.getHours()>12?
				sFormation.replace(/h+/g,'0'+oDate.getHours()%12):
				sFormation.replace(/h+/g,oDate.getHours())):
			(oDate.getHours()>12?
				sFormation.replace(/h+/g,oDate.getHours()%12):
				sFormation.replace(/h+/g,oDate.getHours())));

    sFormation = /m/.test(sFormation)&&sFormation.match(/m/g).length>1&&oDate.getMinutes()<9?
    	sFormation.replace(/m+/g,'0'+oDate.getMinutes()):
    	sFormation.replace(/m+/g,oDate.getMinutes());

    sFormation = /s/.test(sFormation)&&sFormation.match(/s/g).length>1&&oDate.getSeconds()<9?
    	sFormation.replace(/s+/g,'0'+oDate.getSeconds()):
    	sFormation.replace(/s+/g,oDate.getSeconds());

    sFormation = sFormation.replace(/w/g,dayList[oDate.getDay()]);


    return sFormation;

}