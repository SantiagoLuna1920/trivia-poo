import getQ from "./getQ.js";
import Print from "./printHTML.js";
import {question_correct,question_correctC} from "./printHTML.js";


const form = document.getElementById("container");
const form2 = document.getElementById("container-Questions");

        getQ.getCategories()
                .then((response)=> response.json())
                .then((data)=> Print.printCategories(data))

        form.addEventListener("submit",(event)=> {
        event.preventDefault();
        console.log(getQ.getQuestions())
        
        if (getQ.getQuestions()==1) {
                const form2 = document.getElementById("container-Questions");
                form2.innerHTML="";
                form2.innerHTML=`<div class="col-md-6" style="margin: auto;">
                                        <div class="alert alert-info">
                                                <div class="alert-body">
                                                        Debes rellenar los campos necesarios para generar tu QUIZ.
                                                </div>
                                        </div>
                                </div>`;
                } else {
                        getQ.getQuestions()
                                .then((response)=> response.json())
                                .then((data)=> Print.printQuestions(data))
                }
        });

        form2.addEventListener("submit",(event)=> {
        event.preventDefault();
        Print.printValidation();
        console.log("xd")
                })