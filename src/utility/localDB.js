
const getAllReadListFromLocalDB = ()=>{

    const readList = localStorage.getItem('readList');
    console.log(readList, 'read list from localDB');

    if (readList) return readList;
    return [];
}

const addReadListToLocalDB = ()=>{

}


export {getAllReadListFromLocalDB, addReadListToLocalDB}