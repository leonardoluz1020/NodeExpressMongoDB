import app from './src/app2.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escutando servidor na porta http://localhost:${port}`);
})
