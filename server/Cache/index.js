import NodeCache from 'node-cache'

const myCache = new NodeCache()

export class CacheQuestions {

    getThemes() {
        const themes = myCache.get("themes")
        return {themes, message: "Dados coletados com successo"}
    }   

    saveThemes(themes){
        if(!themes) return
        myCache.set("themes", themes, 600)
    }

    getQuestions(){}

    saveQuestions(questions){
        questions.map(question => {
            const isCached = myCache.has(question.id)
            if(isCached) return
            myCache.set(question.id, question, 600)
        })
        console.log(myCache.keys())
    }

}