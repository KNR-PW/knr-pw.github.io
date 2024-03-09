const classMap = {
    "hanged": "haczyk_key_on",
    "empty": "haczyk_key_off"
};

function handleError(error){
    const elements = document.querySelectorAll('.haczyk_right');
    elements.forEach(element => {
        element.className='haczyk_right haczyk_key_error';
    })
    console.log("fetch_error: ",error);
}

function updateButtonState(button_element, hook_info){
    const element_right = button_element.getElementsByClassName("haczyk_right")[0];
    const button_text = button_element.getElementsByClassName("haczyk_left_text")[0];
    element_right.className='haczyk_right';
    const current_state = hook_info.state;
    if (classMap.hasOwnProperty(current_state)) {
        element_right.classList.add(classMap[current_state]);
        let name = hook_info.place;
        //replace first letter with upper case
        name = name.charAt(0).toUpperCase() + name.slice(1);
        button_text.textContent= name;
    } else {
        element_right.classList.add("haczyk_key_error"); 
    }
}

function getState(){
    fetch('https://hangwatch.knr.edu.pl/hooks')
    .then(answer=>answer.json())
    .then(data => {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const hook_info=data[key];
                const element=document.getElementById(key);
                updateButtonState(element,hook_info);
            }
        }
    })
    .catch(error =>{
        handleError(error);
    })
}
setInterval(getState, 2500);