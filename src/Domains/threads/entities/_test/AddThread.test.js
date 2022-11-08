const AddThread = require('../AddThread');
 
describe('a CreateThread entities', () => {
  it('should throw error when owner is null', () => {
        // Arrange
    const payload = {
        title: 'dicodingindonesiadicodingindonesiadicodingindonesiadi',
        body: 'Isi thread',
        owner: '',
    };
    
    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError('CREATE_THREAD.NO_AUTHENTICATION');
  });

  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'abc',
      owner: 'user-123',
    };
 
    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError('CREATE_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      title: 123,
      body: true,
      owner: 'user-123',
    };

    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError('CREATE_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when title contains more than 50 character', () => {
    // Arrange
    const payload = {
      title: 'dicodingindonesiadicodingindonesiadicodingindonesiadicodingdicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      body: 'Isi thread',
      owner: 'user-123',
    };

    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError('CREATE_THREAD.TITLE_LIMIT_CHAR');
  });

  it('should create createThread object correctly', () => {
    // Arrange
    const payload = {
      title: 'abc',
      body: 'abc',
      owner: 'user-123',
    };

    // Action
    const { title, body, owner } = new AddThread(payload);

    // Assert
    expect(title).toEqual(payload.title);
    expect(body).toEqual(payload.body);
    expect(owner).toEqual(payload.owner);
  });
});