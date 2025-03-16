export const formatQuestionsData = datas => {
    const questions = datas.map(data => {
        return {
            id: data.id,
            title: data.title,
            theme: data.theme,
            answers: [
                {option_a: data.option_a},
                {option_b: data.option_b},
                {option_c: data.option_c},
                {option_d: data.option_d},
            ]
        }
    })
    return questions
}