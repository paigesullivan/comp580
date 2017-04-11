var hasGP = false;
var repGP;

function canGame(){
	return "getGamepads" in navigator;
}

// should we create all of the sound objects as global variables ? 

var pop_loop1 = new Howl({
    src: ['PopSounds/pop_loop1.wav']
});

var pop_drums1 = new Howl({
    src: ['PopSounds/pop_drums1.wav']
});

var pop_piano1 = new Howl({
    src: ['PopSounds/pop_piano1.wav']
});

var pop = false;
var hipHop = false;

function reportOnGamepad() {
        var gp = navigator.getGamepads()[0];

        if(gp.buttons[4].pressed){
            alert("You selected pop!");
           // var id1 = pop_loop1.play();
            pop = true;
            $("#header").html("You selected pop!");
            $("#prompt").html("");
            $("#options").html("");
            alert("changed");
            popSetup(gp);
        }
        if(gp.buttons[5].pressed){
            alert("You selected hip-hop!");
            hipHop = true;
        }
        if(gp.buttons[3].pressed){
            pop_loop1.stop();
        }
    }

function popSetup(gp) {

}


$(document).ready(function(){
	if(canGame()){
		var prompt = "press a button!";
		$("#prompt").text(prompt);

		$(window).on("gamepadconnected", function(){
			hasGP = true;
			$("#prompt").html("connected!");
			console.log("connection event");
			repGP = window.setInterval(reportOnGamepad,100);
		});
	
		$(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#prompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 500);

	}


//LB and RB are buttons 5 and 6 

	alert("LB for pop, RB for hip-hop");

   

});
