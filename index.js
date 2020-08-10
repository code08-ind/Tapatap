window.addEventListener("keydown",checkKeyPress,false);
        function checkKeyPress(key){
            if(key.keyCode=="65"){
            document.getElementById("back").style.backgroundColor="#20B2AA";
            var audio = new Audio('tone1.mp3');
            // audio.duration(8000);
            audio.play();
           // audio.duration(4000);
            }
            else if(key.keyCode=="66"){
            document.getElementById("back").style.backgroundColor="red";
            var audio = new Audio('tone3.mp3');
            audio.play();
            }      
            else if(key.keyCode=="67"){
            document.getElementById("back").style.backgroundColor="pink";
            var audio = new Audio('tone4.mp3');
            audio.play();
            }
            else if(key.keyCode=="68"){
            document.getElementById("back").style.backgroundColor="#FFDEAD";
            var audio = new Audio('tone5.mp3');
            audio.play();
            }
            else if(key.keyCode=="69"){
            document.getElementById("back").style.backgroundColor="#00FA9A";
            var audio = new Audio('tone6.mp3');
            audio.play();
            }
            else if(key.keyCode=="70"){
            document.getElementById("back").style.backgroundColor="#F5DEB3";
            var audio = new Audio('tone7.mp3');
            audio.play();
            }
            else if(key.keyCode=="71"){
            document.getElementById("back").style.backgroundColor="#2F4F4F";
            var audio = new Audio('tone8.mp3');
            audio.play();
            }
            else if(key.keyCode=="72"){
            document.getElementById("back").style.backgroundColor="#87CEFA";
            var audio = new Audio('tone9.mp3');
            audio.play();
            }
            else if(key.keyCode=="73"){
            document.getElementById("back").style.backgroundColor="#000080";
            var audio = new Audio('tone10.mp3');
            audio.play();
            }
            else if(key.keyCode=="74"){
            document.getElementById("back").style.backgroundColor="#66CDAA";
            var audio = new Audio('tone11.mp3');
            audio.play();
            }
            else if(key.keyCode=="75"){
            document.getElementById("back").style.backgroundColor="#DAA520";
            var audio = new Audio('tone12.mp3');
            audio.play();
            }
            else if(key.keyCode=="76"){
            document.getElementById("back").style.backgroundColor="#800080";
            var audio = new Audio('tone1.mp3');
            audio.play();
            }
            else if(key.keyCode=="77"){
            document.getElementById("back").style.backgroundColor="#FF8C00";
            var audio = new Audio('tone4.mp3');
            audio.play();
            }
            else if(key.keyCode=="78"){
            document.getElementById("back").style.backgroundColor="#FF00FF";
            var audio = new Audio('tone5.mp3');
            audio.play();
            }
            else if(key.keyCode=="79"){
            document.getElementById("back").style.backgroundColor="#D8BFD8";
            var audio = new Audio('tone3.mp3');
            audio.play();
            }
            else if(key.keyCode=="80"){
            document.getElementById("back").style.backgroundColor="#7FFFD4";
            var audio = new Audio('tone8.mp3');
            audio.play();
            }
            else if(key.keyCode=="81"){
            document.getElementById("back").style.backgroundColor="#B22222";
            var audio = new Audio('tone9.mp3');
            audio.play();
            }
            else if(key.keyCode=="82"){
            document.getElementById("back").style.backgroundColor="#FA8072";
            var audio = new Audio('tone6.mp3');
            audio.play();
            }
            else if(key.keyCode=="83"){
            document.getElementById("back").style.backgroundColor="#DEB887";
            var audio = new Audio('tone1.mp3');
            audio.play();
            }
            else if(key.keyCode=="84"){
            document.getElementById("back").style.backgroundColor="#6B8E23";
            var audio = new Audio('tone11.mp3');
            audio.play();
            }
            else if(key.keyCode=="85"){
            document.getElementById("back").style.backgroundColor="#663399";
            var audio = new Audio('tone12.mp3');
            audio.play();
            }
            else if(key.keyCode=="86"){
            document.getElementById("back").style.backgroundColor="#00BFFF";
            var audio = new Audio('tone7.mp3');
            audio.play();
            }
            else if(key.keyCode=="87"){
            document.getElementById("back").style.backgroundColor="#C71585";
            var audio = new Audio('tone8.mp3');
            audio.play();
            }
            else if(key.keyCode=="88"){
            document.getElementById("back").style.backgroundColor="#EEE8AA";
            var audio = new Audio('tone10.mp3');
            audio.play();
            }
            else if(key.keyCode=="89"){
            document.getElementById("back").style.backgroundColor="#A52A2A";
            var audio = new Audio('tone3.mp3');
            audio.play();
            }
            else if(key.keyCode=="90"){
            document.getElementById("back").style.backgroundColor="#00FFFF";
            var audio = new Audio('tone6.mp3');
            audio.play();
            }
            else {
                alert("You have entered a wrong key !!!");
            }    
    }