// Claude API への接続テスト
// 実行: node --env-file=.env test.mjs
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // ANTHROPIC_API_KEY を環境変数から自動で読みます

const message = await client.messages.create({
  model: "claude-haiku-4-5-20251001", // 動作確認用に安価で速いモデル
  max_tokens: 200,
  messages: [
    { role: "user", content: "こんにちは！接続テストです。一言で返事してください。" },
  ],
});

console.log("✅ 接続成功！Claudeからの返事:");
console.log(message.content[0].text);
