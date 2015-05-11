//Assign some variables and load images
function ImageObject(img, x_coord, y_coord,width,height) {

    this.name = name;
    this.img = img;
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.width = width;
    this.height = height;

    this.draw = function() {
        context.drawImage(this.img, this.x_coord - this.width / 2, this.y_coord - this.height / 2, this.width, this.height);
    }

}

var Option_1 = new Image();
Option_1.src = "js/HappyFace.png";
var Option_2 = new Image();
Option_2.src = "js/SadFace.png";
var Question = new Image();
Question.src = "js/QuestionImage.png";
var Wrong_Answer = new Image();
Wrong_Answer.src = "js/WrongAnswer.png";
var Correct_Answer = new Image();
Correct_Answer.src = "js/CorrectAnswer.png";

var ImageObjectArray = new Array();

ImageObjectArray.push(new ImageObject(Option_1, 700, 600,150,150));
ImageObjectArray.push(new ImageObject(Option_2, 400, 600, 150, 150));
ImageObjectArray.push(new ImageObject(Question, 700, 300, 150, 150));
ImageObjectArray.push(new ImageObject(Wrong_Answer, 300, 300, 150, 150));
ImageObjectArray.push(new ImageObject(Correct_Answer, 100, 800, 150, 150));


var SelectedObject = null;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

setInterval(function DrawLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < ImageObjectArray.length; i++) {
            ImageObjectArray[i].draw();
        }
    
}, 60);



function CheckIfAboveObject(x,y) {

    

    for (var i = 0; i < ImageObjectArray.length; i++) {
        if (ImageObjectArray[i].x_coord - ImageObjectArray[i].width / 2 <= x &&
            ImageObjectArray[i].x_coord + ImageObjectArray[i].width/2 >= x &&
            ImageObjectArray[i].y_coord - ImageObjectArray[i].height / 2 <= y &&
            ImageObjectArray[i].y_coord + ImageObjectArray[i].height/2 >= y) {

            return ImageObjectArray[i];
            break;

        }
    }
   
}
function PointerEventsDemo() {

    


   

   
        // Pointer events are supported.
        canvas.addEventListener("pointermove", touchMove, false);
        canvas.addEventListener("pointerdown", touchStart, false);
        canvas.addEventListener("pointerup", touchUp, false);
    
    

        function touchStart(e) {
            SelectedObject = null;
            SelectedObject = CheckIfAboveObject(e.clientX, e.clientY);
        if (SelectedObject) {
            SelectedObject.x_coord = e.clientX;
            SelectedObject.y_coord = e.clientY;
        }
    }

    function touchMove(e) {
       
        if (SelectedObject) {
            SelectedObject.x_coord = e.clientX;
            SelectedObject.y_coord = e.clientY;
        }
    }

    function touchUp() {
        SelectedObject = null;
    }

        
    
}
PointerEventsDemo();
