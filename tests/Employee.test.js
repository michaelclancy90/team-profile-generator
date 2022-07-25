const Employee = require('../lib/employee');
const employee = new Employee('Michael', '1234', '123@email.com' )

test('User can enter name', () => {
   
    expect(employee.name).toBe('Michael')
} );

test('User can enter ID', () => {
    expect(employee.id).toBe('1234')
} );

test('User can enter email', () => {
     expect(employee.email).toBe('123@email.com')
} );
