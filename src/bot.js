class Bot {
  constructor(entity) {
    this.entity = entity;
  }

  findAction(value) {
    return this.entityresponse.actions
      .map((actions) => actions.keywords
        .map((keywords) => (keywords === value ? actions.response() : false))
        .filter((action) => (!action ? false : action)));
  }
}

export default Bot;
