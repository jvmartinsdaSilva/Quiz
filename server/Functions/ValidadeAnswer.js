export const validateUserAnswer = (userAnswers, questions) => {
    // Pega apenas as resposta da questão no formato: 
    // questionId: {righ_option, title} / Ex: {'1': {right_option: option_A, title: blá blá, }}
    const answerQuestions = questions.reduce((a, v) => ({ ...a, [v.id]: {right_option: v.right_option, title: v.title, right_option_value: v[v.right_option.toLowerCase()]}}), {}) 

    let points = 0

    
    const answerValidates = userAnswers.map(userAnswer => {
        const questionsId = Object.keys(userAnswer)[0] // Pega o ID da questão, através da chave do Objeto
        const {right_option, title, right_option_value} = answerQuestions[questionsId]  // Através do Id da questão, pega os dados para validação
        const isCorrect = right_option == userAnswer[questionsId] // Verifica se a resposta do usuário é a correta
        if(isCorrect) points ++
        return {questionsId, isCorrect, title, rightOptionValue: right_option_value}
    })
    return {answerValidates, points}
}