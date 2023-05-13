const API_KEY = "XXXXXXXXXXXXXXXX"

const PORT = 8000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/completions', async (req,res)=>{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content:
            `przetlumacz mi slowo/zwrot <${req.body.message}> i zapisz odpowiedz w formacie JSON ktory bedzie mial ponizsza strukture (odpowiednia ja zedytuj) Pamietaj aby twoja cala odpowiedz byla zgodna z formatem JSON oraz nie dodawaj zadnych opisow, tylko i wylacznie JSON!:
            -meanings: [tutaj znaczenia po polsku conajmniej 2 ]
            -sentencesEN: [tutaj przyklady zdan po angielsku  przynajmniej 4]
            -sentencesPL: [tutaj tlumaczenia powyzszych zdan na polski]`
            }],
            max_tokens:200,
        })
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions',options)
      const data = await response.json()
      
      res.send(data)
    } catch (error) {
        console.error(error)
    }
})



app.listen(PORT,() => console.log('Your server is working on '+ PORT))