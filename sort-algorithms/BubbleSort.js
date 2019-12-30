class BubbleSort extends Sort {
    
    constructor(){
    }

    static sort(list, orderBy = "asc"){
        console.log(list);
        console.log(BubbleSort.badSpaceSort(list));
        console.log(BubbleSort.badSpaceSort(list,"desc"));
        console.log(Sort.isSorted(list));
        console.log(Sort.isSorted(BubbleSort.badSpaceSort(list)));
        console.log(Sort.isSorted(BubbleSort.badSpaceSort(list,"desc"),"desc"));
    }

    static badSpaceSort(list, orderBy = "asc"){
        let sortedList = [...list];
        for(let i = 0; i < list.length; i++){
            for(let j = 0; j < list.length; j++){
                // console.log(j + " | i " + sortedList[i] + " | j " + sortedList[j]);
                if ((orderBy == "asc" && sortedList[i] > sortedList[j]) 
                    || (orderBy != "asc" && sortedList[i] < sortedList[j])){
                    let temp = sortedList[j];
                    sortedList[j] = sortedList[i];
                    sortedList[i] = temp;
                }
            }    
        }
        return sortedList;
    }

}
