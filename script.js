//your code here!
let list = document.getElementById("infi-list");
let count = 1;

function addItem(nums) {
	for(let i=0; i<nums; i++){
          let li = document.createElement("li");
		li.innerText = "Item "+count;
		list.appendChild(li);
		count++;
	}
}

addItem(10);

list.addEventListener("scroll", function(){

let scrollTop = list.scrollTop;
let visibleHeight = list.clientHeight;
let fullHeight = list.scrollHeight;

if(scrollTop + visibleHeight >= fullHeight - 5){

addItem(2);

}

});
