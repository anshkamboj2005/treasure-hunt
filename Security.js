class Security {
    constructor(){

        this.access1 = createInput("code1");
        this.access1.position(100,90);
        this.access1.style('background','white');

        this.button1 = createInput("check");
        this.button1.position(100,120);
        this.button1.style('background','lightgray');

        this.access2 = createInput("code1");
        this.access2.position(700,190);
        this.access2.style('background','white');

        this.button2 = createInput("check");
        this.button2.position(700,220);
        this.button2.style('background','lightgray');

        this.access3 = createInput("code1");
        this.access3.position(100,350);
        this.access3.style('background','white');

        this.button3 = createInput("check");
        this.button3.position(100,380);
        this.button3.style('background','lightgray');
    }

    display(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
          
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
    }


}