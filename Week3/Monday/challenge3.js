function outer(){
  var a = "this is variable a";
  var b = { name: "Object b"};
  
  console.log(a);
  console.log(b);

  function inner(a, b) {
    a = "this is the inner a"
    b = { name: "this is the innber b" };
    console.log(a);
    console.log(b);
  }

  inner(a, b);

  console.log(a);
  console.log(b);
}

outer();