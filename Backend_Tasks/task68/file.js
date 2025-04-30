const fs=require('fs')


// Create a file: Write a script that creates a new file named 'message.txt' and writes some text into it.
fs.writeFile('./message.txt','hey there', function(err){
    if (err){
        console.log(err)
    }else{
        console.log('file created')
    }
})



// async kuch return nhi karta 


// Read from file: Write a script that reads the content of 'message.txt' and logs it to the console.
fs.readFile('./message.txt',"utf-8", function(err,data){
if (err){
    console.log(err)        
}
else{
    console.log(data)
}

})




// Append to a file: Write a script that appends some text to 'message.txt'.
fs.appendFile('./message.txt','\nhello there', function(err){
    if (err){
        console.log(err)
    }else{
        console.log('file appended')
    }
});



// Delete a file: Write a script that deletes 'message.txt'.
fs.unlink('./message.txt', function(err){
    if (err){
        console.log(err)
    }else{
        console.log('file deleted')
    }
})

