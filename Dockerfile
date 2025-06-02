FROM node:lts-buster
RUN git clone https://github.com/—͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖/𝙆𝙄𝙍𝘼-𝙈𝘿-𝙑1/root/—͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖
WORKDIR /root/—͟͟͞͞𝐒𝐂𝐎𝐓𝐓 𝙇𝙄𝙂𝙃𝙏 𝙆𝙄𝙍𝘼✖
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
