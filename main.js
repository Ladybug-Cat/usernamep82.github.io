var mouseEvent="empty";
var lastX,lastY;
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent=  "mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="teal";
        ctx.lineWidth=6;
        ctx.arc(currentX,currentY,50,0,2*Math.PI);
        ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent=  "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent=  "mouseleave";
}