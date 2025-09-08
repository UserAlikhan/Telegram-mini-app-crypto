import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN!);

// Basic commands
bot.command("start", (ctx) => {
    ctx.reply("Welcome to the bot. \nUse /help to get available commands.");
});

bot.command('help', (ctx) => {
    ctx.reply(
      'Available commands:\n' +
      '/start - Start the bot\n' +
      '/help - Show this help message\n' +
      '/webapp - Open the Mini App'
    );
});

bot.command('webapp', (ctx) => {
    ctx.reply('Open Web App', {
      reply_markup: {
        inline_keyboard: [[
          { text: "Open App", web_app: { url: process.env.WEBAPP_URL || '' }}
        ]]
      }
    });
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await bot.handleUpdate(body);
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Bot error:', error);
    return new Response('Error', { status: 500 });
  }
}
