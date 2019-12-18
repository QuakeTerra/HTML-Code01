dog_site= {};

dog_site.init = function(){
    dog_site.dog = document.getElementById("dog");
    dog_site.pet_count = document.getElementById("petcount");
    dog_site.pets = 0;
    dog.addEventListener("mousedown", dog_site.mousedown);
    dog.addEventListener("mouseup", dog_site.mouseup);
    dog_site.loop();
}

dog_site.mousedown = function(){
    dog_site.dog.src = "https://lh3.googleusercontent.com/XP8SXAX0bZMh7o6rHKiIrbfSSdJQPAN_iyex3GUCbuos21lLF5JgyQsyHY7wDT8uTCi-Mw=s90"
    dog_site.clicks++;
    if (dog-dog_site.clicks < 10) {
        dog._site.dog.className += " clicked";  
    }
    dog_site.click_count.className +="clicked";
}

dog_site.mouseup = function(){
    dog_site.dog.src = "data:image/jpeg;base64,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";
    dog_site.dog.className -= "clicked";
    dog_site.click_count.classname -= "clicked";
}

dog_site.loop = function() {
    dog_site.click_count.innerHTML = dog_site.pets;
  setTimeout(dog_site.loop, 1000 / 60);


  if (dog_site.pets > 10) {
    dog_site.dog.style.animation = "spin " + 50 / dog_site.pets + "s linear infinite";
  }

}

window.onload = function() {
    dog_site.init();
  }
