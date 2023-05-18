// Function

     // Work1111
// function number(nam1=0,num2=0){
//     console.log(nam1+num2);
// }
// number()

     // Work2222
// function names(fullName){
//     let utterance = new SpeechSynthesisUtterance(`Welcome to ${fullName}`);
//     speechSynthesis.speak(utterance);


// }
// names("sajib")
// names("nipa")
// names("maisha")
// names("soniya")

     // Work3333

// let allName=["sajib","sakib","Tamim","musfic"]
// let allNameTitle=["good","great","beautiful","well"]

// function names(fastString,secondString){
//     let utterance = new SpeechSynthesisUtterance(`Welcome to ${fastString} You are a ${secondString} student`);
//      speechSynthesis.speak(utterance);

// }
// for(let i=0;i<allName.length;i++){
//     names(allName[i],allNameTitle[i])
// }

// Work4444

let question="what is your name?"

    function ans(){
        if(question=="what is your name?"){
            let utterance = new SpeechSynthesisUtterance(`my name is sajib`);
            speechSynthesis.speak(utterance);
           
    
        }else if(question=="what is your age"){
            let utterance = new SpeechSynthesisUtterance(`i am 22 year old`);
            speechSynthesis.speak(utterance);
            
        }
    }


ans()


