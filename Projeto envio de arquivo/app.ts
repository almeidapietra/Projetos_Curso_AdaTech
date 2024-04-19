import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

interface MulterRequest extends Request {
    files?: Array<any>;
}

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req: Request, res: Response) =>{
    res.sendFile(path.resolve('src/form.html'));
});

app.get('/sucess', (req: Request, res: Response) =>{
    res.sendFile(path.resolve('src/sucess.html'));
});

app.get('/error', (req: Request, res: Response) =>{
    res.sendFile(path.resolve('src/error.html'));
});

app.post('/upload', upload.single('arquivo'), (req: Request, res: Response) =>{
    console.log(req.file);

    if (req.file.size> 0){
        res.redirect('sucess');
    } else {
        res.redirect('error');
    }
});
//rota para multiplos arquivos: utiliza upload.array na rota, e no log é req.fileS:
app.post('/uploads', upload.array('arquivos'), (req: MulterRequest, res: Response) =>{
    console.log(req.files);

    if (req.files.length> 0){
        res.redirect('sucess');
    } else {
        res.redirect('error');
    }
});

app.listen(3000, () => console.log('Servidor inicializado'));