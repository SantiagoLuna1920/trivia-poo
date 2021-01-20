 let question_correct = [];
 let question_correctC= [];

export default class Print {
    static printCategories(categories) {
        const categorie = document.getElementById("categories");
        categories.trivia_categories.forEach(element => {
            categorie.innerHTML+=`<option value="${element.id}">${element.name}</option>`;
        });
    }
    static printQuestions (questions) {
        for (let i=0; i<questions.results.length; i++) {
            question_correct.push(questions.results[i].correct_answer);
        }
        question_correctC=[];
        question_correctC.push(...question_correct);
        question_correct=[];
        const button = document.createElement("button");
        const selectT = document.getElementById("types").value;
        button.textContent="Enviar respuestas";
        button.classList.add("btn", "btn-primary","button-add");
        const container = document.getElementById("container-Questions");
        container.innerHTML="";
                if (questions.response_code==0) {
                    if (selectT==="multiple") {
                        for (let i=0; i<questions.results.length; i++) {
                            let copy=[];
                            copy.push(...questions.results[i].incorrect_answers);
                            let dato = Math.round(Math.random()*3);
                            copy.splice(dato,0,questions.results[i].correct_answer);
            
            container.innerHTML+=`<div class="question2 col-md-5 mt-4" style="margin: auto; margin-top: 30px; height: 200px">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                ${questions.results[i].question}
                                                    <br>
                                                        <br>
                                                            <label style="color: blue;" for="select${i}" class="form-label">Choose your answer</label>
                                                                <select id="select${i}" class="form-control">
                                                                    <option id="${copy[0]}" value="${copy[0]}">${copy[0]}</option>
                                                                    <option id="${copy[1]}" value="${copy[1]}">${copy[1]}</option>
                                                                    <option id="${copy[2]}" value="${copy[2]}">${copy[2]}</option>
                                                                    <option id="${copy[3]}" value="${copy[3]}">${copy[3]}</option>
                                                                </select>
                                            </div>
                
                                        </div>
                                    </div>`;

                                }
                                container.lastElementChild.innerHTML+=`<button id="buttonC" class="btn btn-primary button-add form-check">Submit responses</button>`;
                            } else {
                                let booleano=["False","True"];
                                for (let i=0; i<questions.results.length; i++) {
                                    container.innerHTML+=`<div class="question2 col-md-5 mt-4" style="margin: auto; margin-top: 30px; height: 200px">
                                                                <div class="card h-100">
                                                                    <div class="card-body">
                                                                        ${questions.results[i].question}
                                                                            <br>
                                                                                <br>
                                                                                    <label style="color: blue;" for="select${i}" class="form-label">Select te correct question</label>
                                                                                        <select id="select${i}" class="form-control">
                                                                                            <option id="${booleano[0]}" value="${booleano[0]}">${booleano[0]}</option>
                                                                                            <option id="${booleano[1]}" value="${booleano[1]}">${booleano[1]}</option>
                                                                                        </select>
                                                                    </div>
                
                                                                </div>
                                                            </div>`;

                                    }
                                    container.lastElementChild.innerHTML+=`<button id="buttonC" class="btn btn-primary button-add form-check">Submit responses</button>`;
                        }
            } else {    
                                container.innerHTML+=`<div class="col-md-6" style="margin: auto;">
                                                                <div class="alert alert-info">
                                                                    <div class="alert-body">
                                                                    With no results, the results could not be returned. The API does not have enough questions for your query. (For example, asking 50 questions in a category that only has 20)
                                                                    </div>
                                                                </div>
                                                     </div>`;
                }
        }
        static printValidation () {
            const selec = document.getElementById("types").value;
        const form2 = document.getElementById("container-Questions");
        let cont=0;

                if (selec=="boolean") {
                        for (let i = 0; i<question_correctC.length; i++) {
                                if (document.getElementById(`select${i}`).value===question_correctC[i]) {
                                        cont++;
                                }
                        }
        } else {
                for (let i = 0; i<question_correctC.length; i++) {
                        if (document.getElementById(`select${i}`).value===question_correctC[i]) {
                                cont++;
                        }
                }
        }
        form2.innerHTML="";
        form2.innerHTML=`<div class="col-md-6" style="margin: auto;">
                                <div class="alert alert-info">
                                        <div class="alert-body">
                                                You have ${cont} correct answers out of a total of ${question_correctC.length} questions.
                                        </div>
                                 </div>
                        </div>`;
        }
    }
    

    export {question_correct, question_correctC};