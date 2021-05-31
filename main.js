name_of_the_student_array=[];

function Submit(){
name1=document.getElementById("name_1");
name2=document.getElementById("name_2");
name3=document.getElementById("name_3");
name4=document.getElementById("name_4");

name_of_the_student_array.push(name1);
name_of_the_student_array.push(name2);
name_of_the_student_array.push(name3);
name_of_the_student_array.push(name4);
console.log(name_of_the_student_array);

document.getElementById("display_name").innerHTML=name_of_the_student_array;
document.getElementById("Submit_button").style.display="none";
document.getElementById("Sort_button").style.display="inline-block";
}