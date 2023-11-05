a();

function a() {

    var ax = 1;

    b();

    function b() {

        var bx = 2;

        c();

        function c() {

            var cx = 3;

            d();

            function d() {

                console.log(cx);

                console.log(bx);

                console.log(ax);

                console.log(x);
            }

            console.log(bx);

            console.log(ax);

            console.log(x);
        }

        console.log(ax);

        console.log(x);
    }

    console.log(x);
}

var x = 0;

//! Below code leads to error

// a();

// function d() {

//     console.log(cx);

//     console.log(bx);

//     console.log(ax);

//     console.log(x);
// }

// function c() {

//     var cx = 3;

//     d();

//     console.log(bx);

//     console.log(ax);

//     console.log(x);
// }

// function b() {

//     var bx = 2;

//     c();

//     console.log(ax);

//     console.log(x);
// }

// function a() {

//     var ax = 1;

//     b();

//     console.log(x);
// }