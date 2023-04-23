import fs from 'fs';
import path from 'path';

export default async (req, res) => {
    // Fetch the PDF file (replace this with your own logic)
    const filePath = path.join(__dirname, 'static/pdf/resume.docx.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    // Send the PDF file as response
    res.setHeader('Content-Type', 'application/pdf');
    res.send(fileBuffer);
};