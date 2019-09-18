let Apple = function (weight) {
    this.weight = weight;
    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    }
    this.decreaseApple = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.isEmpty = function () {
        if (this.weight == 0) {
            return true;
        } else {
            return false;
        }
    }
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.setName = function () {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }

    this.setGender = function () {
        this.gender = gender;
    }
    this.getGender = function () {
        return this.gender;
    }

    this.setWeight = function () {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    };

    this.speaking = function () {
        alert("is name:" + this.name + "is gender :" + this.gender + "weight: " + this.weight)

    };
    this.checkApple = function () {
        alert(apple.weight);
    };

    this.checkWeight = function () {
        alert(this.weight);
    };
    this.eatApple = function () {
        if (apple.weight> 0) {
            this.weight ++;
            apple.decreaseApple();
           // alert(this.weight);
        } else {
            alert("No more apple to eat")
        }

    }

};
let apple = new Apple(10);
let adam = new Human('Adam', 'Male', 55);
let eva = new Human('Eva', 'Female', 45);

function speaking(human) {
    human.speaking();
}

function eatApple(human){
    human.eatApple();
}


function checkApple(human) {
    human.checkApple();
}
function checkWeight(human) {
    human.checkWeight();

}

function check(name) {
    name.getWeight();
    alert(name.getWeight());

}