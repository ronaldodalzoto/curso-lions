import PromptSync from "prompt-sync";
const prompt = PromptSync()

let tabuada = parseFloat('qual é o numero? ')

for(let i = 1; i<=10; i = i + 1){
    console.log(`a tabuada do ${tabuada} é ${i * tabuada}`)
}
