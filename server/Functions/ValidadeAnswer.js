

export const validateUserAnswer = (userAnswers, questions) => {
    const answerQuestions = questions.reduce((a, v) => ({ ...a, [v.id]: v.right_option}), {}) 

    const answerValidates = userAnswers.map(userAnswer => {
        const questionsId = Object.keys(userAnswer)[0]
        const isCorrect = answerQuestions[questionsId] == userAnswer[questionsId]
        return {questionsId, isCorrect}
    })
    return answerValidates
}