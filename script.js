var arr = [1,5,7,20,35,45,70];
var size = arr.length;

function binSearch(nums, l, s, find){
	if(s>=1){
		var mid = l + Math.floor((s - l)/2);
	}
	if(arr[mid] === find){
		return mid;
	} else if(arr[mid] < find){
		return binSearch(nums, mid+1, s, find);
	} else {
		return binSearch(nums, l, mid-1, find);
	}
	return -1;
}

var results = binSearch(arr, 0, size-1, 7) + " <-position";
$(document).ready(function(){
	$("#output").text(results);
});