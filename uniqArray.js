/**
 * @Author:      xiaochang
 * @DateTime:    2015-07-16 15:55:50
 * @Email:    	 yuanchang201344@gmail.com
 */

function uniq(arr) {
	var newArr = [arr.shift()];
	for(var i=0,len=arr.length;i<len;i++){
		var flag = true;
		for(var j=newArr.length;j--;){
			if(newArr[j]===arr[i]){
				flag = false;
				break;
			}
		}
		if(flag)newArr.push(arr[i]);
	}

    return newArr;
}