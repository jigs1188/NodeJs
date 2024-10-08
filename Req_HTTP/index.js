const http=require('http');
const fs=require('fs');
const url=require('url');


// const myserver=http.createServer((req,res)=>{
function myURlserver(req,res){
        
    
    // console.log("new request");
    // // console.log(req.headers);
    // console.log(req);

    // const log=`${Date.now()} :added date`;

    const log1=`${Date.now()},${req.url}, new request received\n`;

    const myurl=url.parse(req.url,true);
    console.log(myurl);


    // fs.appendFile('log.txt',log1,(err,data)=>{
    //     res.end("hello from server again");

    // })

    fs.appendFile('log.txt',log1,(err,data)=>{

        // switch(req.url){
        switch(myurl.pathname){
            case '/':
                res.end("Home page");
                break;
            case '/about':
                // res.end("hello ,I'm Jignesh");
                const username=myurl.query.myname;
                res.end(`hello ${username}`);
                break;
            case '/contacts':
                res.end("hello from contacts");
                break;

            case '/search':
                const search=myurl.query.search_query;
                res.end(`here are is your result ${search}`);
                break;

            default:
                res.end("404 not found");
                break;
        }

    });


    // res.end("hello from server");
}
// );

const myserver=http.createServer(myURlserver);

myserver.listen(3000,()=>console.log("server running on port 3000"));


