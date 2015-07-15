/**
 * User : YuanChang<yuanchang201344@gmail.com>
 * Date : 2015/7/10.
 * Time : 22:25
 */

function　thousands(num){
    a = num;
    num = num.toString();   //将输入的数字转换为字符串

    if(/^-?\d+\.?\d+$/.test(num)){  //判断输入内容是否为整数或小数
        if(/^-?\d+$/.test(num)){    //判断输入内容是否为整数
            num =num + ",00";   //将整数转为精度为2的小数，并将小数点换成逗号
        }else{
            num = num.replace(/\./,',');    //将小数的小数点换成逗号
        }

        while(/\d{4}/.test(num)){ //
            /***
             *判断是否有4个相连的数字，如果有则需要继续拆分，否则结束循环；
             *将4个相连以上的数字分成两组，第一组$1是前面所有的数字（负数则有符号），
             *第二组第一个逗号及其前面3个相连的数字；
             * 将第二组内容替换为“,3个相连的数字，”
             ***/
            num = num.replace(/(\d+)(\d{3}\,)/,'$1,$2');
        }

        num = num.replace(/\,(\d*)$/,'.$1');   //将最后一个逗号换成小数点
    }
}