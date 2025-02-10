import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send("Üdvözöllek a weboldalamon!");
})

app.listen(3003,() => {
    console.log('Server runs on port 3003');
});