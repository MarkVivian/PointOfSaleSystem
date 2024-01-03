mod importingFiles; // this will turn the imported file to a part of the tree..
use importingFiles::being_imported; // this will allow us to access being_imported.
use importingFiles::random_value;

fn main() {
    // to print data to the terminal we use println! ..
    println!("Hello, world!");
   print!("{}",cool_function_and_print());
    variables_and_datatypes();
    arrays_and_objects();
    println!("the random value is {} and the function is {}", {random_value}, {being_imported(String::from("it works"), 32, 122)});
}

fn cool_function_and_print()->String{
    // we use fn to create functions..
    print!("this is soo cool");
    print!("will be on the same line");

    // when creating functions we use a snake case meaning values seperated with (_) underscore.

    // we can use either print or println..
    // the difference is that print does not create a new line while println creates a new line.
    println!(" this is soo cool");
    println!("will be on a new line");

    let name = "mark vivian";
    // to print out a value we use the {} to show their position.
    print!("the name {name} is so cool");
    println!("the name {} is soo cool", name);
    return String::from("this is to test the return value");
}
 

fn variables_and_datatypes(){
    // to set variables we use let command
    let name = "mark vivian";
    let mut nameCalled: String =String::from("lucas graman"); // similar to other string but more complex don't see myself using..
    // all the variables created are always immutable[cannot be changed] .

    // difference between STRING and &STR
    /* 
        String: This is a string type that is owned by Rust.
                 It is a growable, mutable, and UTF-8 encoded string.
                 It is stored on the heap and allows for dynamic manipulation like appending, concatenating, and modifying the content.

        &str (String slice): This is a reference to a string, usually a portion of a String or a string literal.
         It is an immutable view into a UTF-8 encoded string and is commonly used when you need to work with string references without owning the data.
    */
    
    // to make them mutable we use mut
    let mut age = 12;
    let gradeSum = 12.4;
    let learning = true;
    /* 
        i32 -> is used to represent intergerss..
        &str -> this is used to represent strings..
        bool -> is used to represent boolean...
        f64 -> is used to represent doubles/floats..

        the types are infered by the compiler...
    */
    println!("{name}{nameCalled}{age}{gradeSum}{learning}");
}

fn arrays_and_objects(){
    // arrays are fixed values meaning you have to specify the number..
    // due to the compiler giving itself the datatype you don't allways have to specify..
    let my_array = [1,2,3,4,5];
    // an array can only contain values of the same data type..

    // vector arrays are able to grow and shrink
    let mut my_vector_array = vec![1,2,3,4];
    my_vector_array.push(6);
    my_vector_array.push(5);
    println!("{}", my_vector_array[4]);

    // objects have a type/interface kind of thing from typescript
    struct objectExample{
        name : String,
        age : i32
    }

    let objectValues = objectExample{
        name : String::from("mark vivian"),
        age : 20
    };
    print!("{}", objectValues.age);

    let objectValuesArray : [objectExample; 3] = [
        objectExample {
            name: String::from("kylie wanjiku"),
            age : 12
        },
        objectExample {
            name: String::from("mary nyaguthii"),
            age : 22
        },
                objectExample {
            name: String::from("getrude koki"),
            age : 32
        },
    ];

    println!("{}", objectValuesArray[0].name);
}


fn for_if_while_loops(){
    // for loops
        // looping through the array
    let my_array = [1,2,3,4,5];
    for value in my_array {
        println!("the value is {}", value);
    }

        // looping through a range of values..
    for i in 1..=100 { // the 100 is included in the loop
        println!("the new value is {}", i);
    }

    // if loops
    if my_array[2] < 5 {
        println!("it is less than 5");
    }else{
        println!("it is greater than 5");
    }


    // while loops
    let mut value = 5;
    while value < 10 {
        value += 1;
    }
}