let jobs = document.getElementsByClassName("list-group-item strip-side-borders");

let jobsArray = new Array;

for (let index = 0; index < jobs.length; index++) {
    job = jobs.item(index);
    url = job.href
    title = job.firstElementChild.firstElementChild.firstChild.data
    
    caracteristicas = job.firstElementChild.firstElementChild.nextElementSibling.children
        city = caracteristicas[0].firstChild.data
        kindOf = caracteristicas[1].firstChild.data
    let jobArray = {"title":title,"url":url,"location":city,"jobType":kindOf}
    jobsArray.push(jobArray);
}

console.table(jobsArray);


let table = '<table class="table table-bordered table-dark">'
+'<thead>'
+'  <tr style="text-align=center">'
+'    <th scope="col">#</th>'
+'    <th scope="col">Job Title</th>'
+'    <th scope="col">Job Location</th>'
+'    <th scope="col">Job type</th>'
+'    <th scope="col">Job url</th>'
+'  </tr>'
+'</thead>'
+'<tbody>';

for (let index = 0; index < jobsArray.length; index++) {
    let jobRow = +'<tr>'
    +'<th scope="row">'+(index+1)+'</th>'
    +'<td>'+jobsArray[index]["title"]+'</td>'
    +'<td>'+jobsArray[index]["location"]+'</td>'
    +'<td>'+jobsArray[index]["jobType"]+'</td>'
    +'<td><a href="'+jobsArray[index]["url"]+'">'+jobsArray[index]["url"]+'</a></td>'
    +'</tr>';

    table += jobRow;
}

table += '</tbody>'
+'</table>'
+'<p>Solved by Edwin Palacios -- Talent.com test</p>';


document.body.innerHTML=table;

