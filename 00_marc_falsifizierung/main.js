console.log("Marc liegt absolut falsch.");

function marc_is_wrong() {
    let a = 1;
    a += 4;
    return a;
}

console.log(marc_is_wrong());


// add marc_is_wrong to the body of the document:
document.body.innerHTML = marc_is_wrong();

