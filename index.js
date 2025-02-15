var beans = 0;
var total = 0;

//pots
var pots = 0;
var potcost = 10^pots+1
var potvalue = 2

//gardens
var gardens = 0;
var garcost = 50^pots+1
var garvalue = 10

//farms
var farms = 0;
var farcost = 200^farms+1;
var farvalue = 50;

//offices
var offices = 0;
var offcost = 500^offices+1;
var offvalue = 200

//factories
var factories = 0;
var faccost = 2000^factories+1;
var facvalue = 1000;

//megafactories
var megas = 0;
var megcost = 5000^megas+1;
var megvalue = 3000;

function opentab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

function loaded(){
    //"G" gives 100 beans, debug
    document.addEventListener("keydown",function(e){
        if (e.code == "KeyG"){
            beans+=69420
            document.getElementById("beancount").innerHTML = "Beans: "+beans
        }
    })
    document.getElementById("defaultTab").click()

    //managers
    harvestmanager()
    potsmanager()
    gardenmanager()
    farmmanager()
    officemanager()
    factorymanager()
    megamanager()
}


//manages the Harvest Beans button
function harvestmanager(){
    //clicked, add a bean
    document.getElementById("harvest").addEventListener("click",function(ev){
        beans++;
        document.getElementById("beancount").innerHTML = "Beans: "+beans
    })
}

//manages the Potted Bean Plants
function potsmanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= pots*potvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("pots").addEventListener("click",function(ev){
        if (beans >= potcost){
            beans -= potcost
            potcost *=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("potcost").innerHTML = potcost + " beans"
            
            pots++
            document.getElementById("potted_p").innerHTML = "Potted Bean Plants: " + pots
            document.getElementById("totalpotvalue").innerHTML = potvalue*pots + " beans per second total"
        
            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices + facvalue*factories + megvalue*megas
            document.getElementById("total").innerHTML = "Total Beans per second: "+total
        }
    })
}

//manages the Bean Gardens
function gardenmanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= gardens*garvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("gardens").addEventListener("click",function(ev){
        if (beans >= garcost){
            beans -= garcost
            garcost*=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("garcost").innerHTML = garcost + " beans"
            
            gardens++
            document.getElementById("garden_p").innerHTML = "Bean Gardens: " + gardens
            document.getElementById("totalgarvalue").innerHTML = garvalue*gardens + " beans per second total"
        
            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices + facvalue*factories + megvalue*megas
            document.getElementById("total").innerHTML = "Total Beans per second: "+total

        }
    })
}

//manages the Farms
function farmmanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= farms*farvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("farms").addEventListener("click",function(ev){
        if (beans >= farcost){
            beans -= farcost
            farcost*=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("farcost").innerHTML = farcost + " beans"
            
            farms++
            document.getElementById("farm_p").innerHTML = "Bean Farms: " + farms
            document.getElementById("totalfarvalue").innerHTML = farvalue*farms + " beans per second total"

            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices
            document.getElementById("total").innerHTML = "Total Beans per second: "+total

        }
    })
}

//manages the Offices
function officemanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= offices * offvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("office").addEventListener("click",function(ev){
        if (beans >= offcost){
            beans -= offcost
            offcost*=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("offcost").innerHTML = offcost + " beans"
            
            offices++
            document.getElementById("office_p").innerHTML = "Bean Offices: " + offices
            document.getElementById("totaloffvalue").innerHTML = offvalue*offices + " beans per second total"

            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices + facvalue*factories + megvalue*megas
            document.getElementById("total").innerHTML = "Total Beans per second: "+total

        }
    })
}

function factorymanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= factories * facvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("factory").addEventListener("click",function(ev){
        if (beans >= faccost){
            beans -= faccost
            faccost*=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("faccost").innerHTML = faccost + " beans"
            
            factories++
            document.getElementById("factory_p").innerHTML = "Bean Factories: " + factories
            document.getElementById("totalfacvalue").innerHTML = facvalue*factories + " beans per second total"

            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices + facvalue*factories + megvalue*megas
            document.getElementById("total").innerHTML = "Total Beans per second: "+total

        }
    })
}

function megamanager(){

    //every second, add the necessary beans
    setInterval(function(){
        beans+= megas * megvalue
        document.getElementById("beancount").innerHTML = "Beans: "+beans

    },1000)

    //clicked, add a pot if affordable
    document.getElementById("mega").addEventListener("click",function(ev){
        if (beans >= megcost){
            beans -= megcost
            megcost*=2
            document.getElementById("beancount").innerHTML = "Beans: "+beans
            document.getElementById("megcost").innerHTML = megcost + " beans"
            
            megas++
            document.getElementById("mega_p").innerHTML = "Bean Mega Factories: " + factories
            document.getElementById("totalmegvalue").innerHTML = megvalue*megas + " beans per second total"

            total = potvalue*pots + garvalue*gardens + farvalue*farms + offvalue*offices + facvalue*factories + megvalue*megas
            document.getElementById("total").innerHTML = "Total Beans per second: "+total

        }
    })
}
