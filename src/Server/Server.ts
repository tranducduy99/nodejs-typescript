import {createServer, IncomingMessage, ServerResponse} from 'http'
export class Server {
    private somePrivateLogic() {
        console.log('Doing private logic!')
    }
    public createServer() {
        createServer((req: IncomingMessage, res: ServerResponse) => {
            console.log('got request from:' + req.url.length);
            res.end();
        }).listen(3000)
        console.log('Create Server')
    }
}