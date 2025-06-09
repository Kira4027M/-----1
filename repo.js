const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/—͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖/𝙆𝙄𝙍𝘼-𝙈𝘿-𝙑1';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Erreur : L'URL du repo est invalide.");

        const [, username, repoName] = match;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            headers: {
                'User-Agent': '𝙆𝙄𝙍𝘼-𝙈𝘿-𝙑1'
            }
        });

        if (response.status === 503) {
            return reply("❌ GitHub est temporairement indisponible (503). Réessaie plus tard.");
        }

        if (!response.ok) {
            return reply(`❌ Échec de récupération des infos du repo. Code: ${response.status}`);
        }

        const repoData = await response.json();

        const message = `┌──────────────────────┐
│  😎  𝙆𝙄𝙍𝘼-𝙈𝘿-𝙑1 𝗥𝗘𝗣𝗢  😎  
├──────────────────────
│ • Name: ${repoData.name}
│ • Owner: ${repoData.owner.login}
│ • Stars: ${repoData.stargazers_count}
│ • Forks: ${repoData.forks_count}
│ • URL: ${repoData.html_url}
│ • Desc: ${repoData.description || 'None'}
└──────────────────────┘
> *MADE IN BY —͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖*`;

        await conn.sendMessage(from, {
            image: { url: `https://imgur.com/a/wblv4SE ` },
            caption: message,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  
                    newsletterName: config.OWNER_NAME || '—͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo command error:", error);
        reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
     reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
