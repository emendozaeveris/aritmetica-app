// Función para generar una operación aritmética aleatoria
function generateOperation() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const operand1 = Math.floor(Math.random() * 10) + 1;
    const operand2 = Math.floor(Math.random() * 10) + 1;

    let question = `${operand1} ${operator} ${operand2}`;
    let answer;

    switch (operator) {
        case '+':
            answer = operand1 + operand2;
            break;
        case '-':
            answer = operand1 - operand2;
            break;
        case '*':
            answer = operand1 * operand2;
            break;
        case '/':
            answer = operand1 / operand2;
            break;
    }

    return { question, answer };
}

// Función para desordenar un array
function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
}

// Función para generar una nueva pregunta
function generateNewQuestion() {
    const { question, answer } = generateOperation();
    const options = [answer, answer + 1, answer - 1]; // Opciones con una correcta y dos incorrectas
    const shuffledOptions = shuffleArray(options);

    document.getElementById('question').textContent = `${question} = ?`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Crear botones de opciones
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = () => checkAnswer(option === answer);
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta y dar una respuesta al usuario
function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert('¡Respuesta Correcta!');
    } else {
        alert('Respuesta Incorrecta. Sigue practicando.');
    }

    generateNewQuestion();
}

// Inicializar con la primera pregunta
generateNewQuestion();

// Animar los cubos usando GSAP
gsap.to("#cube1", { x: "100%", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
gsap.to("#cube2", { x: "100%", duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" });
gsap.to("#cube3", { x: "100%", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
gsap.to("#cube4", { x: "100%", duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" });