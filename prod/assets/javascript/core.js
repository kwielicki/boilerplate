function browser() {
    var x = navigator.userAgent;
    var n = x.split(" ");
    var last = n.pop();
    if(last.includes("OPR") === true){
      alert("webkit");
    }
    else{
    alert(last);
  }
}
browser();
