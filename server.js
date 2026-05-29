import express from 'express';
import cors from 'cors';

const app  = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static('.'));

app.post('/translate', async (req, res) => {
    const { text, apiKey } = req.body;

    if (!text || !apiKey) {
        return res.status(400).json({ error: 'text와 apiKey가 필요합니다.' });
    }

    try {
        const response = await fetch('https://api-free.deepl.com/v2/translate', {
            method: 'POST',
            headers: {
                'Authorization': `DeepL-Auth-Key ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: [text],
                target_lang: 'KO'
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(response.status).json({ error: `DeepL 오류 (${response.status}): ${errText}` });
        }

        const data = await response.json();
        const translated = data.translations[0]?.text ?? '';
        res.json({ translated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`번역 서버 실행 중: http://localhost:${PORT}`);
    console.log(`번역기 열기:       http://localhost:${PORT}/translator.html`);
});
