class HQ9Interpreter {
  constructor() {
    this.queue = [];
    this.poem = "Hello hello hello";
    this.commandList = {
      "H": function (){
          console.log("hello world")
      },
      "Q": (programm) => {
        console.log(programm);
      },
      "9": () => {
        console.log(this.poem);
      },
      "+": (counter) => {
        counter++;
      },
    };
  }

  run(programm) {
    let counter = 0;
    for (let cmd of programm) {
      if (/H|Q|9|\+/.test(cmd) == true) {
        this.queue.push(cmd);
      } else {
        throw new Error(`${cmd} is not a command`);
      }
    }
    for (let command of this.queue){
        let cmd = command;
        if (cmd =="+"){
            this.commandList[String(cmd)](counter);
        }
        else{
            this.commandList[String(cmd)](programm);
        }
    }
    this.queue = [];
  }
}
const Interpreter = new HQ9Interpreter();
Interpreter.run("HQHQ+");
