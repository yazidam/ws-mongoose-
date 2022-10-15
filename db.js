use library_db; // to create the database and switch to it
db.createCollection("books")

db.collection.insertMany([
    {
        title:"The Adventures of Sherlock Holmes", author:"Arthur Conan Doyle",available:true
    },
    {
        title:"The A B C Murders", author:"Agatha Christie", available: false
    },
    {
        title:"Nemesis", author:"Agatha Christie", available: true
    },
    {
        title:"The Green Mile", author:"Stephen Kin", available:false
    },
    {
        title: "Macbeth", author:"William Shakespeare", available:true
    },
    {
        title: "Treasure island" , author: "Robert Louis Stevenson", available:true
    }
])

db.collection.find().pretty();// find all the items in the collection
db.collection.find({available:true}) // find all the available books
db.collection.find({
    $and:[
        {available:true},
        {author:"Agatha Christie"}
    ]
}); // find all the available books of Agatha Christie
db.collection.findOneAndUpdate({title:"The Green Mile"},{$set:{available:true}})// update the Green mile book to be available
db.collection.find().pretty();// find all the items in the collection