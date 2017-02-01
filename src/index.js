import questions from './questions'
 
var mass_questions = [1,2,3,4,5,6,7,8,9,10]     //static
var mass_rezult = []
/*
 add questions and answer random
*/

const root = document.getElementById("root");

/*function random (){

}*/

const el = (type, props) => {
  const element =   document.createElement(type);
  if(Array.isArray(props.body)){
      props.body.forEach(e => element.appendChild(e))
  }
  else if(props.body instanceof HTMLElement){
      element.appendChild(props.body)
  }
  delete props.body;

  Object.assign(element,props)
  return element;
}

const start_button = el ("input",{type: 'button',id: 'buttons', value: "Start", onclick: () =>{test();} })
root.appendChild(start_button);
var str = true
const test = ( i = 0) =>{
    if(str){
    root.removeChild(start_button)
    str = false
    }
    if(i==10){
        var rezult = 0;
        for(var i = 0; i<10;i++){
            if(mass_rezult[i]==true)
                rezult++
        }
       const div =  el('div',{
            body: el('label', { innerHTML: "Ваш рузультат : "+ rezult + " из 10"})
        })
        root.appendChild(div)
         console.log("Правильных ответов: "+rezult)
    }else{
    const div = el ('div', {
    body:[
        el('div',{
            body: el('label', { innerHTML: questions[i].title}),
        }),
    el('label',{body: el('label', { innerHTML: questions[i].code})}),
    el("br",{}), 
    el ("input",{type: 'radio', id: "red", name: "radio", onclick: ()=>{mass_rezult[i] = questions[i].answers[0].isTrue}}),
    el('label',{body: el('label', { innerHTML: questions[i].answers[0].answer})}),
    el("br",{}),  
    el ("input",{type: 'radio', name: "radio", onclick: ()=>{mass_rezult[i] = questions[i].answers[1].isTrue}}),
    el('label',{body: el('label', { innerHTML: questions[i].answers[1].answer})}),
    el("br",{}),
    el ("input",{type: 'radio', name: "radio", onclick: ()=>{mass_rezult[i] = questions[i].answers[2].isTrue}}),
    el('label',{body: el('label', { innerHTML: questions[i].answers[2].answer})}),
    el("br",{}),
    el ("input",{type: 'radio', name: "radio", onclick: ()=>{mass_rezult[i] = questions[i].answers[3].isTrue}}),
    el('label',{body: el('label', { innerHTML: questions[i].answers[3].answer})}),
    el("br",{}),
    el ("input",{type: 'button',id: 'buttons', value: "next", onclick: () =>{root.removeChild(div); test(++i)} }) 
    ]
});

//const input = el ("input",{type: 'radio'});
//div.appendChild(input);
root.appendChild(div)
        
console.log(mass_rezult)
    }
}
//root.innerHTML = questions[0].title;
//questions[0].answers[0].answer