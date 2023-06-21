interface BookType {
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnail: string;
        }
        authors: string[];

    }
    saleInfo: {
        saleability: string;
    }
}

const searchBookshelvesUseCase = async (response) => {
    const {data} = response 
   
    return data.items as BookType[];
}

export{searchBookshelvesUseCase}