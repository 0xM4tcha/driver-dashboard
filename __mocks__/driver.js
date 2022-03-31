const driverTransform = {
    id: '2NNaN01776236 16',
    firstName: 'Louane',
    lastName: 'Vidal',
    phoneNumber: '02-62-35-18-98',
    email: 'louane.vidal@example.com',
    dob: '1966-06-26T11:50:25.558Z',
    picture: 'https://randomuser.me/api/portraits/med/women/88.jpg',
}

export default {
    get: jest.fn().mockResolvedValue(driverTransform)
}