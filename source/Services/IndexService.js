class IndexService {
    async index(req, res) {
        return res.json("Deu melhor ainda");
    }
}
module.exports = new IndexService();