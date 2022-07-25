const Intern = require('../lib/intern');
const intern = new Intern('Michael', '1234', '123@email.com', 'Sydney High' )

test('User can enter name', () => {
   
    expect(intern.name).toBe('Michael')
} );

test('User can enter ID', () => {
    expect(intern.id).toBe('1234')
} );

test('User can enter email', () => {
     expect(intern.email).toBe('123@email.com')
} );

test('User can enter their school', () => {
    expect(intern.school).toBe('Sydney High')
} );
