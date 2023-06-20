const getBookshelvesUseCase = async (response) => {
    const {data} = response 
   
    return data.items

}

export{getBookshelvesUseCase}