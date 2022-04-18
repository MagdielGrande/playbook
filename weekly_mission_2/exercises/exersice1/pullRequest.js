const pullRequest = {
    title:'Add PR to Magdile',
    branchName:'master',
    dateCreated:'12/12/2022',
    status:'waiting',
    repositoryNameAssociated:'Launch X',

    getStatus: function (){
        return this.status
    },

    getTitleAndAutor: function (){
        return this.title +' '+ this.repositoryNameAssociated
    }
}

console.log("Nombre del Pull Request:" + pullRequest.title)
console.log("Estatus: " + pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())



