import NodeCache from 'node-cache'

const myCache = new NodeCache()

export class CacheQuestions {

    getThemes() { // Retorna todos os temas já salvos na aplicação
        const themes = myCache.get("themes")
        return {themes, message: "Dados coletados com successo"}
    }   

    saveThemes(themes){ // Cria um Cache para os temas disponíveis 
        if(!themes) return
        myCache.set("themes", themes, 600)
    }

    getQuestions(questionId){ // Busca por uma questão no cache pelo Id
        const question = myCache.get(questionId)
        return question
    }

    saveQuestions(questions){ // Crie um cache para as questões ja entregue aos usuários.
        questions.map(question => {
            const isCached = myCache.has(question.id)
            if(isCached) return
            myCache.set(question.id, question, 600)
        })
    }

}