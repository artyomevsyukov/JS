const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        this.level++;

        if (this.level > 5) {
            console.log("Студент выучил все технологии!");
        } else {
            switch (this.level) {
                case 2:
                    this.stack.push("CSS");
                    console.log(this.stack);
                    break;
                case 3:
                    this.stack.push("JavaScript");
                    console.log(this.stack);
                    break;
                case 4:
                    this.stack.push("React");
                    console.log(this.stack);
                    break;
                case 5:
                    this.stack.push("NodeJS");
                    console.log(this.stack);
                    break;
            }
        }
        return this;
    },
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();
