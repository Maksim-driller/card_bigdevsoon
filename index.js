const button_1 = document.getElementById('button_follow') ; 

const button_2 = document.getElementById('button_message'); 

const message_window = document.getElementById('message_window')

const button_close_window = document.getElementById('button_closed_window') 


button_2.addEventListener('click', function(event) { 
    message_window.style.display = 'flex' 
})   

button_close_window.addEventListener('click', function(event) { 
    message_window.style.display = 'none' 
})