export const  getBooksFromLocalStorage = ()=> {
   const data =  localStorage.getItem("books")
    return (data.length > 0) ? (JSON.parse(data)) : [];
};