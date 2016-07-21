var n = 0;
var imageLoader = document.getElementById('hold-upload');
var canvas = document.getElementsByTagName("canvas");

imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
		n++;
		//creat a new canvas	
		var canvas1 = document.createElement('canvas');
		//give it a dynamic class name
		canvas1.setAttribute('id','id-' + n);
		var dataURL =	canvas1.toDataURL("image/png")
		var ctx1 = canvas1.getContext('2d');
		//append it to the body 
		document.body.appendChild(canvas1);
		


		//Lets Read The File 
		var reader = new FileReader();
			reader.onload = function(event) {
				var img = new Image();
				img.onload = function() {
					canvas1.width = img.width;
					canvas1.height = img.height;
					ctx1.drawImage(img, 0, 0);
					var imgTag = canvas1.toDataURL("image/png");
          			  document.getElementById("image_" + n).value = imgTag;

				}
				img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]);
			var dataURL = canvas1.toDataURL();
			//clean out input 
			$("#hold-upload").val('');

	 	// lets create some inputs to hold data 
		var input1 = document.createElement('input');
		input1.setAttribute("type", "hidden");
		input1.setAttribute("name", "image_"+ n);
		input1.setAttribute("id", "image_" + n);
		document.getElementById('target').appendChild(input1);	
 
} //end function

  


$("#target").submit(function(e) {
	e.preventDefault();
	var tempgroup = $("#hold-group").val();
	$("#group").val(tempgroup);
	$(this).off('submit').submit();
});

