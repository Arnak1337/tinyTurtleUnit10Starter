TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(size){
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
}

function rectangle(size){
left(90);
forward(size);
left(90);
forward(size);
left(90);
forward(size);
left(90);
forward(size);
}
// Type your function call below
square();
rectangle(70);
triangle(80);
stamp();
