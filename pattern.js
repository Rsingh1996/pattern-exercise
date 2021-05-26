const squarePattern = (n) => {
    let i, j, string = "";

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            string += "*";
        } string += "\n"
    } return string;
}
const rectangeFilledPattern = (h, w) => {
    let i, j, string = ""
    for (i = 1; i <= h; i++) {
        for (j = 1; j <= w; j++) {
            string += "*";
        } string += "\n";
    }
    return string;
}
const rectangeEmptyPattern = (h, w) => {
    let i, j, string = ""
    for (i = 1; i <= h; i++) {
        for (j = 1; j <= w; j++) {
            if ((i > 1 && i < h) && (j > 1 && j < w)) {
                string += " ";
            } else string += "*";

        } string += "\n";
    }
    return string;
}

const rectangeAlternatePattern = (h, w) => {
    let i, j, string = ""
    for (i = 1; i <= h; i++) {
        for (j = 1; j <= w; j++) {
            if ((i % 2 === 0)) {
                string += "_";
            } else string += "*";
        } string += "\n";
    }
    return string;
}

const trinagleLeft = (n) => {
    let i, j, string = "";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            string += "*"
        } string += "\n";
    } return string;
}
const triangleReverseLeft = (n) => {
    let i, j, string = "";
    for (i = 1; i <= n; i++) {
        for (j = i; j <= n; j++) {
            string += "*"

        } string += "\n";
    } return string;
}

const triangleRight = (n) => {
    let i, j, string = "";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i; j++) {
            string += " "
        }
        for (let k = 0; k < i; k++) {
            string += "*"
        }
        string += "\n";
    } return string;
}
const triangleRevrseRight = (n) => {
    let i, j, string = "";
    for (i = 0; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            string += " "
        }
        for (let k = 0; k < n - i; k++) {
            string += "*"
        }
        string += "\n";
    } return string;
}

const pyramid = (n) => {
    let i, j, string = "";
    for (i = 0; i <= n; i++) {
        for (j = 0; j < n - i; j++) {
            string += " "
        }
        for (let k = 1; k < 2 * (i); k++) {
            string += "*";
        }
        string += "\n";
    } return string;
}

const pyramidReverse = (n) => {
    let i, j, string = "";
    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            string += " "
        }
        for (let k = 1; k < 2 * (n - i); k++) {
            string += "*";
        }
        string += "\n";
    } return (string);
}

const diamond = (n) => {
    let i, j, string = "";
    for (i = 0; i <= n; i++) {
        for (j = 0; j < n - i; j++) {
            string += " "
        }
        for (let k = 1; k < 2 * (i); k++) {
            string += "*";
        }
        string += "\n";
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            string += " "
        }
        for (let k = 1; k < 2 * (n - i); k++) {
            string += "*";
        }
        string += "\n";
    } return (string);
}

console.log(squarePattern(4))
console.log(rectangeFilledPattern(4,6))
console.log(rectangeEmptyPattern(4,6))
console.log(rectangeAlternatePattern(4,6))
console.log(trinagleLeft(4))
console.log(triangleReverseLeft(4))
console.log(triangleRight(4))
console.log(triangleRevrseRight(4))
console.log(pyramid(4))
console.log(pyramidReverse(4))
console.log(diamond(4))
