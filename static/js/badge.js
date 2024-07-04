const classMap = {
    "hanged": "haczyk_key_on",
    "empty": "haczyk_key_off"
};

const state_change_times = {};

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
                if (!element){
                    console.log("Badge for element with id: ",key," not found");
                    continue;
                }
                updateButtonState(element,hook_info);
                state_change_times[key]=hook_info.state_change_time;
            }
        }
    })
    .catch(error =>{
        handleError(error);
    })
}
setInterval(getState, 4000);

// pierwsza aktualizacja powinna nastąpić zaraz po załadowaniu strony
setTimeout(getState, 200);


//Kod zmieniający tekst po najechaniu na stan haczyka wartatu
const haczykStatusList = document.querySelectorAll('.haczyk_status');
haczykStatusList.forEach(haczykStatus => {
  const id = haczykStatus.id;
  const haczykLeftText = haczykStatus.querySelector('.haczyk_left_text');
  const haczykRight = haczykStatus.querySelector('.haczyk_right');
  const haczykOriginalText = haczykLeftText.textContent.trim();

  function handleMouseEnter() {
    if (haczykRight.classList.contains('haczyk_key_on')) {
      haczykLeftText.textContent = 'Otwarty';
    }
    if (haczykRight.classList.contains('haczyk_key_off')) {
        haczykLeftText.textContent = 'Zamknięty';
      }
    if (haczykRight.classList.contains('haczyk_key_error')) {
        haczykLeftText.textContent = 'Error';
    }

    //check if state_change_times[id] is defined
    if (!state_change_times[id]) {
      return;
    }
    const secondsPassed = (Date.now()/1000 - state_change_times[id]);

    //print time since last change in human readable format using the biggest unit possible like days, hours, minutes or seconds
    if (secondsPassed > 60*60*24) {
      const days = Math.floor(secondsPassed/(60*60*24));
      haczykLeftText.textContent += ' od ' + days + ' dni';
      return;
    }
    if (secondsPassed > 60*60) {
      const hours = Math.floor(secondsPassed/(60*60));
      haczykLeftText.textContent += ' od ' + hours + ' godz.';
      return;
    }
    if (secondsPassed > 60) {
      const minutes = Math.floor(secondsPassed/60);
      haczykLeftText.textContent += ' od ' + minutes + ' minut';
      return;
    }
  }
  function handleMouseOut() {
    haczykLeftText.textContent = haczykOriginalText;
  }

  haczykStatus.addEventListener('mouseover', handleMouseEnter);
  haczykStatus.addEventListener('mouseout', handleMouseOut);
});
