$(() => {

/////////////////////// INTRO MODAL ////////////////////////

    const modal = () => {
        // Retrieve modal elements
        const $modal = $('#modal');
        const $playBtn = $('#playBtn');
        // Event listeners
        $playBtn.on('mouseover', () => {
            $($playBtn).text('Let\'s Go!');
        });
        $playBtn.on('mouseout', () => {
            $($playBtn).text('Click to play!');
        });
        // When 'let's go' is clicked call createElements function
        $playBtn.on('click', ()=>{
            $modal.css('display', 'none');
            createElements();
        });
    }
    modal();

////////////////// FUNCTIONS TO CREATE PAGE ELEMENTS ////////////////////
    
    // Make Page function
    const makePage = () => {
        // H1 with the game name
        const $h1 = $('<h1>').text('!Battleship').appendTo('body');
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
            const $grid = $('<div>').addClass('square').attr('id', i).appendTo($playerBoard);
            $(() => { 
                $('.child-1').children('.square').droppable({
                    drop: () => {
                        $('.ui-draggable-dragging').css('background-color', 'red');
                    }
                }); 
            }); 
        };
    };

    // Player shipyard function
    const makePlayerFleet = () => {
        const hull = [2,3,3,4,5];
        const $playerShipyard = $('<div>').addClass('child-4').text('P1 fleet:').appendTo('.parent-container');
        for (let i = 0; i < 5; i++) {
            const $shipDivs = $('<div>').attr('id', `draggable-${i}`).text(hull[i]).addClass('ship').appendTo('.child-4')
            $(() => { 
                $(`#draggable-${i}`).draggable({
                    revert: 'invalid',
                    snap: '.square',
                    cursor: 'move'
                }); 
            }); 
        };
        const  $boardBarrier = $('<div>').addClass('child-2').appendTo('.parent-container');
    };
    
    // CPU board (10x10) function
    const makeEnemyBoard = () => {
        const $cpuBoard = $('<div>').addClass('child-3').appendTo('.parent-container');
        for (let i = 1; i <= 100; i++){   
            const $grid = $('<div>').addClass('square').attr('id', i).appendTo($cpuBoard);
            //append enemy ships randomly and keep hidden 
        };
    };
    
    // CPU shipyard function
    const makeEnemyFleet = () => {
        const hull = [2,3,3,4,5];
        const deployArr = [];
        console.log(deployArr)
        const $cpuShipyard = $('<div>').addClass('child-5').text('Enemy Fleet: *Radar offline*').appendTo('.parent-container');
        // select random divs on enemy board
        const randomSquares = () => {
            deployArr.push(Math.floor(Math.random($('.child-3').children('.square').attr('id')) * 100));
        }
        for (let i = 0; i < 5; i++) {
            const $shipDivs = $('<div>').attr('id', i).text(hull[i]).addClass('ship').addClass('hidden-ship').appendTo('.child-5'); 
            randomSquares();
        };
    };

    // Footer with reset button function
    const makeFooter = () => {
        const $footer = $('<div>').addClass('footer').appendTo('body');
        const $restartBtn = $('<button>').text('Restart').addClass('restartBtn').appendTo($footer);
    };
        
////////////////// ACTUALLY CREATING THE PAGE //////////////////////////

    const createElements = () => {
        makePage();
        makePlayerBoard();
        makePlayerFleet();
        makeEnemyBoard();
        makeEnemyFleet();
        makeFooter();
        
         $('.restartBtn').on('click', () => {
            window.location.reload();
        });
    };

// make it so p1 fleet is a div of divs 2,3,4 etc when dragged and dropped hidden become visible?

// add hitpoints to ships 


//make a battle function

//p1 starts by selecting an enemy grid point
// if a hidden ship is there, alert hit and change color
// if a miss change to different color
// if ship is destroyed
     
// after p1 starts cpu selects random p1 div and follows same hit/miss logic

    
});