pub fn being_imported(value: String, a : i32, b: i32)->i32{
    println!("this is soo cool since im being imported");
    println!("the value is {}", value);
    let value:i32 = a + b;
    return value;
}

pub const random_value:i32 = 42; // this is a simple way of creating one constant and reusing it multiply everywhere...