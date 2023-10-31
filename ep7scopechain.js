function a() {

    var x = 10;

    c();

    function c() {

        console.log(x);
    }

}

var b = 10;

a();
