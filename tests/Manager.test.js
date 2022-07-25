const Manager = require('../lib/manager');
const manager = new Manager('Michael', '1234', '123@email.com', '04123456789' )

test('User can enter name', () => {
   
    expect(manager.name).toBe('Michael')
} );

test('User can enter ID', () => {
    expect(manager.id).toBe('1234')
} );

test('User can enter email', () => {
     expect(manager.email).toBe('123@email.com')
} );

test('User can enter office number', () => {
    expect(manager.officeNumber).toBe('04123456789')
} );
