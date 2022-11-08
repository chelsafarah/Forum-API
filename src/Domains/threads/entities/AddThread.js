class AddThread {
  constructor({ title, body, owner }) {
    if (!owner) {
        throw new Error('CREATE_THREAD.NO_AUTHENTICATION');
    }

    if (!title || !body ) {
      throw new Error('CREATE_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string' || typeof owner !== 'string') {
        throw new Error('CREATE_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
   
    if (title.length > 100) {
      throw new Error('CREATE_THREAD.TITLE_LIMIT_CHAR');
    }
   
    this.title = title;
    this.body = body;
    this.owner = owner;
    
  }
}
   
module.exports = AddThread;