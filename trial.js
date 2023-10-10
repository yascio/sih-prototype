const { exec } = require('child_process');

// let refresh=document.getElementById("refresh");
// refresh.addEventListener("click",myfunc);
// function myfunc(){
//     console.log("refresh button is clicked");
// }

function motor_status() {
    const pythonScript = 'py motor_status.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python motor_status: ${error}`);
            return;
        }

        console.log('Python motor_status output:');
        console.log(stdout);

    
    });
}


function motor_on() {
    const pythonScript = 'python motor_on.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script 2: ${error}`);
            return;
        }

        console.log('Python script 2 output:');
        console.log(stdout);

        
    });
}


function motor_off() {
    const pythonScript = 'python motor_off.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python motor_off: ${error}`);
            return;
        }

        console.log('Python motor_off output:');
        console.log(stdout);
        alert(stdout);

        
    });
}

function field_data() {
    const pythonScript = 'python field_data.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing : ${error}`);
            return;
        }

        
        console.log(stdout);
        

        
    });
}

// my code 



// motor_status();
// motor_on();
// motor_off();
// field_data();
