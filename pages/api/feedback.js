import fs from 'fs';
import path from 'path';

export function getFilePath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function getData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = { id: Math.random(), email, text: feedbackText };

    // store data to database or file

    const filePath = getFilePath();
    const data = getData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'success' });
  } else {
    const filePath = getFilePath();
    const data = getData(filePath);

    res.status(200).json({ feedback: data });
  }
}

export default handler;
