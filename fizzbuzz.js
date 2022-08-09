for ( let i = 1; i <= 100; i++ ){

    if (  i % 3 == 0 && i % 5 == 0   ) {
        console.log("FizzBuzz");
    } else if ( i % 3 == 0 ) {
        console.log( "Fizz" );
    } else if ( i % 5 == 0 ) {
        console.log( "Buzz" );
    } else if ( i % 7 == 0) {
        console.log("Bang");
    } else if (i % 11 == 0 ){
        console.log("Bong");
    }else if( i % 13 == 0 ) {
        console.log("Fezz");
    } else {
        console.log(i);
    }

}

