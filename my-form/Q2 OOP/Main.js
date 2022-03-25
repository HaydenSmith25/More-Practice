/*In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
● He can open and close his mouth as he wishes.
● Nobody can force a man to open/close his mouth.
● A doctor can ask a man to open/close his mouth and a man will do so.
● He refuses anyone else who asks him to open/close his mouth other than doctors */

/* Use OOP Designs to make needed classes with methods to meet those requirements. You can use any language or
pseudo-code to write down your results. */

//variable for open
//variable for close
//variable for the man
//variable for the doctor
/*Thoughts: think about the relationship between a man instance,
 a doctor instance, and what's "his" or prop/method of man/self vs doctor and how to ask/respond (methods).
 verb == method || noun == property
 Man's instance properties would be his mouth. Instance methods would be open and close.
 Doctors properties would be the doctor himself (man only respods to doctors). Method would be him asking to open/close the mans mouth.

 Ideally the man can open and close his mouth at his own will and he refuses anyone who asks him to open/close his mouth who isn't a Docotor.
 So we would need some type of maybe method to check IF whoever is asking the man to open his mouth IS a doctor or not. 
 IF it is a Doctor, the man will open/close to his command. ELSE he will refuse. 
 */

//My thinking was to have 4 different classes
//one for the Mouth with the methods of open and close.
class Mouth {
  constructor() {
    this.open = "AHHHHHHH";
    this.close = "MMMMMMM";
  }
}

class Man extends Mouth {
  //Class for the Man that inherits the mouth methods.
  //Then we would have some type of function call to validate requests to check IF they are a Doctor or just anyone.
  //If they are a doctor, Man would then open or close based off the command.
}

class Doctor {
  //Doctor class should be able to identify himself as a doctor.
  //i.e. if the man asks 'are you a doctor?' he'd respond with YES.
  //This would then allow the Doctor to make requests of open/close your mouth.
}

class EveryoneElse {
  //Class might not be needed or might be redundant
  //Initial thought it could be here to ask the man if he'd open his mouth and he'd refuse.
  //So ya that would basically be the purpose for this class.
  //Man asks 'are you a doctor?' response would be NO, Man responds with 'Then I will not open my mouth!'
}
