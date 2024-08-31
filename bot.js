const question = document.getElementById('question')
const answer = document.getElementById('answer')
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName ('container')

let init = 0;

const botSay = (data) => {
    return [
        "Hallo my name is argent, whats your name?",
        `Hallo ${data?.nama}, how old are you?`,
        `Ohhhh ${data?.usia}, what is your hobby`,
        `Wow, we're the same, I also have a hobby ${data?.hobi}, btw you have a beloved?`,
        `Ohhh ${data?.pacar}, Ok, if that's the case, that's it see youuu`
    ] 
}

question.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if (answer.value.length < 1 ) return alert('please fill in first')
  init++
  if (init == 1) {
    botDelay({nama: answer.value})
}else if (init == 2) {
    botDelay({usia: answer.value})
}else if (init == 3) {
    botDelay({hobi: answer.value})
}else if (init == 4) {
    botDelay({pacar: answer.value})
  }else if (init == 5) {
    finishing()
  }else {
    botEnd()
  }
}

function botDelay(nextQuestion) {
    loaders.style.display = 'block';
    container[0].style.filter = 'blur(8px)' 
    setTimeout(() => {
        question.innerHTML =  botSay(nextQuestion)[init]  
        loaders.style.display = 'none';
        container[0].style.filter = 'none'
    }, [1200])
    usersData.push(answer.value)
    answer.value = ""
}

function finishing(){
    question.innerHTML = `thank you ${usersData [0]} for playing here, some time we ${usersData[2]} together yaahh`
}

function botEnd() {
    alert(`thankyou ${usersData[0]} for visiting, You will be directed to the main page :)`)
    window.location.reload()
}