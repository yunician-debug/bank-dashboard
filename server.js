import Anthropic from '@anthropic-ai/sdk';
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

    const client = new Anthropic({ apiKey });

    try {
        const message = await client.messages.create({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 4096,
            messages: [
                {
                    role: 'user',
                    content: `다음 텍스트를 자연스러운 한국어로 번역해주세요. 번역문만 출력하고 설명이나 부연은 생략하세요.\n\n${text}`
                }
            ]
        });

        const translated = message.content[0]?.text ?? '';
        res.json({ translated });
    } catch (err) {
        const status  = err.status  ?? 500;
        const message = err.message ?? '번역 중 오류가 발생했습니다.';
        res.status(status).json({ error: message });
    }
});

app.listen(PORT, () => {
    console.log(`번역 서버 실행 중: http://localhost:${PORT}`);
    console.log(`번역기 열기:       http://localhost:${PORT}/translator.html`);
});
