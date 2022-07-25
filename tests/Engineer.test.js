const Engineer = require('../lib/engineer');
const engineer = new Engineer('Michael', '1234', '123@email.com', 'https://github.com/michael' )

test('User can enter name', () => {
   
    expect(engineer.name).toBe('Michael')
} );

test('User can enter ID', () => {
    expect(engineer.id).toBe('1234')
} );

test('User can enter email', () => {
     expect(engineer.email).toBe('123@email.com')
} );

test('User can enter github', () => {
    expect(engineer.github).toBe('https://github.com/michael')
} );
