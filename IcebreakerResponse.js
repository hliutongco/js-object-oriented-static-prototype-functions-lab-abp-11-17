function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate(emails){
  emails.map(function (email) {
    return new IcebreakerResponse(email);
  })
}

