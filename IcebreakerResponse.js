function IcebreakerResponse(email){
  this.email = email;
}

IcebreakerResponse.BatchCreate{
  return emails.map(function (email) {
    return new IcebreakerResponse(email[0]);
  })
}
