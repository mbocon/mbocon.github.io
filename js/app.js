$(() => {

    let playerVesselsArr = []
    let randomEnemyDiv = '';
    let enemyVesselsArr = [];
    let playerLocation = [];
    let currentPlayer = 'player1'
    let numArr = []
    for (let i = 0; i < 99; i++) {
        numArr.push(i)
    }
    
/////////////////////// MODALS ////////////////////////
    //first modal
    const modal = () => {
        // Retrieve modal elements
        const $modal = $('#modal');
        const $beginBtn = $('#beginBtn');
        // Event listeners
        $beginBtn.on('mouseover', () => {
            $($beginBtn).text('Let\'s Go!');
        });
        $beginBtn.on('mouseout', () => {
            $($beginBtn).text('Click to play!');
        });
        // When 'let's go' is clicked call createElements function
        $beginBtn.on('click', ()=>{
            $modal.css('display', 'none');
            createElements();
        });
    }
    modal();

    // second modal
    const modal2 = () => {
        const $modal2 = $('<div>').attr('id', 'modal-2');
        $('body').append($modal2);
        const $modalTextbox2 = $('<div>').attr('id', 'modal-textbox-2').appendTo('#modal-2');
        const $modal2H1 = $('<h1>').text('Drag and drop to deploy submarines');
        $modalTextbox2.append($modal2H1);
        const $arrow = $('<div>').attr('id', 'arrow').appendTo($('#modal-textbox-2'));
        const $nextBtn = $('<button>').attr('id', 'nextBtn').text('Next').appendTo($('#modal-textbox-2'));
        $nextBtn.on('click', () => {
            $modal2.css('display', 'none');
            modal3();
        })
    }

    // third modal
    const modal3 = () => {
        const $modal3 = $('<div>').attr('id', 'modal-3');
        $('body').append($modal3);
        const $modalTextbox3 = $('<div>').attr('id', 'modal-textbox-3').appendTo('#modal-3');
        const $modal3H1 = $('<h1>').text('Fire torpedos at hidden submarines by selecting an enemy grid');
        $modalTextbox3.append($modal3H1);
        const $arrow = $('<div>').attr('id', 'triangle2').appendTo($('#modal-textbox-3'));
        const $playBtn = $('<button>').attr('id', 'playBtn').text('Next').appendTo($('#modal-textbox-3'));
        $playBtn.on('click', () => {
            $modal3.css('display', 'none')
        })
    }

    // player was hit modal 
    const playerWasHitModal = () => {
        const $modal4 = $('<div>').attr('id', 'modal-4');
        $('body').append($modal4);
        const $modalTextbox4 = $('<div>').attr('id', 'modal-textbox-4').appendTo('#modal-4');
        const $modal4H1 = $('<h1>').text('Oh no! One of your submarines has been destroyed!');
        $modalTextbox4.append($modal4H1);
        const $continueBtn = $('<button>').attr('id', 'continueBtn').text('Continue').appendTo($('#modal-textbox-4'));
        $continueBtn.on('click', () => {
            $modal4.css('display', 'none')
        })
    }

    // playe loses modal
    const playerLostModal = () => {
        const $modal5 = $('<div>').attr('id', 'modal-5');
        $('body').append($modal5);
        const $modalTextbox5 = $('<div>').attr('id', 'modal-textbox-5').appendTo('#modal-5');
        const $modal5H1 = $('<h1>').text('You lose! All your submarines have been destroyed');
        $modalTextbox5.append($modal5H1);
        const $restartBtn = $('<button>').attr('id', 'continueBtn').text('Restart').appendTo($('#modal-textbox-5'));
        $restartBtn.on('click', () => {
            window.location.reload();
        });
    }

    // player wins modal
    const playerWinsModal = () => {
        const $modal6 = $('<div>').attr('id', 'modal-6');
        $('body').append($modal6);
        const $modalTextbox6 = $('<div>').attr('id', 'modal-textbox-6').appendTo('#modal-6');
        const $modal6H1 = $('<h1>').text('Congratulations! You win!');
        $modalTextbox6.append($modal6H1);
        const $replayBtn = $('<button>').attr('id', 'replayBtn').text('Restart').appendTo($('#modal-textbox-6'));
        $replayBtn.on('click', () => {
            window.location.reload();
        })
    }

////////////////// FUNCTIONS TO CREATE PAGE ELEMENTS ////////////////////
    
    // Make Page function
    const makePage = () => {
        // H1 with the game name
        const $h1 = $('<h1>').text('Submariner').appendTo('body');
        // H2 with team names inside div
        const $nameDiv = $('<div>').addClass('name-div').appendTo('body');
        $('<h2>').text('Seir-mae').appendTo($nameDiv);
        $('<h2>').text('VS.').appendTo($nameDiv);
        $('<h2>').text('Covid-19').appendTo($nameDiv);
        // A div container with class of parent-container
        const $container = $('<div>').addClass('parent-container').appendTo('body');
    };
    
    // Player board (10x10) function
    const makePlayerBoard = () => {
        const $playerBoard = $('<div>').addClass('child-1').appendTo('.parent-container');
        for (let i = 1; i <= 100; i++){   
            const $square = $('<div>').addClass('square').addClass(i).text(i).attr('id', i).appendTo($playerBoard);
            $('.child-1').children('.square').droppable({
                drop: function() {
                    playerLocation.push($(this).attr('id'))
                    playerVesselsArr.push(this)
                    $(this).css('background-color', 'blue')
                }
            }); 
        };
    };

    // Player shipyard function
    const makePlayerFleet = () => {
        const $playerShipyard = $('<div>').addClass('child-4').appendTo('.parent-container');
        for (let i = 0; i < 5; i++) {
            const $shipDivs = $('<div>').attr('id', `draggable-${i}`).addClass('ship').addClass(i).appendTo('.child-4')
            $('.ship').on('mouseup', (event) => {
                setTimeout(() => { 
                    $(event.currentTarget).addClass('hide-ship')
                }, 750);
                event.preventDefault();
            })
            $(() => { 
                $(`#draggable-${i}`).draggable({
                    revert: 'invalid',
                    snap: '.square',
                    cursor: 'move',
                }, 'destroy'); 
               
            }); 
        };
        const  $boardBarrier = $('<div>').addClass('child-2').appendTo('.parent-container');
    };
    
    // CPU board (10x10) function
    const makeEnemyBoard = () => {
        const $cpuBoard = $('<div>').addClass('child-3').appendTo('.parent-container');
        //creates 100 div grid that gets appended to enemy board area
        for (let i = 0; i <= 99; i++){   
            const $square = $('<div>').addClass('square').attr('id', i).appendTo($cpuBoard);
        };
        // selects 5 random divs from the above grid and store the id number in enemyVesselsArr for onclick battle function
        for (let i = 0; i < 5; i++) {
            randomEnemyDiv = Math.floor(Math.random($('.child-3').children('.square').attr('id')) * 99);
            enemyVesselsArr.push(randomEnemyDiv)
        };
        console.log(enemyVesselsArr)
    };

    // CPU shipyard function
    const makeEnemyFleet = () => {
        const $cpuShipyard = $('<div>').addClass('child-5').text('Enemy Fleet: *Radar offline*').appendTo('.parent-container');
    };

    // Footer with reset button function
    const makeFooter = () => {
        const $footer = $('<div>').addClass('footer').appendTo('body');
        const $restartBtn = $('<button>').text('Restart').addClass('restartBtn').appendTo($footer);
    };

    // Player turn 
    const playerTurn = () => {}

    // Computer turn
    const computerTurn = () => {

        cpuTarget = Math.floor(Math.random($('.child-1').children('.square').attr('id')) * numArr.length);
        
        console.log(cpuTarget)
        for (let i = 0; i < playerLocation.length; i++) {
            let playerShipLocation = parseInt(playerLocation[i])
            if (cpuTarget === playerShipLocation) {
                if (playerVesselsArr.length === 5) {
                    playerWasHitModal();
                } else if (playerVesselsArr.length < 5 && playerVesselsArr.length > 0){
                    $('#modal-4').css('display', 'block')
                } else {
                    playerLostModal()
                }
                $(playerVesselsArr[0]).css('background-color', 'red')
                playerVesselsArr.shift()
                checkForWin();
            } else {
            
            }
        }
        currentPlayer = 'player1';
    }

    // Battle function 
    const battle = () => {
        $('.child-3').children('.square').on('click', (event)=> {
            if (currentPlayer === 'player1') {
                // convert id of currentTarget from string to number type
                let id = parseInt($(event.currentTarget).attr('id'));
                    // check for match between selected id and enemyVesselsArray
                    if (enemyVesselsArr.includes(id)) {
                        let removeThis = enemyVesselsArr.indexOf(id)
                        $(event.currentTarget).css('background-color', 'red');
                        enemyVesselsArr.splice(removeThis, 1);
                        console.log(`${enemyVesselsArr} are the enemy vessels locations`)
                    } else {
                        $(event.currentTarget).css('background-color', 'teal');
                    }
                    currentPlayer = 'player2'
                    checkForWin();
                };
            });
    };

    const checkForWin = () => {
        if (playerVesselsArr.length === 0) {
            playerLostModal();
            return;
        } else if (enemyVesselsArr.length === 0) {
            playerWinsModal();
            return;
        } else {
            computerTurn();
        };
    }
////////////////// ACTUALLY CREATING THE PAGE //////////////////////////

    const createElements = () => {

        makePage();
        makePlayerBoard();
        makePlayerFleet();
        makeEnemyBoard();
        makeEnemyFleet();
        makeFooter();
        modal2();
        battle();
        console.log(`${enemyVesselsArr} are the enemy vessels locations`)

        
         $('.restartBtn').on('click', () => {
            window.location.reload();
        });
    };
    
});

// UNRESOLVED BUGS/ISSUES

// figure out why enemy ships are sometimes doubling up at same location on random deployment function
// fix game logic to prevent double clicking on player attack 
// fix occasional double clicking on drag/drop for player deployment 

// STILL NEED TO IMPLEMENT FOR BETTER UX

// change background color of div if cpu attack misses
// add modals for when player destroys 
// need to build cross-platform responsiveness

