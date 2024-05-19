for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  function BuyCar(car) {

    if(car == 1)
    {
      carName = "BMW M4";
    }
    else if(car == 2)
    {
      carName = "Mercedes-BenzAMG GT";
    }
    else if(car == 3)
    {
      carName = "BMW i8";
    }
    else if(car == 4)
    {
      carName = "Rimac c two";
    }
    else if(car == 5)
    {
      carName = "Ferrari Enzo"
    }
    else if(car == 6)
    {
      carName = "Bugatti la voiture noire"
    }

    let purchasedCar = confirm("Do you want to purchas " + carName)

    if(purchasedCar){
      alert("Congratulations you have purchased " + carName);
    }
    else{
      alert("Sad that you did not purchas " + carName)
    }
  }