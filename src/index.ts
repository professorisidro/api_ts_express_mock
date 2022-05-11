import Api from './infra/api/Api';

Api.listen(3002,()=>{
    console.log("Api está no ar...") ;
});