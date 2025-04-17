export const validateUserAnswer = (userAnswers, questions) => {
    // Pega apenas as resposta da questão no formato: questionId: righ_option  {'1': option_a}
    const answerQuestions = questions.reduce((a, v) => ({ ...a, [v.id]: {right_option: v.right_option, title: v.title}}), {}) 

    const answerValidates = userAnswers.map(userAnswer => {
        const questionsId = Object.keys(userAnswer)[0]
        const {right_option, title} = answerQuestions[questionsId]
        const isCorrect = right_option == userAnswer[questionsId]
        return {questionsId, isCorrect, title}
    })
    return answerValidates
}