// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  saveData(req.body)
  res.status(200).json({ upload: true })
}

function saveData(data) {

  fs.writeFileSync(path.join(process.cwd(), '/data/reward.content.json'), JSON.stringify(data, null, 4));
}
