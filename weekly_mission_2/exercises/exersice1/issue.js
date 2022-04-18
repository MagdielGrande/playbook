const issue = {
    title: "07 Live 1 Semana 3",
    repositoryNameAssociate: "LaunchX",
    status: "JavaScript",
    numberOfComments: 0,
    labels: [
      'PRÓXIMO LIVE',
      'LIVE',
      'Semana-3'],

    author: 'MagdielGrande',
    dateCreated: '10/abril/2022',
    lastUpdated: '18/abril/2022',

    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This Issue ${this.title} was created by ${this.author}`
    }
   }

   
   console.log("Nombre del issue:" + issue.title)

   console.log(issue.getGeneralInfo())