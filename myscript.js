
function myFunction() {
    var status = document.getElementById('status').value;
    var Undergrad = document.getElementById("undergraduatecourses");                    
    var Grad = document.getElementById("graduatecourses");
    //var classes = document.getElementById("classes").value;
    if ( status=='undergrad'){
        Grad.style.display = "none";
        Undergrad.style.display = "block";
    }
    else if (status=='graduate'){
        Undergrad.style.display = "none";
        Grad.style.display = "block";
    }
    else if (status='novalue'){
        Undergrad.style.display = "none";
        Grad.style.display = "none";
    }
}
function reset(a){
    for (var i = 0, len = a.length; i < len; i++) {
        a[i].checked=false;
    }
}

function ureset(){
    var uradio1 = document.getElementsByName("ucourse1");
    var uradio2 = document.getElementsByName("ucourse2");
    var uradio3 = document.getElementsByName("ucourse3");
    var uradio4 = document.getElementsByName("ucourse4");
    reset(uradio1);
    reset(uradio2);
    reset(uradio3);
    reset(uradio4);
}

function resetmessage(a){
    var messagearea = document.getElementById(a);
    messagearea.style.display = "none"; 
}

function greset(){
    var gradio1 = document.getElementsByName("gcourse1");
    var gradio2 = document.getElementsByName("gcourse2");
    var gradio3 = document.getElementsByName("gcourse3");
    var gradio4 = document.getElementsByName("gcourse4");
    reset(gradio1);
    reset(gradio2);
    reset(gradio3);
    reset(gradio4);
}

function undergraduate_eligibility(){
    var uradio1 = document.getElementsByName("ucourse1");
    var uradio2 = document.getElementsByName("ucourse2");
    var uradio3 = document.getElementsByName("ucourse3");
    var uradio4 = document.getElementsByName("ucourse4");
    var totalUradiosChecked=0;

    for (var i = 0, len = uradio1.length; i < len; i++) {
         if (uradio1[i].checked) {
            totalUradiosChecked=totalUradiosChecked+1;
         }
    }

    for (var i = 0, len = uradio2.length; i < len; i++) {
        if (uradio2[i].checked) {
           totalUradiosChecked=totalUradiosChecked+1;
        }
   }

   for (var i = 0, len = uradio3.length; i < len; i++) {
        if (uradio3[i].checked) {
            totalUradiosChecked=totalUradiosChecked+1;
        }
    }

    for (var i = 0, len = uradio4.length; i < len; i++) {
        if (uradio4[i].checked) {
           totalUradiosChecked=totalUradiosChecked+1;
        }
   }
   if (totalUradiosChecked<4){
       alert('Please select grade from all the courses');
   }
   else {
        Ueligibility();

    }
}
function Ueligibility() {
    var average_ugpa=0;
    var ugpa1=gpa_calculator("ucourse1_grade_A","ucourse1_grade_B","ucourse1_grade_C","ucourse1_grade_D","ucourse1_grade_F");
    var ugpa2=gpa_calculator("ucourse2_grade_A","ucourse2_grade_B","ucourse2_grade_C","ucourse2_grade_D","ucourse2_grade_F");
    var ugpa3=gpa_calculator("ucourse3_grade_A","ucourse3_grade_B","ucourse3_grade_C","ucourse3_grade_D","ucourse3_grade_F");
    var ugpa4=gpa_calculator("ucourse4_grade_A","ucourse4_grade_B","ucourse4_grade_C","ucourse4_grade_D","ucourse4_grade_F");
    average_ugpa=(ugpa1+ugpa2+ugpa3+ugpa4)/4.0;

    document.getElementById("undergraduate-gpa").innerHTML="Your average gpa is "+average_ugpa+".";

    if(average_ugpa>3.2){
        document.getElementById("undergraduate_eligibility").innerHTML='Congratulations! You are eligible to apply for this job. Click <a href="stdJobApForm.html"><b>Here</b> </a> to go to the application page.'
    }
    else{
        document.getElementById("undergraduate_eligibility").innerHTML="Thank you for your interest. At this time you are not eligible to apply for this job."
    }
}

function grad_eligibility(){
    var gradio1 = document.getElementsByName("gcourse1");
    var gradio2 = document.getElementsByName("gcourse2");
    var gradio3 = document.getElementsByName("gcourse3");
    var gradio4 = document.getElementsByName("gcourse4");
    var totalGradiosChecked=0;

    for (var i = 0, len = gradio1.length; i < len; i++) {
         if (gradio1[i].checked) {
            totalGradiosChecked=totalGradiosChecked+1;
         }
    }

    for (var i = 0, len = gradio2.length; i < len; i++) {
        if (gradio2[i].checked) {
           totalGradiosChecked=totalGradiosChecked+1;
        }
   }

   for (var i = 0, len = gradio3.length; i < len; i++) {
        if (gradio3[i].checked) {
            totalGradiosChecked=totalGradiosChecked+1;
        }
    }

    for (var i = 0, len = gradio4.length; i < len; i++) {
        if (gradio4[i].checked) {
           totalGradiosChecked=totalGradiosChecked+1;
        }
   }
   if (totalGradiosChecked<4){
       alert('Please select grade from all the courses');
   }
   else {
        Geligibility();

    }
}

function Geligibility() {
    var average_grad_gpa=0;
    var gpa1=gpa_calculator("course1_grade_A","course1_grade_B","course1_grade_C","course1_grade_D","course1_grade_F");
    var gpa2=gpa_calculator("course2_grade_A","course2_grade_B","course2_grade_C","course2_grade_D","course2_grade_F");
    var gpa3=gpa_calculator("course3_grade_A","course3_grade_B","course3_grade_C","course3_grade_D","course3_grade_F");
    var gpa4=gpa_calculator("course4_grade_A","course4_grade_B","course4_grade_C","course4_grade_D","course4_grade_F");
    average_grad_gpa=(gpa1+gpa2+gpa3+gpa4)/4.0;

    document.getElementById("grad-gpa").innerHTML="Your average gpa is "+average_grad_gpa+".";

    if(average_grad_gpa>3.7){
        document.getElementById("grad_eligibility").innerHTML='Congratulations! You are eligible to apply for this job. Click <a href="stdJobApForm.html"><b>Here</b> </a> to go to the application page.'}
    else{
            document.getElementById("grad_eligibility").innerHTML="Thank you for your interest. At this time you are not eligible to apply for this job."
    }
    
}

function gpa_calculator(a,b,c,d){
    var gpa=0.0;
    if(document.getElementById(a).checked){
        gpa=4.0;
    }
    else if(document.getElementById(b).checked){
        gpa=3.0;
    }
    else if(document.getElementById(c).checked){
        gpa=2.0;
    }
    else if(document.getElementById(d).checked){
        gpa=1.0;
    }
    return gpa;
}