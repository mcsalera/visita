import express from 'express'; //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;       //Save the port number where your server will be listening

const PORT = process.env.PORT || 3000;

app.use(express.static('./'))


app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: './'});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(PORT, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${PORT}`); 
});