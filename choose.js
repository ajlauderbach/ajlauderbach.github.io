//Character name
var playerName;
playerName = prompt("Hello! What is your character's name?");
while (playerName == "") {
    alert("Your character needs a name...");
    playerName = prompt("Hello! What is your character's name?");
}
alert("Great! Your adventure begins now!");

//Character class
alert("What is your character class, " + playerName + "? Will you be a Knight, a Paladin, a Wizard, or a Rogue?");
var playerClass;
playerClass = prompt("Knight, Paladin, Wizard, or Rogue?");
while (playerClass != "Knight" && playerClass != "knight" && playerClass != "Paladin" && playerClass != "paladin" && playerClass != "Wizard" && playerClass != "wizard" && playerClass != "Rogue" && playerClass != "rogue") {
    alert("That's not a valid class selection.");
    playerClass = prompt("Knight, Paladin, Wizard, or Rogue?");
}
alert("Excellent! Nice to meet you, " + playerName + " the " + playerClass + "!");

//Gameplay
alert(playerName + " is currently exploring an abandoned dungeon. " + playerName + " arrives at a crossroads, with two diverging hallways. Which hallway will " + playerName + " go down?");
var hallwayChoice;
hallwayChoice = prompt("Left or right?");
while (hallwayChoice != "left" && hallwayChoice != "Left" && hallwayChoice != "right" && hallwayChoice != "Right") {
    alert("Invalid choice. Try again.");
    hallwayChoice = prompt("Left or right?");
}
if (hallwayChoice == "left" || hallwayChoice == "Left") {
    alert(playerName + " travels down the left hallway. " + playerName + " hears a screeching noise coming from further down the hallway. Will " + playerName + " investigate?");
    var investigateChoice;
    investigateChoice = prompt("Yes or no?");
    while (investigateChoice != "yes" && investigateChoice != "Yes" && investigateChoice != "no" && investigateChoice != "No") {
        alert("Invalid choice. Try again.");
        investigateChoice = prompt("Yes or no?");
    }
    if (investigateChoice == "yes" || investigateChoice == "Yes") {
        alert(playerName + " is suddenly attacked by a zombie! What will " + playerName + " do? Fight back, or run?");
        var zombieChoice;
        zombieChoice = prompt("Fight or run?");
        while (zombieChoice != "fight" && zombieChoice != "Fight" && zombieChoice != "run" && zombieChoice != "Run") {
            alert("Invalid choice. Try again.");
            zombieChoice = prompt("Fight or run?");
        }
        if (zombieChoice == "fight" || zombieChoice == "Fight") {
            if (playerClass == "paladin" || playerClass == "Paladin") {
                alert("With " + playerName + "'s greathammer, enchanted with holy magic, " + playerName + " is able to smash the zombie's brain and end its unnatural life!");
            }
            if (playerClass == "rogue" || playerClass == "Rogue") {
                alert("With " + playerName + "'s bandit knife, " + playerName + " is able to stab its heart and end its unnatural life!");
            }
            if (playerClass == "wizard" || playerClass == "Wizard") {
                alert("With " + playerName + "'s staff, " + playerName + " is able to launch a fireball at it, incinerating its flesh and ending its unnatural life!");
            }
            if (playerClass == "knight" || playerClass == "Knight") {
                alert("With " + playerName + "'s longsword, " + playerName + " is able to stab its heart and end its unnatural life!");
            }
            alert(playerName + " has succeeded in vanquishing the evil from this dungeon!");
            alert("YOU WIN!");
        }
        else if (zombieChoice == "fight" || zombieChoice == "Fight") {
            alert(playerName + " runs away from the zombie, like the little wimp " + playerName + " is!");
            alert("In running away like a little pansy, " + playerName + " trips on an uneven piece of ground! " + playerName + "smashes " + playerName + "'s head on the ground and dies instantly! Wow, maybe you should've stayed and fought instead of being a wimp!");
            alert("YOU DIED!");
        }
    }
    else if (investigateChoice == "no" || investigateChoice == "No") {
        alert("Wow, " + playerName + ". You're a real wimp, aren't you? What kind of " + playerClass + " are you?");
        alert("As " + playerName + " turns to walk back down the hallway, " + playerName + " is made aware of a door " + playerName + " missed earlier. Will " + playerName + " open the door?");
        var doorChoice;
        doorChoice = prompt("Yes or no?");
        while (doorChoice != "yes" && doorChoice != "Yes" && doorChoice != "no" && doorChoice != "No") {
            alert("Invalid choice. Try again.");
            doorChoice = prompt("Yes or no?");
        }
        if (doorChoice == "yes" || doorChoice == "Yes") {
            alert(playerName + " opens the door and takes a step forward. However, " + playerName + "'s foot is met with pure emptiness, as the door opens to reveal a massive empty pit!" + playerName + " falls to their doom!");
            alert("YOU DIED!");
        }
        else if (doorChoice == "no" || doorChoice == "No") {
            alert("WOW, you are just the biggest wimp in history, aren't you? You know what? That's it. " + playerName + " dies of a heart attack. Go play solitaire or something.");
            alert("YOU DIED!");
        }
    }
}
else if (hallwayChoice == "right" || hallwayChoice == "Right") {
    alert(playerName + " travels down the right hallway. " + playerName + " encounters a figure in plate armor laying against the wall. They look to be in great pain, potentially even dead. Will " + playerName + " investigate?");
    var helpChoice;
    helpChoice = prompt("Yes or no?");
    while (helpChoice != "yes" && helpChoice != "Yes" && helpChoice != "no" && helpChoice != "No") {
        alert("Invalid choice. Try again.");
        helpChoice = prompt("Yes or no?");
    }
    if (helpChoice == "yes" || helpChoice == "Yes") {
        alert(playerName + " goes to assist the unknown figure. Upon closer inspection, the figure appears to be a badly wounded knight, bleeding out from a gash on his chest. He pulls " + playerName + " close, and says, 'You must... use this blade... to kill it...' before dying.");
        alert("YOU GAINED THE EAGLE'S BLADE!");
        alert("Suddenly, a roar is heard from behind " + playerName + ". A lich manifests from behind " + playerName + "!");
        alert("What will " + playerName + " do? Fight or run?");
        var lichChoice;
        lichChoice = prompt("Fight or run?");
        while (lichChoice != "fight" && lichChoice != "Fight" && lichChoice != "run" && lichChoice != "Run") {
            alert("Invalid choice. Try again.");
            lichChoice = prompt("Fight or run?");
        }
        if (lichChoice == "Fight" || lichChoice == "fight") {
            alert(playerName + " drives the Eagle's Blade into the lich's chest, killing it! " + playerName + " has vanquished the evil haunting this dungeon!");
            alert("YOU WIN!");
        }
        else if (lichChoice == "run" || lichChoice == "Run") {
            alert(playerName + " tries to run like a little pansy! However, before " + playerName + " can get far, the lich blasts " + playerName + " with a magic missile, burning a hole through " + playerName + "'s chest!");
            alert("YOU DIED!");
        }
    }
    if (helpChoice == "no" || helpChoice == "No") {
        alert(playerName + " simply leaves the dying figure alone. He lets out one last cry for help before succumbing to his wounds. Wow. You're a real jerk, aren't you?");
        alert("Suddenly, a roar is heard from behind " + playerName + ". A lich manifests from behind " + playerName + "!");
        alert("What will " + playerName + " do? Fight or run?");
        var lichChoice;
        lichChoice = prompt("Fight or run?");
        while (lichChoice != "fight" && lichChoice != "Fight" && lichChoice != "run" && lichChoice != "Run") {
            alert("Invalid choice. Try again.");
            lichChoice = prompt("Fight or run?");
        }
        if (lichChoice == "Fight" || lichChoice == "fight") {
            if (playerClass == "paladin" || playerClass == "Paladin") {
                alert("With " + playerName + "'s greathammer, enchanted with holy magic, " + playerName + " attempts to bash the lich!");
            }
            if (playerClass == "rogue" || playerClass == "Rogue") {
                alert("With " + playerName + "'s bandit knife, " + playerName + " attempts to stab the lich!");
            }
            if (playerClass == "wizard" || playerClass == "Wizard") {
                alert("With " + playerName + "'s staff, " + playerName + " casts a fireball at the lich!");
            }
            if (playerClass == "knight" || playerClass == "Knight") {
                alert("With " + playerName + "'s longsword, " + playerName + " atempts to slash the lich!");
            }
            alert("However, the lich is immune to " + playerName + "'s attacks!");
            alert("The lich counteracts with a necrotic lifedrain attack, draining " + playerName + "'s soul!");
            alert("YOU DIED!");
        }
        else if (lichChoice == "run" || lichChoice == "Run") {
            alert(playerName + " tries to run like a little pansy! However, before " + playerName + " can get far, the lich blasts " + playerName + " with a magic missile, burning a hole through " + playerName + "'s chest!");
            alert("YOU DIED!");
        }
    }
}