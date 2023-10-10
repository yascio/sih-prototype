const express=require('express');
const { exec } = require('child_process');
const ejs=require('ejs');
const cors=require('cors');
 

const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(cors());   
app.get('/',(req,res)=>{
 
    fetchData();

 
     function fetchData(){
        Promise.all([

fetch('http://13.233.46.189:5000/get_data').then(response=>response.json())
,
fetch('http://13.235.138.32:5000/get_cordinates').then(response=>response.json())
        ]).then((data)=>{res.render('index',{data})})

}
});


app.get('/motor_on',(req,res)=>{
    const pythonScript = 'python motor_on.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script 2: ${error}`);
            return;
        }

        console.log('Python script 2 output:');
        console.log(stdout);

        
    });
})

app.get('/motor_off',(req,res)=>{
    const pythonScript = 'python motor_off.py'; 

    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python motor_off: ${error}`);
            return;
        }

        console.log('Python motor_off output:');
        console.log(stdout);
       

        
    });
})

app.post('/maps',(req,res)=>{

    fetchData();

 
     async function fetchData(){
       fetch('http://13.235.138.32:5000/get_cordinates'
       ).then(response=>response.json()).then((data)=>{res.render('map',{data})})
        
}


});

app.post("/",(req,res)=>{
    res.redirect("/")
})

app.get('/maps',(req,res)=>{
  
       
    
   });


app.listen(8000,()=>{console.log('server started at port 8000')});

