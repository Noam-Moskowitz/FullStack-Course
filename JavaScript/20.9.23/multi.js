document.write("<table border='3'>");
for(let x = 1; x<=10; x++){
    document.write("<tr>");
    for(let y=1; y<=10; y++){
        document.write("<td>"+x*y+"</td>");
    }
     document.write("</tr>");
}
document.write("</table border='3'>");