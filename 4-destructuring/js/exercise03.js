users.forEach((element) => {
    const {
        id = 'brak',
        name = 'brak',
        surname = 'brak',
        email = 'brak',
        gender = 'brak',
        img = 'brak',
        phone = 'brak'
    } = element;
    console.log(`id: ${id}`);
    console.log(`name: ${name}`);
    console.log(`surname: ${surname}`);
    console.log(`email: ${email}`);
    console.log(`gender: ${gender}`);
    console.log(`img: ${img}`);
    console.log(`phone: ${phone}`);
})