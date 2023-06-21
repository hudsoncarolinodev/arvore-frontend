const searchBookshelvesUseCase = async (response) => {
    const {data} = response 
   
    return data.items
}

export{searchBookshelvesUseCase}