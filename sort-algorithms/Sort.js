class Sort {
    
    constructor(){

    }

    static factory(className = "Bubble"){

    }

    static sort(list, orderBy = "asc"){

    }

    static isSorted(list, orderBy = "asc"){
        for(let i = 0; i < (list.length - 1); i++) {
            if((orderBy == "asc" && list[i] > list[i + 1])
                || (orderBy != "asc" && list[i] < list[i + 1])){
                return false;
            }
        }
        return true;
    }
}