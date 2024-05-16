import Book from "../model/bookModel.js"


export const create = async(req, res)=>{
    const {name, author, description, price, available, image} = req.body;
    try {

        const BookData = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });

        if(!BookData){
            return res.status(404).json({msg: "Book data not found"});
        }

        await BookData.save();
        res.status(200).json({msg: "Book created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAll = async (req, res) => {
    try {
        const booksData = await Book.find();
        if (!booksData) {
            return res.status(404).json({ msg: "Book data not found" });
        }
        res.status(200).json(booksData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};



export const getOne = async(req, res) =>{
    try { 
        const id = req.params.id;
        const BookExist = await Book.findById(id);
        if(!BookExist){
            return res.status(404).json({msg: "Book not found"});
        }
        res.status(200).json(BookExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}



export const update = async(req, res) =>{
    try {
        const {name, author, description, price, available, image} = req.body;
        const id = req.params.id;
        const BookExist = await Book.findById(id);
        if(!BookExist){
            return res.status(401).json({msg:"Book not found"});
        }

        const updatedData = await Book.findByIdAndUpdate(id, 
           { name,
            author,
            description,
            price,
            available,
            image
        }, {new:true});
        res.status(200).json({msg: "Book updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteBook =  async(req, res) =>{
    try {

        const id = req.params.id;
        const BookExist = await Book.findById(id);
        if(!BookExist){
            return res.status(404).json({msg: "Book not exist"});
        }
        console.log(BookExist);
        await Book.findByIdAndDelete(id);     
        res.status(200).json({msg: "Book deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}