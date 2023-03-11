let product =[
    {id:1, pName:'laptop'},
    {id:2, pName:'hp'},
    {id:3, pName:'tv'},
    {id:4, pName:'sony'},
];
module.exports.getAllProducts = (req,res,next) =>{
  // Some object found on query parameters lets check it
    // const {ip, query, params, body,headers} = req;
    // console.log('ip',ip, 'query',query, 'params',params,'body', body, 'headers', headers);
    //Query data using ? sign
    // const {limit,page} = req.query;
    // console.log(limit,page)
    // res.send(product.slice(0,limit));
    //Sending a downloadable folder
    // res.download(__dirname +"/products.controller.js");
    //Sending JSON
    // res.json({"name":"imran"})
    //redirect file
    // res.redirect('/login');
    //
    console.log(res)
    res.send(product)
}

module.exports.getAProductsDetails=(req,res,next)=>{
    //Find a single product
    const {id}=req.params;
    //MongoDb filter ={_id:id}
    const productFound = product.find(prod => prod.id === Number(id))
    res.send(productFound);
}
module.exports.postAProducts = (req,res,next) =>{
    console.log(req.body);
    console.log(req.query);
    res.send(product);
}
module.exports.patchAProducts = (req,res,next) =>{
   const {id} = req.params;
   //In mongodb we use filter
   const filter = {_id:id};
   const existingData = product.find(prod => prod.id === Number(id));
    existingData.id = id;
    existingData.pName = req.body.name;
    res.send(existingData);
    res.status(200).send({success:true,
    message:'Successfully added',
    data:existingData
})
res.status(500).send({
    success:false,
    error:'Internal Server error'
})
}
module.exports.deleteAProducts = (req,res, next) =>{
    console.log(req.params);
    const {id} = req.params;
    product = product.filter(prod => prod.id !== Number(id));
    res.send(product);
}

