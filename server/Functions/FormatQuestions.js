export const formatQuestionsData = datas => {
    const questions = datas.map(data => {
        return {
            id: data.id,
            title: data.title,
            theme: data.theme,
            answers: [
                {option_A: data.option_a},
                {option_B: data.option_b},
                {option_C: data.option_c},
                {option_D: data.option_d},
            ]
        }
    })
    return questions
}