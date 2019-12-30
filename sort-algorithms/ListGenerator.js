class ListGenerator{
    static generate(n) {
        let list = [];
        for(let i = 0; i < n; i++){
            list[i] = Math.round(Math.random() * 10000);
        }
        return list;
    }
}