const heronsFormula = (a, b, c) => {
    return (1/4) * Math.sqrt(4*a*a*b*b - Math.pow(a*a + b*b - c*c, 2));
}




























document.getElementById('calculate-heron').addEventListener('click', function() {
    var a = document.getElementById('side-a-heron').value;
    var b = document.getElementById('side-b-heron').value;
    var c = document.getElementById('side-c-heron').value;
    document.getElementById('heron-result').value = heronsFormula(a, b, c);;
});

const ambiguousCase = (a, b, A) => {
    var h = b * Math.sin(A * (Math.PI / 180));

    if (A <= 90) {
        console.log('a: ' + a + ' h: ' + h)
        if (a < h) {
            return 'No triangle'
        } else if (a == h) {
            return 'Right triangle'
        } else if (a > h) {
            return 'One triangle'
        } else if ((h < a) && (a < b)) {
            return 'Two triangles (ambiguous case)'
        } else {
            return 'No solution'
        }
    }
    else if (A <= 180) {
        if ((a <= b)) {
            return 'No triangle'
        } else if (a > b) {
            console.log('One triangle obtuse')
            return 'One triangle'
        } else {
            return 'Error.'
        }
    }
}

document.getElementById('calculate-ambiguous').addEventListener('click', function() {
    var a = document.getElementById('side-a-ambiguous').value;
    var b = document.getElementById('side-b-ambiguous').value;
    var A = document.getElementById('angle-a-ambiguous').value;
    document.getElementById('triangle-type-result').value = ambiguousCase(a, b, A);
});


const newtonsMethod = (g) => {

}

document.getElementById('calculate-newton').addEventListener('click', function() {
    var g = document.getElementById('root-guess').value;
    document.getElementById('triangle-type-result').value = ambiguousCase(a, b, A);
});