class ClientsService {
    async GetClients(req, res) {
        return res.json("Deu melhor ainda");
    }
}
module.exports = new ClientsService();